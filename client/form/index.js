require('./index.css');
require('../components/exp-form');


let el, form;


function formInit () {
	form.categories = [
		{ id: 'child_1', name: 'Child 1' },
		{ id: 'child_2', name: 'Child 2', items: [
			{ id: 'grandchild_21', name: 'Grandchild 1', parentId: 'child_2' },
		]},
		{ id: 'child_3', name: 'Child 3', items: [
			{ id: 'grandchild_31', name: 'Grandchild 1', parentId: 'child_3' },
			{ id: 'grandchild_32', name: 'Grandchild 2', parentId: 'child_3' },
			{ id: 'grandchild_33', name: 'Grandchild 3', parentId: 'child_3' },
		]},
	];
	form.addEventListener('change', res => {
		console.log(res.type, res.detail.data);
	});

	form.addEventListener('submit', res => {
		console.log(res.type, res.detail.data);
	});

	form.init();


	form.edit({
		id: 231,
		category_id: 'grandchild_32',
		description: 'Dupa jasna acz blada',
		amount: 321.23,
		date: '2018-03-20'
	});

}



function init () {
	el = document.querySelector('#main');
	form = el.querySelector('exp-form');

	formInit();
}


export {
	init
};
