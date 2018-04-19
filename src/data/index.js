
function get (url) {
	return fetch(url).then(res => res.json());
}

function post (url, params) {
	const body = JSON.stringify(params);
	const opts = { method: 'POST', body, headers: { 'Content-type': 'application/json' }};
	return fetch(url, opts).then(res => res.json());
}



const Categories = {
	get: () => get('api/categorytree'),
};

const Expenses = {
	get (date = '', id = '') {
		if (id) id = `/${id}`;
		if (date) date = `?date=${date}`;
		return get(`api/entries${id}${date}`);
	},
	save (data) {
		const id = data.length === 1 && data[0].id;
		if (data.length === 1) data = data[0];
		return post(`api/entries${id ? '/' + id : ''}`, data);
	}
};



export {
	Categories,
	Expenses,
};
