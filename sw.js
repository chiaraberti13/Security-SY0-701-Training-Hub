const CACHE_NAME = 'comptia-secplus-v1.3';
const OFFLINE_URL = 'index.html';

const INITIAL_ASSETS = [
  './',
  './index.html',
  './quizzes.html',
  './glossario.html',
  './checklist.html',
  './style/style.css',
  './script/comptia-study-core.js',
  './script/global-nav-footer.js',
  './script/global-search.js',
  './script/glossario_db.json',
  './script/glossario_db.js',
  './quiz_database.xml'
];

// On install, pre-cache all core interface and study materials
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[Service Worker] Pre-caching offline assets...');
      return cache.addAll(INITIAL_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Clean up old caches on activation
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Erasing old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Stale-while-revalidate dynamic caching strategy
self.addEventListener('fetch', event => {
  // Only intercept HTTP/S requests, ignore browser extensions or schemes like chrome-extension://
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Bypass service worker interception for the large glossary JSON database to prevent cache lockups/corruption
  if (event.request.url.indexOf('glossario_db.json') !== -1) {
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(event.request).then(cachedResponse => {
        const fetchPromise = fetch(event.request).then(networkResponse => {
          // If response is valid, update cache in background
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(err => {
          console.warn('[Service Worker] Fetch failed, returning cached or offline asset:', err);
        });

        // Return cache instantly if available, otherwise wait for network
        return cachedResponse || fetchPromise;
      });
    })
  );
});
