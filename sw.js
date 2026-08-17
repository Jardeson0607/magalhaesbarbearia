const CACHE_NAME = 'barbearia-cache-v1';
const ASSETS = ['/', '/index.html', 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
