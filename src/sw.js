
/* eslint-disable no-undef */
const CACHE = 'pwa-react-research'
const url = [
    'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
]

route = [
    'http://localhost:3000/',
    'http://localhost:4000/',
    'https://react-research-bdd27.firebaseapp.com/',
]

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE)
            .then(cache => cache.addAll(url))
            .then(() => self.skipWaiting())
    )
})

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
        evt.request.url.endsWith('.woff') ||
        evt.request.url.endsWith('.woff2') ||
        evt.request.url.endsWith('.jpg') ||
        evt.request.url.endsWith('.png') ||
        evt.request.url.endsWith('.jpeg') ||
        route.indexOf(evt.request.url) !== -1
    ) {
        evt.respondWith(updateCache(evt.request))
    } else {
        evt.respondWith(fromServer(evt.request))
    }
})

const fromCache = (request) =>
    caches.open(CACHE).then(cache => cache.match(request))

const updateCache = (request) => fromCache(request)
    .then((response) => {
        if (response) {
            return response
        }
        return fetch(request)
    })
    .then((response) => {
        const cloneRes = response.clone()
        if (request.method === 'GET') {
            caches.open(CACHE).then(cache => cache.put(request, cloneRes))
        }
        return response
    })

const fromServer = (request) => fetch(request)
