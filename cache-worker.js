const cacheId = 'cache-worker-v1';
const selfUnknown = /** @type {unknown} */(self);
const serviceWorker = /** @type {ServiceWorkerGlobalScope} */(selfUnknown);

const isLongLived = /\.(jpg|jpeg|png)$/i;

/**
 * Gets a response from the cache, fetching a response upon a cache miss.
 * @param {Request} request the request to lookup in the cache
 * @return {Promise<Response>} the response, either from the cache or network
 */
const cacheGet = async request => {
    const cache = await caches.open(cacheId);
    const cacheResponse = await cache.match(request);
    if (cacheResponse) {
        return cacheResponse;
    } else {
        const response = await fetch(request);
        await cache.put(request, response.clone());
        return response;
    }
};

/**
 * Fetches a fresh response from the internet and caches the result.
 * @param {Request} request the request to fetch from the internet
 * @return {Promise<void>} a promise that resolves when the result is cached
 */
const cacheRefresh = async request => {
    if (!isLongLived.test(request.url)) {
        const cache = await caches.open(cacheId);
        const response = await fetch(request);
        await cache.put(request, response);
    }
};

serviceWorker.addEventListener('install', ev => {
    ev.waitUntil(caches.open(cacheId).then(cache => cache.addAll([
        './index.html',
        './main.js',
        './src/data.js',
        './src/dom.js',
        './src/styles.css'
    ])));
});

serviceWorker.addEventListener('fetch', ev => {
    ev.respondWith(cacheGet(ev.request));
    ev.waitUntil(cacheRefresh(ev.request));
});
