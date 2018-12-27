import { Store } from 'svelte/store.js';

const store = new Store({
	dateStr: new Date().toISOString().substr(0, 10),
	categories: [],
	groups: [],
	desc: '',
	amount: 0,

	// selected stuff
	category: null,
	group: null,
	item: null,
});


store.compute('date', ['dateStr'], dateStr  => {
	let [y, m, d] = dateStr.split('-');
	m -= 1;
	return {y, m, d};
});


export default store;
