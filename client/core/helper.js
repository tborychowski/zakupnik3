const $ = require('./util/sizzle');



function fadeInBody () {
	setTimeout(() => {
		$(document.body).animate({opacity: 0}, {opacity: 1});
	}, 300);
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




module.exports = {
	init
};
