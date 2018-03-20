require('./index.css');



const components = [
	'header',
];


components.forEach(n => {
	const c = require(`./${n}/`);
	c.init();
});


function init () {
	document.body.classList.remove('loading');
	console.log('ready!');
}


if (window.WebComponents.ready) init();
else window.addEventListener('WebComponentsReady', init);
