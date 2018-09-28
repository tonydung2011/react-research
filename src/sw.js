
/* eslint-disable no-undef */
const CACHE = 'pwa-react-research'
const route = [
    '/',
    '/index.html',
]

self.addEventListener('install', event => event.waitUntil(
    caches.open(CACHE)
        .then(cache => cache.addAll(route))
        .then(() => self.skipWaiting())
))

self.addEventListener('activate', function(event) {
    console.log('[PWA Builder] Claiming clients for current page')
    return self.clients.claim()
})

self.addEventListener('fetch', (evt) => {
    console.log(`[PWA Builder] The service worker is serving the asset ${evt.request.url}`)
    if (
        evt.request.url.endsWith('.js') ||
        evt.request.url.endsWith('.html') ||
        evt.request.url.endsWith('.css') ||
        evt.request.url.endsWith('.css.map') ||
        evt.request.url.endsWith('.js.map') ||
        evt.request.url.endsWith('.wolf') ||
        evt.request.url.endsWith('.wolf2') ||
        evt.request.url.endsWith('.jpg') ||
        evt.request.url.endsWith('.png') ||
        evt.request.url.endsWith('.jpeg')
    ) {
        evt.respondWith(fromCache(evt.request))
        update(evt.request)
    } else {
        evt.respondWith(fromServer(evt.request))
    }
})

const fromCache = (request) => new Promise((resolve, reject) =>
    caches.open(CACHE).then(cache => cache.match(request)).then(res => res || fromServer(request))
)

const update = (request) => new Promise((resolve, reject) =>
    caches.open(CACHE).then(cache => fetch(request).then(response => cache.put(request, response)))
)

const fromServer = (request) => fetch(request)
