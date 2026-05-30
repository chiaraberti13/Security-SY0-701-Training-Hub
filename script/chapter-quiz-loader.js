(function () {
  'use strict';

  // Autoload comptia-study-core.js fallback
  if (!window.ComptiaCore) {
    var coreScript = document.createElement('script');
    var isChapter = window.location.pathname.indexOf('/chapters/') !== -1 || window.location.pathname.indexOf('_') !== -1;
    coreScript.src = isChapter ? '../script/comptia-study-core.js' : 'script/comptia-study-core.js';
    coreScript.async = false;
    document.head.appendChild(coreScript);
  }

  var STORAGE_KEY = 'lang';

  function getPreferredLanguage() {
    try {
      var saved = (window.localStorage.getItem(STORAGE_KEY) || '').trim().toLowerCase();
      if (saved === 'it' || saved === 'en') {
        return saved;
      }
    } catch (error) {}
    var htmlLang = (document.documentElement.getAttribute('lang') || '').trim().toLowerCase();
    return htmlLang === 'en' ? 'en' : 'it';
  }

  function getChapterObjectives() {
    var tags = Array.prototype.slice.call(document.querySelectorAll('.objectives-tag'));
    return tags
      .map(function (tag) {
        var match = (tag.textContent || '').match(/\d+\.\d+/);
        return match ? match[0] : null;
      })
      .filter(Boolean);
  }

  function shuffle(a) {
    return a.slice().sort(function() { return Math.random() - 0.5; });
  }

  function escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  var quizDatabase = null;
  var quiz = null;
  var chapterQuestions = [];

  async function loadQuizDatabase() {
    if (window.quizDatabase) {
      quizDatabase = window.quizDatabase;
      return quizDatabase;
    }
    // Try to load via fetch if not preloaded
    var urls = ['../script/quiz-database.json', 'script/quiz-database.json'];
    for (var i = 0; i < urls.length; i++) {
      try {
        var res = await fetch(urls[i]);
        if (res && res.ok) {
          var contentType = res.headers.get('content-type') || '';
          if (contentType.toLowerCase().indexOf('text/html') !== -1) {
            continue;
          }
          var text = await res.text();
          if (text.trim().indexOf('<') === 0 || text.indexOf('<!DOCTYPE') !== -1) {
            continue;
          }
          quizDatabase = JSON.parse(text);
          window.quizDatabase = quizDatabase; // cache globally
          return quizDatabase;
        }
      } catch (e) {}
    }
    throw new Error('Database loading failed');
  }

  function getObjectivesString() {
    var objectives = getChapterObjectives();
    if (!objectives.length) return 'Capitolo';
    return 'OBJ ' + objectives.join(', ');
  }

  function initQuizData() {
    var objectives = getChapterObjectives();
    if (!quizDatabase) return;
    
    // Filter questions matching any of the chapter objectives
    if (objectives.length > 0) {
      chapterQuestions = quizDatabase.filter(function (q) {
        return objectives.indexOf(q.objective) !== -1;
      });
    } else {
      chapterQuestions = quizDatabase.slice(0, 10); // fallback
    }
  }

  function injectQuizModalHTML() {
    if (document.getElementById('quiz-overlay')) return;

    var overlayDiv = document.createElement('div');
    overlayDiv.id = 'quiz-overlay';
    overlayDiv.className = 'quiz-overlay';
    overlayDiv.setAttribute('role', 'dialog');
    overlayDiv.setAttribute('aria-modal', 'true');
    overlayDiv.innerHTML = `
      <div class="quiz-modal">
        <div class="quiz-modal-header" style="display: flex; align-items: center; gap: 8px;">
          <span id="quiz-counter" class="quiz-counter"></span>
          <button id="quiz-bookmark-btn" class="quiz-bookmark-btn" title="Salva nei segnalibri 🔖" style="background:none; border:none; color:var(--muted); font-size:1.25rem; cursor:pointer; padding:4px; margin-left: auto; transition: color 0.15s; line-height: 1;">🔖</button>
          <button id="quiz-close-btn" class="quiz-close-btn" aria-label="Chiudi quiz" style="margin-left:0;">✕</button>
        </div>
        <div class="quiz-progress"><div id="quiz-progress-fill" class="quiz-progress-fill"></div></div>

        <!-- Scegli la modalità -->
        <div id="quiz-setup" class="quiz-setup">
          <p class="quiz-setup-title">Scegli la modalità</p>
          <p id="quiz-setup-sub" class="quiz-setup-sub"></p>
          <div class="quiz-setup-options">
            <button class="quiz-mode-btn exam-sim-btn" data-mode="all">
              <strong>Tutte le domande</strong>
              <span id="quiz-mode-all-desc"></span>
            </button>
            <button class="quiz-mode-btn exam-sim-btn" data-mode="quick">
              <strong>Sessione rapida</strong>
              <span>10 domande casuali</span>
            </button>
          </div>
        </div>

        <!-- Contenuto del quiz -->
        <div id="quiz-content" style="display: none;">
          <p id="quiz-question-text" class="quiz-question"></p>
          <div id="quiz-options" class="quiz-options"></div>
          <p id="quiz-explanation" class="quiz-explanation"></p>
          <div class="quiz-footer">
            <button id="quiz-next-btn" class="quiz-btn primary exam-sim-btn" disabled>Avanti →</button>
          </div>
        </div>

        <!-- Risultati -->
        <div id="quiz-result" class="quiz-result" style="display: none;">
          <div id="quiz-result-label" class="quiz-result-label"></div>
          <div id="result-score" class="quiz-result-score"></div>
          <div id="result-pct" class="quiz-result-pct"></div>
          <div class="quiz-result-actions">
            <button id="quiz-retry-btn" class="quiz-btn exam-sim-btn">Riprova</button>
            <button id="quiz-done-btn" class="quiz-btn primary exam-sim-btn">Chiudi</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(overlayDiv);

    // Bind event listeners for the injected elements
    document.getElementById('quiz-close-btn').addEventListener('click', closeQuiz);
    document.getElementById('quiz-done-btn').addEventListener('click', closeQuiz);
    document.getElementById('quiz-retry-btn').addEventListener('click', openQuiz);

    var bookmarkBtn = document.getElementById('quiz-bookmark-btn');
    if (bookmarkBtn) {
      bookmarkBtn.addEventListener('click', function() {
        if (!quiz || !quiz.pool || !quiz.pool[quiz.idx]) return;
        var q = quiz.pool[quiz.idx];
        if (window.ComptiaCore) {
          var isB = window.ComptiaCore.toggleQuestionBookmark(q.id);
          bookmarkBtn.style.color = isB ? '#eab308' : 'var(--muted)';
          bookmarkBtn.title = isB ? 'Rimuovi dai segnalibri' : 'Salva nei segnalibri';
        }
      });
    }

    var modeBtns = overlayDiv.querySelectorAll('.quiz-mode-btn');
    for (var i = 0; i < modeBtns.length; i++) {
      (function(btn) {
        btn.addEventListener('click', function() {
          startQuiz(btn.getAttribute('data-mode'));
        });
      })(modeBtns[i]);
    }

    document.getElementById('quiz-next-btn').addEventListener('click', function() {
      if (quiz.requiredSelections > 1 && !quiz.locked) {
        submitAnswer(quiz.pool[quiz.idx]);
      } else {
        quiz.idx++;
        if (quiz.idx < quiz.pool.length) {
          renderQuestion();
        } else {
          showResults();
        }
      }
    });

    overlayDiv.addEventListener('click', function(e) {
      if (e.target === overlayDiv) closeQuiz();
    });
  }

  function openQuiz() {
    injectQuizModalHTML();
    
    var objectivesStr = getObjectivesString();
    
    document.getElementById('quiz-setup-sub').textContent = objectivesStr + ' · ' + chapterQuestions.length + ' domande disponibili';
    document.getElementById('quiz-mode-all-desc').textContent = chapterQuestions.length + ' domande in ordine casuale';

    document.getElementById('quiz-setup').style.display = 'block';
    document.getElementById('quiz-content').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('quiz-counter').textContent = 'QUIZ CAPITOLO';
    document.getElementById('quiz-progress-fill').style.width = '0%';

    var overlay = document.getElementById('quiz-overlay');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function startQuiz(mode) {
    var pool = shuffle(chapterQuestions).slice(0, mode === 'quick' ? 10 : chapterQuestions.length);
    quiz = { pool: pool, idx: 0, score: 0, locked: false, selections: [], requiredSelections: 1 };
    
    document.getElementById('quiz-setup').style.display = 'none';
    document.getElementById('quiz-content').style.display = 'block';
    document.getElementById('quiz-result').style.display = 'none';
    
    renderQuestion();
  }

  function renderQuestion() {
    var q = quiz.pool[quiz.idx];
    var n = quiz.pool.length;
    var counterEl = document.getElementById('quiz-counter');
    
    var safeSource = q.source ? escapeHTML(q.source) : '';
    counterEl.innerHTML = 'Domanda ' + (quiz.idx + 1) + ' / ' + n + (safeSource ? ' <span class="quiz-source-tag">' + safeSource + '</span>' : '');
    
    document.getElementById('quiz-progress-fill').style.width = ((quiz.idx / n) * 100) + '%';
    document.getElementById('quiz-question-text').textContent = q.text;
    
    var explanEl = document.getElementById('quiz-explanation');
    explanEl.style.display = 'none';
    
    var nextBtn = document.getElementById('quiz-next-btn');
    nextBtn.disabled = true;
    quiz.locked = false;
    quiz.selections = [];

    var bookmarkBtn = document.getElementById('quiz-bookmark-btn');
    if (bookmarkBtn) {
      if (window.ComptiaCore) {
        var isBookmarked = window.ComptiaCore.isQuestionBookmarked(q.id);
        bookmarkBtn.style.color = isBookmarked ? '#eab308' : 'var(--muted)';
        bookmarkBtn.title = isBookmarked ? 'Rimuovi dai segnalibri' : 'Salva nei segnalibri';
      }
    }

    var correctCount = q.opts.filter(function(o) { return o.c; }).length;
    if (correctCount === 0) correctCount = 1;
    quiz.requiredSelections = correctCount;

    if (quiz.requiredSelections > 1) {
      nextBtn.textContent = 'Invia risposta (0/' + quiz.requiredSelections + ')';
    } else {
      nextBtn.textContent = quiz.idx < n - 1 ? 'Avanti \u2192' : 'Vedi risultato';
    }

    var optionsEl = document.getElementById('quiz-options');
    optionsEl.innerHTML = '';
    
    shuffle(q.opts).forEach(function(o) {
      var btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.dataset.oid = o.id;
      
      var optLetter = document.createElement('span');
      optLetter.className = 'quiz-opt-letter';
      optLetter.textContent = o.id;
      
      var optText = document.createElement('span');
      optText.textContent = o.t;
      
      btn.appendChild(optLetter);
      btn.appendChild(optText);
      
      btn.addEventListener('click', function() {
        if (quiz.locked) return;
        
        if (quiz.requiredSelections > 1) {
          var index = quiz.selections.indexOf(o.id);
          if (index > -1) {
            quiz.selections.splice(index, 1);
            btn.classList.remove('selected');
          } else {
            if (quiz.selections.length < quiz.requiredSelections) {
              quiz.selections.push(o.id);
              btn.classList.add('selected');
            }
          }
          nextBtn.textContent = 'Invia risposta (' + quiz.selections.length + '/' + quiz.requiredSelections + ')';
          nextBtn.disabled = (quiz.selections.length < quiz.requiredSelections);
        } else {
          quiz.selections = [o.id];
          submitAnswer(q);
        }
      });
      optionsEl.appendChild(btn);
    });
  }

  function submitAnswer(q) {
    if (quiz.locked) return;
    quiz.locked = true;

    var correctOpts = q.opts.filter(function(o) { return o.c; }).map(function(o) { return o.id; });
    var allCorrectSelected = correctOpts.every(function(id) {
      return quiz.selections.indexOf(id) > -1;
    });

    var isCorrect = allCorrectSelected && quiz.selections.length === correctOpts.length;
    if (isCorrect) {
      quiz.score++;
    }

    if (window.ComptiaCore) {
      window.ComptiaCore.trackQuestionAnswer(q.id, q.domain, q.objective, isCorrect);
    }

    var optionsEl = document.getElementById('quiz-options');
    optionsEl.querySelectorAll('.quiz-option').forEach(function(btn) {
      var o = q.opts.filter(function(x) { return x.id === btn.dataset.oid; })[0] || {};
      btn.disabled = true;
      var isCorrect = o.c;
      var isSelected = quiz.selections.indexOf(btn.dataset.oid) > -1;

      if (isCorrect) {
        btn.classList.add('correct');
      } else if (isSelected) {
        btn.classList.add('wrong');
      }
    });

    var explanEl = document.getElementById('quiz-explanation');
    if (q.expl) {
      explanEl.textContent = q.expl;
      explanEl.style.display = 'block';
    }
    
    var n = quiz.pool.length;
    var nextBtn = document.getElementById('quiz-next-btn');
    nextBtn.textContent = quiz.idx < n - 1 ? 'Avanti \u2192' : 'Vedi risultato';
    nextBtn.disabled = false;
  }

  function showResults() {
    var n = quiz.pool.length;
    var pct = Math.round((quiz.score / n) * 100);
    
    document.getElementById('quiz-content').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'block';
    document.getElementById('quiz-counter').textContent = 'Risultato finale';
    document.getElementById('quiz-progress-fill').style.width = '100%';

    var labelEl = document.getElementById('quiz-result-label');
    var objectivesStr = getObjectivesString();
    labelEl.textContent = 'Risultato ' + objectivesStr;

    document.getElementById('result-score').textContent = quiz.score + ' / ' + n;
    
    var pctEl = document.getElementById('result-pct');
    pctEl.textContent = pct + '%';
    
    // Add correct/wrong color formatting dynamically built from global stylesheet
    if (pct >= 80) {
      pctEl.style.background = '#dcfce7';
      pctEl.style.color = '#15803d';
    } else if (pct >= 60) {
      pctEl.style.background = '#fef3c7';
      pctEl.style.color = '#b45309';
    } else {
      pctEl.style.background = '#fee2e2';
      pctEl.style.color = '#b91c1c';
    }

    if (window.ComptiaCore) {
      var categoryTitle = document.querySelector('h1') ? document.querySelector('h1').textContent : 'Quiz';
      var quizTitle = 'Quiz ' + objectivesStr + ' — ' + categoryTitle;
      window.ComptiaCore.saveQuizAttempt('chapter', quizTitle, quiz.score, n);
    }
  }

  function closeQuiz() {
    var overlay = document.getElementById('quiz-overlay');
    if (overlay) {
      overlay.classList.remove('active');
    }
    document.body.style.overflow = '';
    quiz = null;
  }

  async function bindOpenButton() {
    try {
      await loadQuizDatabase();
      initQuizData();
      
      var openBtn = document.getElementById('quiz-open-btn');
      if (openBtn) {
        // Clone the button to remove old inline listeners from original HTML
        var newOpenBtn = openBtn.cloneNode(true);
        openBtn.parentNode.replaceChild(newOpenBtn, openBtn);
        newOpenBtn.addEventListener('click', openQuiz);
      }
    } catch (err) {
      console.error('Failed to bind quiz open button:', err);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindOpenButton);
  } else {
    bindOpenButton();
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeQuiz();
    }
  });
})();
