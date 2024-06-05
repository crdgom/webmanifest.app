// public/offlineServiceWorker.js

self.addEventListener('install', function(event) {
    let offlineContent = `
        <div>
            <h1>You are offline</h1>
            <p>This is the offline fallback page.</p>
        </div>
    `;
    event.waitUntil(
        caches.open('offline').then(function(cache) {
            console.log('[oninstall] Cached offline content');
            return cache.put(new Request('/offline'), new Response(offlineContent, { headers: { 'Content-Type': 'text/html' } }));
        })
    );
});

self.addEventListener('fetch', function(event) {
    let request = event.request;
    if (request.method === 'GET' && request.headers.get('accept').includes('text/html')) {
        event.respondWith(
            fetch(request).catch(function(error) {
                console.error('[onfetch] Failed. Serving cached offline fallback', error);
                return caches.open('offline').then(function(cache) {
                    return cache.match('/offline');
                });
            })
        );
    }
});
