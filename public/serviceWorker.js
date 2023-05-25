const CACHE_NAME = "my-site-cache-v1";
const assets = ["/offline.html"];


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
        caches.match(evt.request).then(response => {
            // Return the cached response if available
            if (response) {
                return response;
            }
            // Fallback to the custom offline page
            if (!navigator.onLine) {
                return caches.match(assets);
            }
            // Fetch the requested resource from the network
            return fetch(evt.request);
        })
    );
});