import { Store } from 'svelte/store.js';

const store = new Store({
	dateStr: new Date().toISOString().substr(0, 10),
	category: null,
	group: null,
	categories: [],
	groups: [],
	input: { group: null, text: null, amount: 0 }
});


store.compute('date', ['dateStr'], dateStr  => {
	let [y, m, d] = dateStr.split('-');
	m -= 1;
	return {y, m, d};
});


export default store;
