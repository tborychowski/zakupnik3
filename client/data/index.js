function get (url) {
	return fetch(url, { credentials: 'include' }).then(res => res.json());
}

function post (url, params) {
	const body = JSON.stringify(params);
	const opts = {
		method: 'POST',
		headers: { 'Content-type': 'application/json' },
		credentials: 'include',
		body,
	};
	return fetch(url, opts).then(res => res.json());
}



const Categories = {
	get: () => get('api/categories'),
};

const Expenses = {
	get (date = '') {
		return get(`api/entries?date=${date}`);
	},
	save (data) {
		if (data.length === 1 && data[0].id) return put('api/entries', data);
		return post('api/entries', data);
	}
};



export {
	Categories,
	Expenses,
};
