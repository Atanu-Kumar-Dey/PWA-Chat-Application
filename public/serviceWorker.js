const CACHE_NAME = "my-site-cache-v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/favicon.ico",
    "/src/components/offline.jsx",
];
// service worker install event
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("Opened cache");
            return cache.addAll(urlsToCache);
        })
    );
});


// service worker fetch event   
this.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((response) => {
                if (response) {
                    return response;
                }
                let requestUrl = event.request.clone();
                return fetch(requestUrl);
            })
        );
    }
});