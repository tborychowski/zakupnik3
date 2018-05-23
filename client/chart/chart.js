import {$} from '../core';
import CHART from 'chart.js/dist/Chart.js';

const monthColors = (col = new Date().getMonth()) => {
	const cols = Array(12).fill('#ddd');
	if (typeof col !== 'undefined') cols[col] = 'orange';
	return cols;
};

const cfg = {
	type: 'line',
	data: {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		datasets: [{
			label: 'Expenses',
			borderWidth: 1,
			borderColor: '#888',
			pointBackgroundColor: '#888',
			data: [0,0,0,0,0,0,0,0,0,0,0,0]
		}]
	},
	options: {
		legend: { display: false },
		scales: {
			yAxes: [{ display: false }],
			xAxes: [{ gridLines: { color: monthColors() }}]
		},
		tooltips: {
			intersect: false,
			callbacks: { label: tt => '€' + $.formatNumber(tt.yLabel) }
		},
		layout: { padding: { top: 10, left: 15, right: 15 }}
	}
};



class Chart {

	constructor (el) {
		this.chart = new CHART(el, cfg);
		return this;
	}

	set (data, month) {
		this.chart.data.datasets[0].data = data;
		this.chart.options.scales.xAxes[0].gridLines.color = monthColors(month);
		this.chart.update();
	}

}


export default Chart;

