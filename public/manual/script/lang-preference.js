(function () {
  'use strict';

  var LANG_KEY = 'lang';

  function saveLanguagePreference(lang) {
    if (lang !== 'it' && lang !== 'en') {
      return;
    }

    try {
      window.localStorage.setItem(LANG_KEY, lang);
    } catch (error) {
      // localStorage may be blocked by browser/privacy settings.
    }
  }

  function getSavedLanguagePreference() {
    try {
      var saved = (window.localStorage.getItem(LANG_KEY) || '').trim().toLowerCase();
      if (saved === 'it' || saved === 'en') {
        return saved;
      }
    } catch (error) {
      // localStorage may be blocked by browser/privacy settings.
    }

    return null;
  }

  function getCurrentPageLanguage() {
    var html = document.documentElement;
    var dataLang = ((html.getAttribute('data-lang') || '').trim().toLowerCase());
    if (dataLang === 'it' || dataLang === 'en') {
      return dataLang;
    }

    var langAttr = ((html.getAttribute('lang') || '').trim().toLowerCase());
    if (langAttr === 'it' || langAttr === 'en') {
      return langAttr;
    }

    if (window.location.pathname.indexOf('/chapters/en/') !== -1 || /\/index_en\.html$/i.test(window.location.pathname)) {
      return 'en';
    }

    return 'it';
  }

  function buildRedirectUrl(targetLang) {
    var url = new URL(window.location.href);
    var path = url.pathname;

    if (targetLang === 'en') {
      if (/\/chapters\/(?!en\/)([^/]+\.html)$/i.test(path)) {
        path = path.replace(/\/chapters\/([^/]+\.html)$/i, '/chapters/en/$1');
      } else if (/\/index\.html$/i.test(path)) {
        path = path.replace(/\/index\.html$/i, '/index_en.html');
      } else {
        return null;
      }
    } else if (targetLang === 'it') {
      if (/\/chapters\/en\/([^/]+\.html)$/i.test(path)) {
        path = path.replace(/\/chapters\/en\/([^/]+\.html)$/i, '/chapters/$1');
      } else if (/\/index_en\.html$/i.test(path)) {
        path = path.replace(/\/index_en\.html$/i, '/index.html');
      } else {
        return null;
      }
    } else {
      return null;
    }

    return path + url.search + url.hash;
  }

  function applyLanguageRedirect() {
    var preferredLang = getSavedLanguagePreference();
    if (!preferredLang) {
      return;
    }

    var currentLang = getCurrentPageLanguage();
    if (currentLang === preferredLang) {
      return;
    }

    var redirectUrl = buildRedirectUrl(preferredLang);
    if (redirectUrl && redirectUrl !== window.location.pathname + window.location.search + window.location.hash) {
      window.location.replace(redirectUrl);
    }
  }

  function getTargetLanguage(link) {
    var explicit = (link.getAttribute('data-lang-target') || '').trim().toLowerCase();
    if (explicit === 'it' || explicit === 'en') {
      return explicit;
    }

    var label = (link.textContent || '').trim().toLowerCase();
    if (label === 'it' || label === 'en') {
      return label;
    }

    return null;
  }

  function bindLanguageSwitcher() {
    var switcherLinks = document.querySelectorAll('.lang-switch a[href]');
    if (!switcherLinks.length) {
      return;
    }

    switcherLinks.forEach(function (link) {
      var targetLanguage = getTargetLanguage(link);
      if (!targetLanguage) {
        return;
      }

      link.addEventListener('click', function () {
        saveLanguagePreference(targetLanguage);
      });
    });
  }

  applyLanguageRedirect();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindLanguageSwitcher);
  } else {
    bindLanguageSwitcher();
  }
})();
