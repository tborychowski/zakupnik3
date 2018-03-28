import $ from './util/sizzle.js';



function fadeInBody () {
	$(document.body).animate({opacity: 0}, {opacity: 1});
	// setTimeout(() => {
	// }, 100);
}



function init (components) {
	components = [...new Set(components)];	// unique
	components.forEach(n => {
		const c = require(`../${n}/`);
		if (c && c.init) c.init();
	});


	if (window.WebComponents.ready) fadeInBody();
	else window.addEventListener('WebComponentsReady', fadeInBody);

	window.focus();
}




export default {
	init
};
