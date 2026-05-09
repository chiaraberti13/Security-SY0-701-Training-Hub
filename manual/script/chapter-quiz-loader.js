(function () {
  'use strict';

  var STORAGE_KEY = 'lang';

  function getPreferredLanguage() {
    try {
      var saved = (window.localStorage.getItem(STORAGE_KEY) || '').trim().toLowerCase();
      if (saved === 'it' || saved === 'en') {
        return saved;
      }
    } catch (error) {
      // localStorage can be unavailable in hardened browser profiles.
    }

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

  function createQuestionsForChapter(lang) {
    if (typeof window.loadQuestions !== 'function') {
      return [];
    }

    var objectives = getChapterObjectives();
    var allQuestions = window.loadQuestions(lang);

    if (!objectives.length) {
      return allQuestions.slice(0, 5);
    }

    var filtered = allQuestions.filter(function (question) {
      return objectives.indexOf(question.objective) !== -1;
    });

    return filtered.length ? filtered.slice(0, 5) : allQuestions.slice(0, 5);
  }

  function renderChapterQuestions(questions) {
    if (!questions.length) {
      return;
    }

    var main = document.querySelector('main');
    if (!main || main.querySelector('[data-chapter-quiz]')) {
      return;
    }

    var section = document.createElement('section');
    section.setAttribute('data-chapter-quiz', 'true');
    section.className = 'card';

    var title = document.createElement('h2');
    title.textContent = lang === 'en' ? 'Quick chapter quiz' : 'Quiz rapido capitolo';
    section.appendChild(title);

    var list = document.createElement('ol');
    questions.forEach(function (question) {
      var item = document.createElement('li');
      item.style.marginBottom = '0.7rem';
      item.textContent = question.text;
      list.appendChild(item);
    });

    section.appendChild(list);
    main.appendChild(section);
  }

  function init() {
    var lang = getPreferredLanguage();
    var chapterQuestions = createQuestionsForChapter(lang);

    window.CHAPTER_QUESTIONS = chapterQuestions;
    renderChapterQuestions(chapterQuestions);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
