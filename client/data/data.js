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
	const newEntries = data.filter(item => !item.id);
	const withIds = data.filter(item => item.id);

	const promises = withIds.length ? withIds.map(item  => put(url, item)) : [];
	promises.push(post(url, newEntries));

	return Promise.all(promises);
};

const Categories = {
	base: 'categories',
	get (date) {
		return get(`${this.base}?date=${trimDate(date)}`);
	},
	save (data) {
		return save(this.base, data);
	},
	del (id) {
		return del(`${this.base}/${id}`);
	}
};


const Expenses = {
	base: 'entries',
	get (date) {
		return get(`${this.base}?date=${trimDate(date)}`);
	},
	save (data) {
		return save(this.base, data);
	},
	del (id) {
		return del(`${this.base}/${id}`);
	}
};

const Stats = {
	base: 'stats',
	get (date) {
		const year = date.year || new Date().getFullYear();
		let url = `${this.base}/${year}`;
		if (date.group) url += `?group=${date.group}`;
		else if (date.category) url += `?category=${date.category}`;
		return get(url);
	},
};

export default {
	Categories,
	Expenses,
	Stats,
};
