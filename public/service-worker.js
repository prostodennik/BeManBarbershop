const cacheName = 'static-cache-name';

const staticCache = [
    '/index.html',
    '/favicon.ico',
    '/assets/icon-72x72.png',
    '/assets/icon-96x96.png',
    '/assets/icon-128x128.png',
    '/assets/icon-144x144.png',
    '/assets/icon-152x152.png',
    '/assets/icon-192x192.png',
    '/assets/icon-384x384.png',
    '/assets/icon-512x512.png',
    '/assets/apple-touch-icon.png',
];
//eslint-disable-next-line
self.addEventListener('install', async (event) => {
    if (staticCache.length) {
        const cache = await caches.open(cacheName);
        await cache.addAll(staticCache);
    }
});
//eslint-disable-next-line
self.addEventListener('activate', async (event) => {
    const cacheName = await caches.keys();
    await Promise.all(cacheName.filter((name) => name !== cacheName).map((name) => caches.delete(name)));
});
//eslint-disable-next-line
self.addEventListener('fetch', (event) => {
    const { request } = event;
    event.respondWith(networkFirst(request));
});

function networkFirst(request) {
    return new Promise(async function (resolve, reject) {
        const cache = await caches.open(cacheName);
        try {
            const response = await fetch(request);
            await cache.put(request, response.clone());
            resolve(response);
        } catch (error) {
            const cached = await cache.match(request);
            if (!!cached) {
                resolve(cached);
            } else {
                reject('NETWORK_ERROR');
            }
        }
    });
}
