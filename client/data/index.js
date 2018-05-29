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

const trimDate = date => ('' + date).substr(0, 7);
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
	get: date => get(`${this.base}?date=${trimDate(date)}`),
	save: data => save(this.base, data),
	del: id => del(`${this.base}/${id}`),
};

const Groups = {
	base: 'groups',
	get: () => get(this.base),
	save: data => save(this.base, data),
	del: id => del(`${this.base}/${id}`),
};

const Expenses = {
	base: 'entries',
	get: date => get(`${this.base}?date=${trimDate(date)}`),
	save: data => save(this.base, data),
	del: id => del(`${this.base}/${id}`),
};

const Stats = {
	base: 'stats',
	get: date => {
		const year = date.year || new Date().getFullYear();
		let url = `${this.base}/${year}`;
		if (date.group) url += `?group=${date.group}`;
		else if (date.category) url += `?category=${date.category}`;
		return get(url);
	},
};

export default {
	Categories,
	Groups,
	Expenses,
	Stats,
};
