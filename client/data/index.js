function req (url, method = 'GET', params) {
	const opts = {
		method: method,
		headers: { 'Content-type': 'application/json' },
		credentials: 'include',
	};
	if (params) {
		opts.body = JSON.stringify(params);
		if (params.id) url += `/${params.id}`;
	}
	return fetch(`api/${url}`, opts).then(res => res.json());
}

const get = url => req(url);
const post = (url, params) => req(url, 'POST', params);
const put = (url, params) => req(url, 'PUT', params);
const del = url => req(url, 'DELETE');
const save = (url, data) => {
	if (data.length === 1 && data[0].id) data = data[0];
	if (data.id) return put(url, data);
	return post(url, data);
};

const Categories = {
	base: 'categories',
	get (date) { return get(`${this.base}?date=${date || ''}`); },
	save (data) { return save(this.base, data); },
	del (id) { return del(`${this.base}/${id}`); }
};

const Groups = {
	base: 'groups',
	get () { return get(this.base); },
	save (data) { return save(this.base, data); },
	del (id) { return del(`${this.base}/${id}`); }
};

const Expenses = {
	base: 'entries',
	get (date) { return get(`${this.base}?date=${date || ''}`); },
	save (data) { return save(this.base, data); },
	del (id) { return del(`${this.base}/${id}`); }
};


export default {
	Categories,
	Groups,
	Expenses,
};
