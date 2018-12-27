import { Store } from 'svelte/store.js';

const store = new Store({
	date: { dateStr: new Date().toISOString().substr(0, 7) },
	selectedCategory: null,
	categories: []
});



export default store;
