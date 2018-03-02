// File for manual service worker

// Caching on install
self.addEventListener('install', (event) => {

    const urlsToCache = [
        '/index.html',
        '/favicon.png',
        '/styles.217dd10a797ea27766db.bundle.css',
        '/polyfills.f20484b2fa4642e0dca8.bundle.js',
        '/main.1c1ddc4b4bbb16a97c50.bundle.js',
        '/inline.f13db3c31ecd7fee6031.bundle.js',
        '/api/restaurants',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg',
        '/icons/map-marker-icon.png'
    ];

    event.waitUntil(
        caches.open('app-cache-v1').then( (cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Fetching from cache
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then( (response) => {
            if(response) return response;
            return fetch(event.request);
        }).catch( err => console.log(err))
    );
});

// Putting into cache
// cache.put(request, response);
// cache.addAll(['/api/restaurants']);

// Taking out of cache
// caches.match(request)