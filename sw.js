// Replaces the old app's service worker: clear its old caches and step aside.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(
  caches.keys()
    .then(keys => Promise.all(keys.filter(k => /^lempiraflow-/.test(k)).map(k => caches.delete(k))))
    .then(() => self.registration.unregister())
));
