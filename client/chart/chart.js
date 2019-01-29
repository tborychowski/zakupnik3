import {formatNumber} from '../util';

const colorBgDark3 = '#4c566a';
const colorTextLight0 = '#d8dee9';

const colorExpense = '#d08770';
const colorExpenseSemi = '#ffa50033';

const colorIncome = '#88c0d0';
const colorIncomeSemi = '#88c0d033';


const monthColors = (col = new Date().getMonth()) => {
	const cols = Array(12).fill(colorBgDark3);
	if (typeof col !== 'undefined') cols[col] = colorExpense;
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
				borderColor: colorExpense,
				pointBackgroundColor: colorExpense,
				pointRadius: 5,
				pointHoverRadius: 5,
				backgroundColor: colorExpenseSemi,
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
			mode: 'index',
			bodySpacing: 5,
			titleSpacing:  20,
			footerSpacing: 20,
			footerFontColor: '#aaa',
			bodyFontSize: 13,
			footerFontSize: 13,
			callbacks: {
				label: (tt) => ' €' + formatNumber(tt.yLabel),
				footer: (tt) => {
					if (!tt[1]) return undefined;
					const exp = tt[0] && tt[0].yLabel || 0;
					const inc = tt[1] && tt[1].yLabel || 0;
					return ' =  €' + formatNumber(inc - exp);
				}
			}
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

