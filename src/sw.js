
/* eslint-disable no-undef */
const CACHE = 'pwa-react-research'
// const domainName = window.location.host
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
    if (evt.request.headers.get('Content-Type') === 'application/json; charset=utf-8') {
        evt.respondWith(fromServer(evt.request))
    } else {
        evt.respondWith(fromCache(evt.request))
        update(evt.request)
    }
})

const fromCache = (request) => new Promise((resolve, reject) =>
    caches.open(CACHE).then(cache => cache.match(request)).then(res => res || fromServer(request))
)

const update = (request) => new Promise((resolve, reject) =>
    caches.open(CACHE).then(cache => fetch(request).then(response => cache.put(request, response)))
)

const fromServer = (request) => fetch(request)
