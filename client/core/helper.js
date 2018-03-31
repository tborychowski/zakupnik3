

function init (components) {
	components = [...new Set(components)];	// unique
	components.forEach(n => {
		const c = require(`../${n}/`);
		if (c && c.init) c.init();
	});

	window.focus();
}



export default {
	init
};
