require('./index.css');
import ExpForm from '../form';


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
	form.on('change', res => {
		console.log(res.type, res.detail.data);
	});

	form.on('submit', res => {
		console.log(res.type, res.detail.data);
	});


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
	form = new ExpForm('#exp-form');

	formInit();
}


export {
	init
};
