const CACHE_NAME = 'zakupnik-cache-v2.0';
const urlsToCache = [ 'index.html', 'app.css', 'app.js', 'fonts/' ];

function onInstall (ev) {
	const cachesOpened = caches
		.open(CACHE_NAME)
		.then(cache => cache.addAll(urlsToCache));
	ev.waitUntil(cachesOpened);
}

function request (ev) {
	const req = ev.request.clone();
	return fetch(req)
		.then(res => {
			if (!res || res.status !== 200 || res.type !== 'basic') return res;
			const resToCache = res.clone();
			caches
				.open(CACHE_NAME)
				.then(cache => cache.put(ev.request, resToCache));
			return res;
		});
}

function onFetch (ev) {
	const cached = caches
		.match(ev.request)
		.then(found => found ? found : request(ev));
	ev.respondWith(cached);
}

function onActivate (ev) {
	const delCaches = caches
		.keys()
		.then(keys => {
			const dels = keys.map(key => caches.delete(key));
			return Promise.all(dels);
		});
	ev.waitUntil(delCaches);
}


self.addEventListener('install', onInstall);
self.addEventListener('fetch', onFetch);
self.addEventListener('activate', onActivate);
