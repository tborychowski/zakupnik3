require('./index.css');



const components = [
	'components/calendar',
	'components/year-picker',
	'components/month-picker',
	'categories',
];


components.forEach(n => {
	const c = require(`./${n}/`).default;
	if (c.is) customElements.define(c.is, c);
	else c.init();
});


function init () {
	console.log('ready!');
}


if (window.WebComponents.ready) init();
else window.addEventListener('WebComponentsReady', init);
