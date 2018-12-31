import { Store } from 'svelte/store.js';

const store = new Store({
	dateStr: new Date().toISOString().substr(0, 10),
	categories: [],
	desc: '',
	text: '',
	category: null,
	item: null,
	rows: [],
});


store.compute('categoryTree', ['categories'], categories => {
	return categories
		.filter(c => !c.parent_id)
		.map(c => {
			c.items = categories.filter(sub => sub.parent_id ===  c.id);
			return c;
		});
});

store.compute('categoryNameMap', ['categories'], categories => {
	const map = {};
	categories.forEach(c => { map[c.id] = c.name;});
	return map;
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
