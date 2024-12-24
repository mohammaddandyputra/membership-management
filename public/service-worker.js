const CACHE_NAME = "pwa-next-14-v1";
const urlsToCache = [
  "/", // Halaman utama
  "/manifest.json", // File manifest
  "/icons/icon-192x192.png", // Ikon aplikasi
  "/icons/icon-512x512.png", // Ikon aplikasi
];

// Saat service worker di-install
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Service Worker: Caching assets");
      return cache.addAll(urlsToCache);
    })
  );
});

// Saat fetch dilakukan
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Jika ada di cache, gunakan cache
      if (response) {
        return response;
      }
      // Jika tidak, ambil dari jaringan dan cache hasilnya
      return fetch(event.request).then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    })
  );
});

// Saat service worker diaktifkan
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log("Service Worker: Clearing old cache");
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
