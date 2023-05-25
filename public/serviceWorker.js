const CACHE_VERSION = "v1"; // Update this version string whenever you make changes to the service worker file
const CACHE_NAME = `my-cache-${CACHE_VERSION}`; // Use a unique cache name for each version

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
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// fetch event
self.addEventListener("fetch", (evt) => {
    //console.log('fetch event', evt);
    evt.respondWith(
        caches.match(evt.request).then((response) => {
            // Return the cached response if available
            if (response) {
                return response;
            }
            // Fallback to the custom offline page
            if (!navigator.onLine) {
                return caches.match(assets);
            }
            // Otherwise, fetch the requested resource from the network
            return fetch(event.request).then((response) => {
                // Cache the newly fetched response
                const clonedResponse = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, clonedResponse);
                });

                return response;
            });
        })
    );
});