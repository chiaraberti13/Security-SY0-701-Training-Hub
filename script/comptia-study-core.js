/* global window, CustomEvent */
(function() {
  'use strict';

  // Helper functions to safely read and write to localStorage
  function safeGetItemJson(key, fallback) {
    try {
      const val = window.localStorage.getItem(key);
      if (!val) return fallback;
      return JSON.parse(val);
    } catch (e) {
      console.warn('LocalStorage read/parse error for key:', key, e);
      return fallback;
    }
  }

  function safeSetItemJson(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('LocalStorage write error for key:', key, e);
    }
  }

  function safeRemoveItem(key) {
    try {
      window.localStorage.removeItem(key);
    } catch (e) {
      console.warn('LocalStorage delete error for key:', key, e);
    }
  }

  // Shared state helpers
  const Core = {
    // T-D1: Save past attempts of quizzes & simulations
    saveQuizAttempt(type, title, score, total, domainScores) {
      const history = safeGetItemJson('comptia_quiz_history', []);
      const attempt = {
        id: 'attempt_' + Date.now(),
        timestamp: new Date().toISOString(),
        type: type, // 'exam', 'chapter', 'incorrect', 'bookmarks'
        title: title,
        score: score,
        total: total,
        pct: Math.round((score / total) * 100),
        domainScores: domainScores || {}
      };
      history.unshift(attempt); // newest first
      safeSetItemJson('comptia_quiz_history', history);

      // Trigger standard callback inside global-nav-footer to sync progress or update visual counts
      const event = new CustomEvent('comptia_stats_changed');
      window.dispatchEvent(event);

      return attempt;
    },

    getQuizHistory() {
      return safeGetItemJson('comptia_quiz_history', []);
    },

    clearQuizHistory() {
      safeRemoveItem('comptia_quiz_history');
      const event = new CustomEvent('comptia_stats_changed');
      window.dispatchEvent(event);
    },

    // T-D2 & T-D3: Answers track & incorrect pool
    trackQuestionAnswer(questionId, domain, objective, isCorrect) {
      // Track incorrect pool
      let incorrectPool = safeGetItemJson('comptia_quiz_incorrect_pool', []);
      if (isCorrect) {
        incorrectPool = incorrectPool.filter(id => id !== questionId);
      } else {
        if (!incorrectPool.includes(questionId)) {
          incorrectPool.push(questionId);
        }
      }
      safeSetItemJson('comptia_quiz_incorrect_pool', incorrectPool);

      // Track all-time statistics per question
      const qstats = safeGetItemJson('comptia_qstats', {});
      const cleanDom = parseInt(domain, 10) || 1;
      if (!qstats[questionId]) {
        qstats[questionId] = { c: 0, i: 0, domain: cleanDom, objective: objective };
      }
      // Ensure properties sync in correct type
      qstats[questionId].domain = cleanDom;
      qstats[questionId].objective = objective;

      if (isCorrect) {
        qstats[questionId].c = (qstats[questionId].c || 0) + 1;
      } else {
        qstats[questionId].i = (qstats[questionId].i || 0) + 1;
      }
      qstats[questionId].lastAttempt = Date.now();
      safeSetItemJson('comptia_qstats', qstats);

      const event = new CustomEvent('comptia_stats_changed');
      window.dispatchEvent(event);
    },

    getIncorrectPool() {
      return safeGetItemJson('comptia_quiz_incorrect_pool', []);
    },

    clearIncorrectPool() {
      safeSetItemJson('comptia_quiz_incorrect_pool', []);
      const event = new CustomEvent('comptia_stats_changed');
      window.dispatchEvent(event);
    },

    // T-D3: Get cumulative stats by domain (1 to 5)
    getDomainStats() {
      const qstats = safeGetItemJson('comptia_qstats', {});
      const stats = {
        1: { correct: 0, total: 0 },
        2: { correct: 0, total: 0 },
        3: { correct: 0, total: 0 },
        4: { correct: 0, total: 0 },
        5: { correct: 0, total: 0 }
      };

      Object.keys(qstats).forEach(qId => {
        const item = qstats[qId];
        const dom = item.domain;
        if (dom && stats[dom]) {
          stats[dom].correct += (item.c || 0);
          stats[dom].total += ((item.c || 0) + (item.i || 0));
        }
      });

      return stats;
    },

    // T-D5: Bookmarks (Segnalibri)
    toggleQuestionBookmark(questionId) {
      let bookmarks = safeGetItemJson('comptia_question_bookmarks', []);
      const idx = bookmarks.indexOf(questionId);
      let isBookmarked = false;
      if (idx > -1) {
        bookmarks.splice(idx, 1);
      } else {
        bookmarks.push(questionId);
        isBookmarked = true;
      }
      safeSetItemJson('comptia_question_bookmarks', bookmarks);
      return isBookmarked;
    },

    isQuestionBookmarked(questionId) {
      const bookmarks = safeGetItemJson('comptia_question_bookmarks', []);
      return bookmarks.includes(questionId);
    },

    getQuestionBookmarks() {
      return safeGetItemJson('comptia_question_bookmarks', []);
    },

    toggleChapterBookmark(chapterCode) {
      let bookmarks = safeGetItemJson('comptia_chapter_bookmarks', []);
      const idx = bookmarks.indexOf(chapterCode);
      let isBookmarked = false;
      if (idx > -1) {
        bookmarks.splice(idx, 1);
      } else {
        bookmarks.push(chapterCode);
        isBookmarked = true;
      }
      safeSetItemJson('comptia_chapter_bookmarks', bookmarks);
      
      const event = new CustomEvent('comptia_bookmarks_changed');
      window.dispatchEvent(event);
      return isBookmarked;
    },

    isChapterBookmarked(chapterCode) {
      const bookmarks = safeGetItemJson('comptia_chapter_bookmarks', []);
      return bookmarks.includes(chapterCode);
    },

    getChapterBookmarks() {
      return safeGetItemJson('comptia_chapter_bookmarks', []);
    },

    // T-D4: Spaced Repetition System (SRS) for Glossary
    saveGlossarySRS(termId, stageChange) {
      const srsData = safeGetItemJson('comptia_glossary_srs', {});
      const now = Date.now();
      let stage = 0;
      let intervalDays = 1;

      if (srsData[termId]) {
        stage = srsData[termId].stage || 0;
      }

      if (stageChange === 'again') {
        stage = 0;
        intervalDays = 0.5; // review in 12 hours
      } else if (stageChange === 'hard') {
        stage = Math.max(0, stage - 1);
        intervalDays = (stage === 0) ? 1 : (stage === 1) ? 2 : 4;
      } else if (stageChange === 'easy') {
        stage = stage + 1;
        const daysMap = [1, 3, 7, 14, 30, 90];
        intervalDays = daysMap[Math.min(stage, daysMap.length - 1)];
      }

      srsData[termId] = {
        termId: termId,
        stage: stage,
        intervalDays: intervalDays,
        lastReviewed: now,
        dueTimestamp: now + (intervalDays * 24 * 60 * 60 * 1000)
      };

      safeSetItemJson('comptia_glossary_srs', srsData);
      return srsData[termId];
    },

    getGlossarySRSState(termId) {
      const srsData = safeGetItemJson('comptia_glossary_srs', {});
      return srsData[termId] || null;
    },

    getAllGlossarySRS() {
      return safeGetItemJson('comptia_glossary_srs', {});
    }
  };

  window.ComptiaCore = Core;
})();
