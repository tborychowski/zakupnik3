const CACHE_NAME = 'zakupnik-cache-v2.4';
const urlsToCache = ['/'];
const isAPI = url => (url.indexOf('/api/') > -1);

function onInstall (ev) {
	const cachesOpened = caches
		.open(CACHE_NAME)
		.then(cache => cache.addAll(urlsToCache));
	ev.waitUntil(cachesOpened);
}

async function request (ev) {
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
		.then(async found => {
			if (found && !isAPI(ev.request.url)) return found;
			let res;
			try { res = await request(ev); }
			catch (e) { res = found; }
			return res;
		});
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
