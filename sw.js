const CACHE_NAME = 'v1';
const urlsToCache = [
  '/Calculator-gk',
  '/Calculator-gk/index.html',
  '/Calculator-gk/style.css',
  '/Calculator-gk/script.js',
  '/Calculator-gk/manifest.json',
  '/Calculator-gk/icons/icon-192.png',
  '/Calculator-gk/icons/icon-512.png'
];

self.addEventListener('install', event => {
  console.log('Service Worker Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  console.log('Service Worker Activated');
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});