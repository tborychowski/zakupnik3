import {formatNumber} from '../util';

const colorAccent = '#d08770';
const colorAccentDark = '#ffa50033';
const colorBgDark3 = '#4c566a';
const colorTextLight0 = '#d8dee9';


const monthColors = (col = new Date().getMonth()) => {
	const cols = Array(12).fill(colorBgDark3);
	if (typeof col !== 'undefined') cols[col] = colorAccent;
	return cols;
};

const cfg = {
	type: 'line',
	data: {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		datasets: [{
			label: 'Expenses',
			borderWidth: 1,
			borderColor: colorTextLight0,
			pointBackgroundColor: colorTextLight0,
			pointRadius: 5,
			pointHoverRadius: 5,
			backgroundColor: colorAccentDark,
			data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		}]
	},
	options: {
		legend: { display: false },
		scales: {
			yAxes: [{ display: false, ticks: { beginAtZero: true } }],
			xAxes: [{ gridLines: { color: monthColors() }, ticks: { fontColor: colorTextLight0 } }]
		},
		tooltips: {
			intersect: false,
			callbacks: { label: tt => '€' + formatNumber(tt.yLabel) }
		},
		layout: { padding: { top: 10, left: 15, right: 15 }}
	}
};



class Chart {
	constructor (el) {
		this.chart = new window.Chart(el, cfg);
		return this;
	}

	set (data, month) {
		this.chart.data.datasets[0].data = data;
		this.chart.options.scales.xAxes[0].gridLines.color = monthColors(month);
		this.chart.update();
	}
}


export default Chart;

