(function () {
  'use strict';

  // Helper functions to safely read and write to localStorage
  function safeGetItem(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      console.warn('localStorage read blocked/failed:', e);
      return null;
    }
  }

  function safeSetItem(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.warn('localStorage write blocked/failed:', e);
    }
  }

  // Apply theme immediately on script parsing to minimize flicker
  (function () {
    var savedTheme = safeGetItem('theme');
    var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    var theme = savedTheme || systemTheme;
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  })();

  // 1. Unified translation dictionary for the complete web application UI (T-B6)
  const I18N_DICTIONARY = {
    it: {
      nav_home: "Home",
      nav_guida: "Guida",
      nav_quiz: "Quiz",
      nav_glossario: "Glossario",
      nav_checklist: "Checklist",
      
      // index.html UI
      index_heading: "Guida di studio & Risorse d'esame",
      index_subtitle: "Benvenuto nella piattaforma di studio interattiva per la certificazione CompTIA Security+ (SY0-701). Segui i moduli, esercitati con i quiz e tieni traccia dei tuoi progressi.",
      index_tracker_title: "Stato di Avanzamento Complessivo",
      index_capitoli_title: "Sezioni di Studio & Capitoli Descrittivi",
      index_stats_done: "Completati",
      
      // glossario.html
      glossary_title: "Glossario & Acronimi Fondamentali",
      glossary_subtitle: "Il dizionario tecnico definitivo per l'esame CompTIA Security+ (SY0-701). Memorizza gli acronimi essenziali e i vocaboli chiave ordinati alfabeticamente.",
      glossary_search_placeholder: "Cerca un acronimo o una definizione... (es. 'SIEM', 'cifratura', 'risk')",
      glossary_study_mode: "💡 Modalità Studio (Flashcard)",
      glossary_cat_all: "Tutti i termini",
      glossary_cat_general: "Concetti Generali",
      glossary_cat_crypto: "Crittografia",
      glossary_cat_net: "Infrastruttura & Rete",
      glossary_cat_iam: "Identità & Accessi",
      glossary_cat_ops: "Operazioni & IR",
      glossary_cat_gov: "Governance & Rischio",
      
      // quizzes.html
      quizzes_heading: "Simulatore d'Esame Ufficiale",
      quizzes_subheading: "90 Quesiti con distribuzione proporzionale Security+",
      quizzes_rules_header: "Regole della simulazione:",
      quizzes_rule_1: "Il test è composto da 90 quesiti a risposta multipla estratti casualmente.",
      quizzes_rule_2: "La composizione rispetta i pesi ufficiali CompTIA SY0-701 per darti una simulazione reale.",
      quizzes_rule_3: "La soglia d'esame ufficiale richiede di rispondere correttamente ad almeno l'75% (68/90) dei quesiti.",
      quizzes_rule_4: "Durata massima consentita: 90 minuti (un timer in alto monitorerà il tempo rimanente).",
      quizzes_rule_5: "Tutte le domande includono la correzione in tempo reale e una dettagliata spiegazione.",
      quizzes_rule_6: "Puoi chiudere e riprendere i tuoi studi in qualsiasi momento cliccando sulla '✕'.",
      quizzes_start_btn: "Avvia Simulazione d'Esame →",
      quizzes_loading_db: "Caricamento del Simulatore...",
      quizzes_loading_sub: "Configurazione del database dei quesiti (714 domande)...",
      quizzes_error_db: "Impossibile caricare il database",
      quizzes_error_sub: "Si è verificato un errore durante l'inizializzazione del test. Verifica la tua connessione e riprova.",
      quizzes_reload_btn: "Riprova caricamento",
      quizzes_timer_label: "TEMPO:",
      quizzes_next_btn: "Avanti →",
      quizzes_score_label: "Punteggio Finale",
      quizzes_retry_btn: "Ripeti Test",
      quizzes_done_btn: "Chiudi",
      
      // checklist.html
      checklist_header: "Checklist degli Obiettivi d'Esame",
      checklist_sub: "Verifica e traccia i singoli requisiti e standard dei domini CompTIA Security+ SY0-701.",
      checklist_overall_progress: "Completamento Totale"
    },
    en: {
      nav_home: "Home",
      nav_guida: "Guide",
      nav_quiz: "Quizzes",
      nav_glossario: "Glossary",
      nav_checklist: "Checklist",
      
      // index.html UI
      index_heading: "Study Guide & Exam Resource Hub",
      index_subtitle: "Welcome to the interactive study platform for CompTIA Security+ (SY0-701) certification. Tracing modules, test your skills, and monitor your study objectives.",
      index_tracker_title: "Overall Study Progress Rate",
      index_capitoli_title: "Syllabus Sections & Chapters",
      index_stats_done: "Completed",
      
      // glossario.html
      glossary_title: "Fundamental Glossary & Acronyms",
      glossary_subtitle: "The ultimate technical dictionary for CompTIA Security+ (SY0-701). Memorize core acronyms and keywords ordered alphabetically.",
      glossary_search_placeholder: "Search acronyms or definitions... (e.g. 'SIEM', 'encryption', 'risk')",
      glossary_study_mode: "💡 Study Mode (Flashcards)",
      glossary_cat_all: "All Terms",
      glossary_cat_general: "General Concepts",
      glossary_cat_crypto: "Cryptography",
      glossary_cat_net: "Infrastructure & Network",
      glossary_cat_iam: "Identity & Access",
      glossary_cat_ops: "Operations & Incident Response",
      glossary_cat_gov: "Governance & Risk",
      
      // quizzes.html
      quizzes_heading: "Official Exam Simulator",
      quizzes_subheading: "90 Questions with proportional Security+ domain weights",
      quizzes_rules_header: "Simulation rules:",
      quizzes_rule_1: "The exam consists of 90 multiple-choice questions extracted randomly.",
      quizzes_rule_2: "Section proportions reflect official CompTIA SY0-701 domains for a realistic simulation.",
      quizzes_rule_3: "The official pass rate requires answering correctly to at least 75% (68/90) of the questions.",
      quizzes_rule_4: "Maximum allowed time: 90 minutes (an on-screen countdown timer will monitor remaining time).",
      quizzes_rule_5: "All questions include real-time correct/incorrect feedback along with a detailed rationale.",
      quizzes_rule_6: "You can close and resume your studies at any time by clicking the '✕' close button.",
      quizzes_start_btn: "Start Exam Simulation →",
      quizzes_loading_db: "Loading Exam Simulator...",
      quizzes_loading_sub: "Configuring the practice exam database (714 objectives items)...",
      quizzes_error_db: "Could not load exam database",
      quizzes_error_sub: "An error occurred during test initialization. Check your internet connection and try again.",
      quizzes_reload_btn: "Retry Loading",
      quizzes_timer_label: "TIME:",
      quizzes_next_btn: "Next →",
      quizzes_score_label: "Final Score Summary",
      quizzes_retry_btn: "Retry Test",
      quizzes_done_btn: "Close",
      
      // checklist.html
      checklist_header: "Official Objectives Checklist Manager",
      checklist_sub: "Verify and track your core mastery on CompTIA Security+ SY0-701 subject guidelines.",
      checklist_overall_progress: "Total Checklist Progression"
    }
  };

  // 1.2 Detect Language Choice
  function getLang() {
    var savedLang = safeGetItem('lang');
    if (savedLang) return savedLang;
    
    var userLang = window.navigator.language || window.navigator.userLanguage;
    if (userLang && userLang.toLowerCase().startsWith('it')) {
      return 'it';
    }
    return 'en';
  }

  // 2. Render and synchronize the global navigation bar
  function renderNav() {
    var nav = document.querySelector('.global-nav');
    if (!nav) return;

    // Determine path depth
    var isChapter = window.location.pathname.indexOf('/chapters/') !== -1 || (document.querySelector('.breadcrumb') && window.location.pathname.indexOf('chapters') !== -1);
    var prefix = isChapter ? '../' : '';

    var activePage = '';
    var path = window.location.pathname;
    if (path.indexOf('quizzes.html') !== -1) {
      activePage = 'quiz';
    } else if (path.indexOf('glossario.html') !== -1) {
      activePage = 'glossario';
    } else if (path.indexOf('checklist.html') !== -1) {
      activePage = 'checklist';
    } else if (path.indexOf('index.html') !== -1 || path === '/' || path.endsWith('/')) {
      if (window.location.hash === '#capitoli') {
        activePage = 'guida';
      } else {
        activePage = 'home';
      }
    }

    var lang = getLang();
    var dict = I18N_DICTIONARY[lang] || I18N_DICTIONARY.it;

    nav.innerHTML = `
      <a href="${prefix}index.html" class="global-nav-brand">
        <span>🛡️ CompTIA Security+ SY0-701</span>
      </a>
      <div class="global-nav-links">
        <a href="${prefix}index.html" class="global-nav-link ${activePage === 'home' ? 'active' : ''}">${dict.nav_home}</a>
        <a href="${prefix}index.html#capitoli" class="global-nav-link ${activePage === 'guida' ? 'active' : ''}">${dict.nav_guida}</a>
        <a href="${prefix}quizzes.html" class="global-nav-link ${activePage === 'quiz' ? 'active' : ''}">${dict.nav_quiz}</a>
        <a href="${prefix}glossario.html" class="global-nav-link ${activePage === 'glossario' ? 'active' : ''}">${dict.nav_glossario}</a>
        <a href="${prefix}checklist.html" class="global-nav-link ${activePage === 'checklist' ? 'active' : ''}">${dict.nav_checklist}</a>
        <button id="theme-toggle" class="theme-toggle-btn" aria-label="Cambia tema (Chiaro/Scuro)" title="Cambia tema" style="background: none; border: none; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; padding: 6px; border-radius: var(--radius-sm); color: var(--muted); margin-left: 6px; vertical-align: middle;">
          <!-- SVG loads via JS -->
        </button>
        <button id="lang-toggle" class="lang-toggle-btn" aria-label="Cambia lingua (IT/EN)" title="Cambia lingua" style="background: none; border: none; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; padding: 6px; font-weight: 700; font-size: 0.82rem; color: var(--muted); margin-left: 8px; vertical-align: middle; font-family: var(--font-sans);">
          <!-- Lang text loads via JS -->
        </button>
      </div>
    `;
  }

  // 2.1 Initialise Dark Theme Toggle Button
  function initThemeToggle() {
    var toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;

    var sunIcon = `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="theme-icon-sun" style="display: block;"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    
    var moonIcon = `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="theme-icon-moon" style="display: block;"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

    function updateToggleIcon() {
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      toggleBtn.innerHTML = isDark ? sunIcon : moonIcon;
    }

    updateToggleIcon();

    toggleBtn.addEventListener('click', function () {
      var currentTheme = document.documentElement.getAttribute('data-theme');
      if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        safeSetItem('theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        safeSetItem('theme', 'dark');
      }
      updateToggleIcon();
    });
  }

  // 2.2 Initialise Language Translation Engine
  function initLanguageEngine() {
    var langBtn = document.getElementById('lang-toggle');
    if (!langBtn) return;

    function updateLangBtnText() {
      var currentLang = getLang();
      langBtn.textContent = currentLang === 'it' ? 'EN' : 'IT';
    }

    function translatePage() {
      var lang = getLang();
      var dict = I18N_DICTIONARY[lang];
      if (!dict) return;

      document.documentElement.setAttribute('lang', lang);
      document.documentElement.setAttribute('data-lang', lang);

      var elements = document.querySelectorAll('[data-i18n]');
      elements.forEach(function(el) {
        var key = el.getAttribute('data-i18n');
        if (key && dict[key]) {
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.setAttribute('placeholder', dict[key]);
          } else {
            el.textContent = dict[key];
          }
        }
      });

      // Synchronize navigation links
      renderNav();
      initThemeToggle();
      initLanguageEngine();
    }

    updateLangBtnText();

    langBtn.addEventListener('click', function() {
      var currentLang = getLang();
      var nextLang = currentLang === 'it' ? 'en' : 'it';
      safeSetItem('lang', nextLang);
      translatePage();
      
      // Fire generic triggers so other components listen to it
      window.dispatchEvent(new window.CustomEvent('languagechange', { detail: nextLang }));
    });
  }

  // 3. Render and append a beautiful shared global footer
  function renderFooter() {
    if (document.querySelector('.global-footer')) return;

    var container = document.querySelector('.container');
    if (!container) return;

    var footer = document.createElement('footer');
    footer.className = 'global-footer';
    footer.setAttribute('style', 'text-align: center; padding: 24px 16px; margin-top: 48px; border-top: 1px solid var(--light-slate); font-size: 0.85rem; color: var(--muted);');
    footer.innerHTML = `
      <p style="margin: 0; line-height: 1.5;">© 2026 Chiara Berti · CompTIA Security+ SY0-701 Study Guide. All rights reserved.</p>
      <p style="margin: 4px 0 0 0; font-style: italic; font-size: 0.8rem; line-height: 1.5;">“Stay safe, harden your endpoints, and clear your exam on the first attempt!” 🛡️</p>
    `;

    container.appendChild(footer);
  }

  function init() {
    renderNav();
    initThemeToggle();
    initLanguageEngine();
    renderFooter();

    // Trigger page translation check on initial load dynamically
    var lang = getLang();
    var dict = I18N_DICTIONARY[lang];
    if (dict) {
      document.documentElement.setAttribute('lang', lang);
      document.documentElement.setAttribute('data-lang', lang);
      var elements = document.querySelectorAll('[data-i18n]');
      elements.forEach(function(el) {
        var key = el.getAttribute('data-i18n');
        if (key && dict[key]) {
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.setAttribute('placeholder', dict[key]);
          } else {
            el.textContent = dict[key];
          }
        }
      });
    }

    // Register Service Worker for offline PWA capabilities (T-B5)
    if ('serviceWorker' in window.navigator) {
      window.addEventListener('load', function() {
        var isChapter = window.location.pathname.indexOf('/chapters/') !== -1 || (document.querySelector('.breadcrumb') && window.location.pathname.indexOf('chapters') !== -1);
        var swPath = isChapter ? '../sw.js' : 'sw.js';
        
        window.navigator.serviceWorker.register(swPath).then(function(registration) {
          console.log('[Service Worker] Registrato con successo con scope:', registration.scope);
        }).catch(function(err) {
          console.warn('[Service Worker] Registrazione fallita:', err);
        });
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Listen for hash changes to update active state for #capitoli
  window.addEventListener('hashchange', function() {
    init();
  });
})();
