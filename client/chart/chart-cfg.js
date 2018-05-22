import {$} from '../core';

export default {
	type: 'line',
	data: {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		datasets: []
	},
	options: {
		legend: { display: false },
		scales: {
			yAxes: [{ display: false }],
			xAxes: [{ gridLines: {
				color: ['#ddd', '#ddd', '#ddd', '#ddd', '#ddd', '#ddd', '#ddd', '#ddd', '#ddd', '#ddd', '#ddd', '#ddd']
			}}]
		},
		tooltips: {
			intersect: false,
			callbacks: { label: tt => '€' + $.formatNumber(tt.yLabel) }
		},
		layout: { padding: { top: 10, left: 15, right: 15 }}
	}
};
