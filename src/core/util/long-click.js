const DELAY = 1000;
const EVENT_NAME = 'longclick';

let timer = null;
let isReady = false;

const reset = () => clearTimeout(timer);

function fireEvent (e) {
	e.target.dispatchEvent(new CustomEvent(EVENT_NAME, { bubbles: true, cancelable: true }));
	reset();
}

function init () {
	if (isReady) return;
	// patch CustomEvent to allow constructor creation (IE/Chrome)
	// - resolved once initCustomEvent no longer exists
	if ('initCustomEvent' in document.createEvent('CustomEvent')) {
		window.CustomEvent = function (event, params) {
			params = params || { bubbles: false, cancelable: false, detail: undefined };
			const evt = document.createEvent('CustomEvent');
			evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
			return evt;
		};
		window.CustomEvent.prototype = window.Event.prototype;
	}

	document.addEventListener('mouseup', reset);
	document.addEventListener('mouseout', reset);
	document.addEventListener('mousemove', reset);
	document.addEventListener('mousedown', e => {
		timer = setTimeout(fireEvent.bind(e, e), DELAY);
	});
	isReady = true;
}


export default {
	init
};