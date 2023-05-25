const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];

const self = this; // self is the service worker itself

// Install SW
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((caches) => {
            console.log("opened Cache");
            return caches.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then(() => {
            return fetch(event.request).catch(() => {
                caches.match("offline.html");
            });
        })
    );
});

self.addEventListener("activate", (event) => {
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME);
    event.waitUntil(
        caches.keys().then((cacheName) => {
            Promise.all(
                cacheName.map((cacheName) => {
                    if (!cacheWhiteList.includes[cacheName]) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});