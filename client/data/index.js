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


const Categories = {
	get: () => get('categories'),
};

const Groups = {
	get: () => get('groups'),
};

const Expenses = {
	get: (date = '') => get(`entries?date=${date}`),
	save: data => {
		if (data.length === 1 && data[0].id) return put('entries', data[0]);
		return post('entries', data);
	},
	del: id => del(`entries/${id}`)
};


export {
	Categories,
	Groups,
	Expenses,
};
