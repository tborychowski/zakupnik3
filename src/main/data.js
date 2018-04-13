function serialize (obj) {
	const keys = Object.keys(obj);
	if (!keys || !keys.length) return '';
	return '?' + keys.reduce((a, k) => {
		a.push(k + '=' + encodeURIComponent(obj[k]));
		return a;
	}, []).join('&');
}

function get (url, params) {
	params = params ? serialize(params) : '';
	return fetch(url + params).then(res => res.json());
}


const Categories = {
	get: () => get('api/categorytree'),
};

const Expenses = {
	get (date = new Date().toISOString().substr(0, 7), id) {
		return get(`api/entries${id ? '/' + id : ''}`, { date });
	},

};



export {
	Categories,
	Expenses,
};
