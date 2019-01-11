import {on, off, fire} from './pubsub';

export default {
	on,
	off,
	fire,

	item: {
		updated: 'item-updated',
	},

	toast: {
		show: 'info-toast',
		error: 'error-toast',
		warning: 'warning-toast',
	}

};
