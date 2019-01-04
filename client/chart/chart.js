import {formatNumber} from '../util';

const colorAccent = '#d08770';
const colorAccentSemi = '#ffa50033';
const colorBgDark3 = '#4c566a';
const colorTextLight0 = '#d8dee9';

const colorIncome = '#88c0d0';
const colorIncomeSemi = '#88c0d033';

const monthColors = (col = new Date().getMonth()) => {
	const cols = Array(12).fill(colorBgDark3);
	if (typeof col !== 'undefined') cols[col] = colorAccent;
	return cols;
};

const cfg = {
	type: 'line',
	data: {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		datasets: [
			{
				label: 'Expenses',
				borderWidth: 1,
				borderColor: colorAccent,
				pointBackgroundColor: colorAccent,
				pointRadius: 5,
				pointHoverRadius: 5,
				backgroundColor: colorAccentSemi,
				data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			},
			{
				label: 'Income',
				borderWidth: 1,
				borderColor: colorIncome,
				pointBackgroundColor: colorIncome,
				pointRadius: 5,
				pointHoverRadius: 5,
				backgroundColor: colorIncomeSemi,
				data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			}
		]
	},
	options: {
		legend: { display: false },
		scales: {
			yAxes: [{ display: false, ticks: { beginAtZero: true } }],
			xAxes: [{ gridLines: { color: monthColors() }, ticks: { fontColor: colorTextLight0 } }]
		},
		tooltips: {
			intersect: false,
			mode: 'x',
			callbacks: { label: (tt, data) => {
				return data.datasets[tt.datasetIndex].label + ': €' + formatNumber(tt.yLabel);
			}}
		},
		layout: { padding: { top: 10, left: 15, right: 15 }}
	}
};



class Chart {
	constructor (el) {
		this.chart = new window.Chart(el, cfg);
		return this;
	}

	set (month, expenses, income) {
		this.chart.data.datasets[0].data = expenses;
		if (income) this.chart.data.datasets[1].data = income;
		this.chart.options.scales.xAxes[0].gridLines.color = monthColors(month);
		this.chart.update();
	}
}


export default Chart;

