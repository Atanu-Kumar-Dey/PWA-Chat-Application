const CACHE_NAME = "my-site-cache-v1";
const assets = [
    "/",
    "/index.html",
    "/src/App.jsx",
    "/favicon.ico",
    "/src/offline.html",
];
self.addEventListener("install", (evt) => {
    // console.log("service worker installed");
    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("caching shell assets");
            cache.addAll(assets);
        })
    );
});

// activate event
self.addEventListener("activate", (evt) => {
    //console.log('service worker activated');
    evt.waitUntil(
        caches.keys().then((keys) => {
            //console.log(keys);
            return Promise.all(
                keys
                .filter((key) => key !== staticCacheName && key !== dynamicCacheName)
                .map((key) => caches.delete(key))
            );
        })
    );
});

// fetch event
self.addEventListener("fetch", (evt) => {
    //console.log('fetch event', evt);
    evt.respondWith(
        caches
        .match(evt.request)
        .then((cacheRes) => {
            return (
                cacheRes ||
                fetch(evt.request).then(async(fetchRes) => {
                    const cache = await caches.open(dynamicCacheName);
                    cache.put(evt.request.url, fetchRes.clone());
                    return fetchRes;
                })
            );
        })
        .catch(() => caches.match("/src/offline.html"))
    );
});