const components = [
	'components/calendar',
	'calendar',
	'categories',
];



components.forEach(n => {
	const c = require(`./${n}/`).default;
	if (c.is) customElements.define(c.is, c);
	else c.init();
});


function init () {
	setTimeout(() => document.body.classList.remove('loading'), 300);
	console.log('ready!');
}


if (window.WebComponents.ready) init();
else window.addEventListener('WebComponentsReady', init);
