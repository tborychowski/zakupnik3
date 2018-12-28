import { Store } from 'svelte/store.js';

const store = new Store({
	dateStr: new Date().toISOString().substr(0, 10),
	categories: [],
	groups: [],
	desc: '',

	// selected stuff
	category: null,
	group: null,
	item: null,
	rows: [],
});


store.compute('date', ['dateStr'], dateStr  => {
	let [y, m, d] = dateStr.split('-');
	m -= 1;
	return {y, m, d};
});

store.compute('rowsWithCategories', ['rows', 'categories'], (rows, categories)  => {
	return rows.map(r => {
		r.group.category = categories.find(c => c.id === r.group.category_id);
		return r;
	});
});


export default store;
