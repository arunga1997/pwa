const staticCachename = 'site-static';
const assets = [
    '/',
    '/index.html',
    '/js/app.js'
];
self.addEventListener('install', evt => {
//console.log('service worker has been installed');
evt.waitUntil(caches.open(staticCachename).then(cache => {
    console.log('caching shell assets');
    cache.addAll(assets);
}))

});


//activate service worker
self.addEventListener('activate', evt => {

//console.log('service worker has been activated');  
});

//fetch event
self.addEventListener('fetch', evt => {

    //console.log('fetch event', evt);  
    });