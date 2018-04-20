import util from './util.js';

const baseUrl = '';

function ajax (options) {
	if (typeof options === 'string') options = { url: options };

	let resp;
	let data = options.data || '';
	const req = new XMLHttpRequest();

	options.url = baseUrl + options.url;
	options.method = options.method || 'GET';
	options.type = options.type || 'json';

	if (data) {
		if (options.method.toLowerCase() === 'get') options.url += util.serialize(data);
		else if (options.type === 'json') data = JSON.stringify(data);
	}
	return new Promise((resolve, reject) => {
		req.open(options.method, options.url, true);
		req.onload = () => {
			if (req.status >= 200 && req.status < 400) {
				try { resp = JSON.parse(req.responseText); }
				catch (e) { resp = req.responseText; }
				resolve(resp);
			}
			else reject(req.statusText);
		};
		req.onerror = () => reject(req.statusText);
		req.setRequestHeader('Content-Type', `application/${options.type}; charset=UTF-8`);
		req.send(data);
	});
}


const get = (url, data) => ajax({ url, data: data || {} });
const post = (url, data) => ajax({ url, data: data || {}, method: 'POST' });
const put = (url, data) => ajax({ url, data: data || {}, method: 'PUT' });
const del = (url, data) => ajax({ url, data: data || {}, method: 'DELETE' });


export default {
	ajax,
	get,
	post,
	put,
	del,
};
