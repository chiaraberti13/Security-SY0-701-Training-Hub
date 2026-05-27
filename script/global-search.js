(function () {
  'use strict';

  // 1. Detect environment and resolve relative path prefix
  // If path contains '/chapters/', we are in a subfolder and need to prepend '../'
  const isSubdir = window.location.pathname.includes('/chapters/');
  const pathPrefix = isSubdir ? '../' : './';

  // 2. Global variables
  let searchIndex = null;
  let modalElement = null;
  let activeResults = [];
  let selectedIndex = -1;
  let searchTriggerBtn = null;

  // Translation helpers
  const categoryMap = {
    ops: 'Sicurezza Operativa',
    gov: 'Governance &amp; Conformità',
    crypto: 'Crittografia &amp; Dati',
    net: 'Sicurezza delle Reti',
    general: 'Concetti Generali'
  };

  // Resolve page links relative to the current folder depth
  function resolveLink(link) {
    if (!link) return '#';
    if (link.startsWith('http://') || link.startsWith('https://')) return link;
    let cleanLink = link;
    if (cleanLink.startsWith('/')) {
      cleanLink = cleanLink.substring(1);
    }
    return pathPrefix + cleanLink;
  }

  // 3. Inject Search Button into Header Global Navigation
  function injectSearchButton() {
    const navLinksContainer = document.querySelector('.global-nav-links');
    if (!navLinksContainer) return;

    // Check if search button already exists
    if (document.getElementById('global-search-trigger')) return;

    const btn = document.createElement('button');
    btn.id = 'global-search-trigger';
    btn.className = 'global-nav-search-btn';
    btn.setAttribute('aria-label', 'Cerca argomenti nella guida');
    btn.setAttribute('title', 'Cerca (Ctrl+K o /)');
    btn.innerHTML = `
      <svg class="search-icon-svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <span class="search-btn-text">Cerca...</span>
      <kbd class="search-btn-kbd">Ctrl+K</kbd>
    `;

    // Append to the end of the navigation list
    navLinksContainer.appendChild(btn);
    searchTriggerBtn = btn;

    // Hook click listener
    btn.addEventListener('click', openSearchModal);
  }

  // 4. Keyboard Shortcuts Setup (Ctrl+K, Cmd+K, or '/' outside input fields)
  function setupKeyboardShortcuts() {
    window.addEventListener('keydown', function (e) {
      // Hotkey: Ctrl+K or Cmd+K
      const isKCommand = (e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K');
      // Hotkey: '/' key, but ignore if the user is typing inside an input/textarea
      const isSlashCommand = e.key === '/' && 
                             document.activeElement.tagName !== 'INPUT' && 
                             document.activeElement.tagName !== 'TEXTAREA';

      if (isKCommand || isSlashCommand) {
        e.preventDefault();
        openSearchModal();
      }
    });
  }

  // 5. Open and Initialize the Search Modal
  function openSearchModal() {
    if (!modalElement) {
      createSearchModalDOM();
    }

    modalElement.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Lock background scrolling
    
    const inputField = modalElement.querySelector('.search-modal-input');
    inputField.value = '';
    inputField.focus();
    
    // Clear and reset results status
    renderTips();

    // Dynamically fetch search data on first open
    if (!searchIndex) {
      loadSearchIndex();
    }
  }

  // 6. Close Search Modal
  function closeSearchModal() {
    if (!modalElement) return;
    modalElement.style.display = 'none';
    document.body.style.overflow = ''; // Unlock background scrolling
    
    // Restore focus back to trigger button for accessibility
    if (searchTriggerBtn) {
      searchTriggerBtn.focus();
    }
  }

  // 7. Load Search Index Dataset on Demand
  function loadSearchIndex() {
    const resultsContainer = modalElement.querySelector('.search-modal-results');
    resultsContainer.innerHTML = `
      <div class="search-no-results">
        <p>🔄 Caricamento dell'indice di ricerca...</p>
        <small>Analizziamo capitoli, quiz e oltre 1.500 voci del glossario.</small>
      </div>
    `;

    fetch(resolveLink('script/search-data.json'))
      .then(response => {
        if (!response.ok) {
          throw new Error('Impossibile caricare i dati di ricerca.');
        }
        return response.json();
      })
      .then(data => {
        searchIndex = data;
        renderTips(); // Reset back to tips/empty view
        
        // If user already typed something while loading, trigger immediate search
        const inputField = modalElement.querySelector('.search-modal-input');
        if (inputField && inputField.value.trim().length > 0) {
          performSearch(inputField.value);
        }
      })
      .catch(err => {
        console.error('Error loading search index:', err);
        resultsContainer.innerHTML = `
          <div class="search-no-results" style="color: var(--critical);">
            <p>⚠️ Errore nel caricamento dei dati di ricerca.</p>
            <small>Riprova più tardi o carica nuovamente la pagina.</small>
          </div>
        `;
      });
  }

  // 8. Create the Spotlight Search Modal DOM Elements
  function createSearchModalDOM() {
    modalElement = document.createElement('div');
    modalElement.id = 'global-search-modal';
    modalElement.className = 'search-modal-backdrop';
    modalElement.style.display = 'none';

    modalElement.innerHTML = `
      <div class="search-modal-content">
        <div class="search-modal-header">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#64748B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" class="search-modal-input" placeholder="Cerca argomenti, capitoli, quiz o acronimi (es. SIEM, MFA, audit)..." aria-label="Cerca nel portale" autocomplete="off" />
          <button TYPE="button" class="search-modal-close-btn" aria-label="Chiudi ricerca" title="Chiudi (Esc)">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="search-modal-quick-tips">
          <span>Usa <kbd>↑</kbd> <kbd>↓</kbd> per navigare, <kbd>Invio</kbd> per aprire</span>
          <span>Premere <kbd>Esc</kbd> per chiudere</span>
        </div>
        <div class="search-modal-results"></div>
      </div>
    `;

    document.body.appendChild(modalElement);

    // Close on backdrop click
    modalElement.addEventListener('click', function (e) {
      if (e.target === modalElement) {
        closeSearchModal();
      }
    });

    // Close button click
    modalElement.querySelector('.search-modal-close-btn').addEventListener('click', closeSearchModal);

    // Input handlers
    const inputField = modalElement.querySelector('.search-modal-input');
    inputField.addEventListener('input', function (e) {
      performSearch(e.target.value);
    });

    // Keyboard controls in Modal
    inputField.addEventListener('keydown', handleModalKeys);
  }

  // 9. Show Default Helpful Tips / Suggested Searches
  function renderTips() {
    if (!modalElement) return;
    const resultsContainer = modalElement.querySelector('.search-modal-results');
    resultsContainer.innerHTML = `
      <div class="search-no-results">
        <p>🔍 Guida alla ricerca istantanea</p>
        <small style="margin-bottom: 12px; display: block;">Puoi cercare qualsiasi capitolo, argomento d'esame o termine specialistico nel database di 1567 voci.</small>
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-top: 14px;">
          <button type="button" class="filter-tab" onclick="document.querySelector('.search-modal-input').value = 'SIEM'; document.querySelector('.search-modal-input').dispatchEvent(new Event('input'));">SIEM</button>
          <button type="button" class="filter-tab" onclick="document.querySelector('.search-modal-input').value = 'Audit'; document.querySelector('.search-modal-input').dispatchEvent(new Event('input'));">Audit</button>
          <button type="button" class="filter-tab" onclick="document.querySelector('.search-modal-input').value = 'MFA'; document.querySelector('.search-modal-input').dispatchEvent(new Event('input'));">MFA</button>
          <button type="button" class="filter-tab" onclick="document.querySelector('.search-modal-input').value = 'OWASP'; document.querySelector('.search-modal-input').dispatchEvent(new Event('input'));">OWASP</button>
          <button type="button" class="filter-tab" onclick="document.querySelector('.search-modal-input').value = '4.4'; document.querySelector('.search-modal-input').dispatchEvent(new Event('input'));">OBJ 4.4</button>
        </div>
      </div>
    `;
    activeResults = [];
    selectedIndex = -1;
  }

  // Helper to strip Italian accents for fuzzy matching
  function normalizeText(str) {
    if (!str) return '';
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  // 10. Core Search Algorithm with Weighted Scoring
  function performSearch(query) {
    if (!searchIndex) return;

    const trimmed = query.trim();
    if (trimmed.length < 2) {
      renderTips();
      return;
    }

    const normQuery = normalizeText(trimmed);
    const keywords = normQuery.split(/\s+/).filter(k => k.length > 0);

    const matches = [];

    // Search Chapters
    searchIndex.chapters.forEach(ch => {
      let score = 0;
      const titleNorm = normalizeText(ch.title);
      const objNorm = normalizeText(ch.objective);
      const refNorm = normalizeText(ch.manualRef);

      // Exact or partial match on Objective Identifier (e.g., 4.4 or 1.1)
      if (ch.objective === trimmed) {
        score += 150;
      } else if (normQuery.includes(objNorm) || objNorm.includes(normQuery)) {
        score += 80;
      }

      // Title contains complete query or keywords
      if (titleNorm.includes(normQuery)) {
        score += 100;
      } else {
        keywords.forEach(kw => {
          if (titleNorm.includes(kw)) score += 30;
        });
      }

      // Reference contains query
      if (refNorm.includes(normQuery)) {
        score += 40;
      }

      if (score > 0) {
        matches.push({
          type: 'chapter',
          id: ch.id,
          title: ch.title,
          sub: `Capitolo per l'obiettivo d'esame officiale • OBJ ${ch.objective} (Rif. Manuale: ${ch.manualRef})`,
          desc: `Preparati su questo obiettivo con il capitolo della guida e testa la tua competenza con il relativo simulatore interattivo da ${ch.numQuestions} domande.`,
          url: resolveLink(ch.chapterUrl),
          score: score
        });

        // Also add the quiz directly to findings if scored high
        matches.push({
          type: 'quiz',
          id: ch.id + '-quiz',
          title: `Quiz — ${ch.title}`,
          sub: `Simulatore d'esame ufficiale (${ch.numQuestions} quesiti) • OBJ ${ch.objective}`,
          desc: `Allena la tua risposta d'attacco cibernetica e impara dai riscontri. Include correzione dinamica immediata delle domande d'esame.`,
          url: resolveLink(ch.quizUrl),
          score: score - 5 // Slightly lower weight than the reading material
        });
      }
    });

    // Search Glossary (1567 items!)
    searchIndex.glossary.forEach(term => {
      let score = 0;
      const acNorm = normalizeText(term.acronym);
      const nameNorm = normalizeText(term.name);
      const defNorm = normalizeText(term.def);

      // 1. Acronym match (Highest priority)
      if (acNorm === normQuery) {
        score += 200;
      } else if (acNorm.startsWith(normQuery)) {
        score += 120;
      } else if (acNorm.includes(normQuery)) {
        score += 80;
      }

      // 2. Name match
      if (nameNorm === normQuery) {
        score += 150;
      } else if (nameNorm.startsWith(normQuery)) {
        score += 100;
      } else if (nameNorm.includes(normQuery)) {
        score += 60;
      }

      // 3. Definition matches
      if (defNorm.includes(normQuery)) {
        score += 30;
      } else {
        // Individual keyword occurrences inside definitions
        keywords.forEach(kw => {
          if (defNorm.includes(kw)) score += 5;
        });
      }

      // Filter tags / categories matches
      if (normalizeText(term.category).includes(normQuery)) {
        score += 10;
      }

      if (score > 0) {
        matches.push({
          type: 'glossary',
          acronym: term.acronym,
          name: term.name,
          title: term.acronym && term.acronym !== term.name ? `${term.acronym} — ${term.name}` : term.name,
          sub: `Termine del Glossario • Area: ${categoryMap[term.category] || term.category} • Rif: ${term.source_name || 'N/D'}`,
          desc: term.def,
          url: resolveLink(term.source_link),
          score: score
        });
      }
    });

    // Sort descending by calculated score
    matches.sort((a, b) => b.score - a.score);

    // Grouping and capping results for extreme high performance (Spotlight standard)
    // Slice total results up to a maximum of 30 items
    const truncatedMatches = matches.slice(0, 30);
    renderSearchResults(truncatedMatches, trimmed);
  }

  // 11. Render Search Results to the list container
  function renderSearchResults(results, queryText) {
    const resultsContainer = modalElement.querySelector('.search-modal-results');
    
    if (results.length === 0) {
      resultsContainer.innerHTML = `
        <div class="search-no-results">
          <p>😢 Nessun risultato per "<strong>${escapeHtml(queryText)}</strong>"</p>
          <small>Prova a verificare la grafia o cerca un altro termine.</small>
        </div>
      `;
      activeResults = [];
      selectedIndex = -1;
      return;
    }

    // Classify results by type for a beautiful structured display
    const chapters = results.filter(r => r.type === 'chapter');
    const quizzes = results.filter(r => r.type === 'quiz');
    const terms = results.filter(r => r.type === 'glossary');

    let html = '';

    // Group 1: Chapters matches
    if (chapters.length > 0) {
      html += `
        <div class="search-result-group">
          <div class="search-result-group-title">Capitoli della Guida (${chapters.length})</div>
          <div class="search-result-items">
            ${chapters.map((r, i) => renderItemCard(r)).join('')}
          </div>
        </div>
      `;
    }

    // Group 2: Quizzes matches
    if (quizzes.length > 0) {
      html += `
        <div class="search-result-group">
          <div class="search-result-group-title">Quiz d'Esame (${quizzes.length})</div>
          <div class="search-result-items">
            ${quizzes.map((r, i) => renderItemCard(r)).join('')}
          </div>
        </div>
      `;
    }

    // Group 3: Glossary Terms Matches
    if (terms.length > 0) {
      html += `
        <div class="search-result-group">
          <div class="search-result-group-title">Glossario &amp; Acronimi (${terms.length})</div>
          <div class="search-result-items">
            ${terms.map((r, i) => renderItemCard(r)).join('')}
          </div>
        </div>
      `;
    }

    resultsContainer.innerHTML = html;

    // Cache active result nodes to handle keyboard arrows indexing
    activeResults = Array.from(resultsContainer.querySelectorAll('.search-result-item'));
    selectedIndex = -1; // Reset highlights
  }

  // Render a single styled item card
  function renderItemCard(item) {
    let badgeClass = 'result-item-badge';
    let badgeLabel = 'Glossario';
    let icon = '📖';

    if (item.type === 'chapter') {
      badgeClass += ' chapter';
      badgeLabel = 'Capitolo';
      icon = '📚';
    } else if (item.type === 'quiz') {
      badgeClass += ' quiz';
      badgeLabel = 'Quiz';
      icon = '⏱️';
    } else {
      icon = '🛡️';
    }

    return `
      <a href="${item.url}" class="search-result-item" data-url="${item.url}">
        <div class="result-item-header">
          <div class="result-item-title-wrapper">
            <span style="font-size: 1.1rem; flex-shrink: 0;">${icon}</span>
            <span class="result-item-title">${escapeHtml(item.title)}</span>
          </div>
          <span class="${badgeClass}">${badgeLabel}</span>
        </div>
        <div class="result-item-meta">${item.sub}</div>
        <div class="result-item-desc">${escapeHtml(item.desc)}</div>
      </a>
    `;
  }

  // 12. Modal Keyboard Navigation Strategy (Up/Down/Enter/Escape)
  function handleModalKeys(e) {
    if (!activeResults.length) {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeSearchModal();
      }
      return;
    }

    const resultsCount = activeResults.length;

    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        closeSearchModal();
        break;

      case 'ArrowDown':
        e.preventDefault();
        // Remove selection from previous item
        if (selectedIndex >= 0 && selectedIndex < resultsCount) {
          activeResults[selectedIndex].classList.remove('selected');
        }

        // Increment index
        selectedIndex = (selectedIndex + 1) % resultsCount;

        // Apply visual and scroll
        activeResults[selectedIndex].classList.add('selected');
        activeResults[selectedIndex].scrollIntoView({ block: 'nearest' });
        break;

      case 'ArrowUp':
        e.preventDefault();
        // Remove selection from previous item
        if (selectedIndex >= 0 && selectedIndex < resultsCount) {
          activeResults[selectedIndex].classList.remove('selected');
        }

        // Decrement index (handling underflow)
        selectedIndex = (selectedIndex - 1 + resultsCount) % resultsCount;

        // Apply visual and scroll
        activeResults[selectedIndex].classList.add('selected');
        activeResults[selectedIndex].scrollIntoView({ block: 'nearest' });
        break;

      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < resultsCount) {
          activeResults[selectedIndex].click();
        } else if (resultsCount > 0) {
          // If no item is explicitly highlighted, hit enter to open the very first result
          activeResults[0].click();
        }
        break;
    }
  }

  // Helper: Prevents HTML Injection while searching
  function escapeHtml(unsafe) {
    if (!unsafe) return '';
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // 12.5 Normalize Global Navigation Links to ensure consistency
  function normalizeNavbar() {
    const navLinksContainer = document.querySelector('.global-nav-links');
    if (!navLinksContainer) return;

    // Detect active page based on current filename
    const path = window.location.pathname.toLowerCase();
    
    const isRootHome = path.endsWith('index.html') || path.endsWith('/') || (!path.includes('.html') && !path.includes('/chapters/'));
    const isHome = isRootHome && !window.location.hash.includes('capitoli');
    const isGuidaMenu = isRootHome && window.location.hash.includes('capitoli');
    const isQuiz = path.includes('quizzes.html');
    const isGlossario = path.includes('glossario.html');
    const isChecklist = path.includes('checklist.html');

    const homeUrl = resolveLink('index.html');
    const guidaMenuUrl = resolveLink('index.html#capitoli');
    const quizUrl = resolveLink('quizzes.html');
    const glossarioUrl = resolveLink('glossario.html');
    const checklistUrl = resolveLink('checklist.html');

    navLinksContainer.innerHTML = `
      <a href="${homeUrl}" class="global-nav-link${isHome ? ' active' : ''}">Home</a>
      <a href="${guidaMenuUrl}" class="global-nav-link${isGuidaMenu ? ' active' : ''}">Guida</a>
      <a href="${quizUrl}" class="global-nav-link${isQuiz ? ' active' : ''}">Quiz</a>
      <a href="${glossarioUrl}" class="global-nav-link${isGlossario ? ' active' : ''}">Glossario</a>
      <a href="${checklistUrl}" class="global-nav-link${isChecklist ? ' active' : ''}">Checklist</a>
    `;
  }

  // 13. Initialization Router
  function initialize() {
    normalizeNavbar();
    injectSearchButton();
    setupKeyboardShortcuts();

    // Re-normalize dynamic active classes when hash changes
    window.addEventListener('hashchange', normalizeNavbar);

    // Auto-detect chapter and apply domain class to body for background/accent styling
    const path = window.location.pathname;
    const match = path.match(/obj([1-5])_/i);
    if (match && document.body) {
      document.body.classList.add(`dom-${match[1]}`);
    }
  }

  // Fire as soon as structural DOM elements are parsed (safe and fast)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }

})();
