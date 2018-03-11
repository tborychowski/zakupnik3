
const components = [
	'ui-dialog',
	'ui-msgbox',
	'ui-toast',
];



components.forEach(n => {
	const c = require(`./${n}/`).default;
	customElements.define(c.is, c);
});

window.addEventListener('WebComponentsReady', demo);




function demo () {
	setTimeout(() => document.body.classList.remove('loading'), 300);
	console.log('ready!');
}

