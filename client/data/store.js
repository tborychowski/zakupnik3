import { Store } from 'svelte/store.js';

const store = new Store({
	date: new Date().toISOString().substr(0, 7),
	category: null,
	group: null,
	categories: [],
	groups: [],
});



export default store;
