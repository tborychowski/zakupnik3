require('./index.css');



const components = [
	'header',
];


components.forEach(n => {
	const c = require(`./${n}/`);
	c.init();
});


function init () {
	console.log('ready!');
}


if (window.WebComponents.ready) init();
else window.addEventListener('WebComponentsReady', init);
