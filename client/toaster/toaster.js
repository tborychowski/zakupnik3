function animateEl (el, hide = false) {
	const animFrom = {opacity: 0, marginBottom: '-56px', transform: 'scale(0.6)'};
	const animTo =   {opacity: 1, marginBottom: 0, transform: 'scale(1)'};
	const props = hide ? [animTo, animFrom] : [animFrom, animTo];
	return new Promise(resolve => {
		const anim = el.animate(props, {duration: 300, easing: 'ease-out', fill: 'forwards'});
		anim.oncancel = resolve;
		anim.onfinish = resolve;
	});
}

function makeDiv (parentEl, cls, html = '') {
	const div = document.createElement('DIV');
	div.className = cls;
	div.innerHTML = html;
	parentEl.appendChild(div);
	return div;
}

class Toast {
	constructor (msg = '', type = 'info') {
		this.toast = makeDiv(this.toaster, `toast toast-${type}`, msg);
		this.toast.addEventListener('click', () => this.hide(0));
		this.show();
	}
	get toaster () {
		return document.querySelector('.toaster') || makeDiv(document.body, 'toaster');
	}
	show () {
		animateEl(this.toast).then(() => this.hide());
	}
	_hide () {
		animateEl(this.toast, true).then(() => this.toast.remove());
	}
	hide (delay = 5000) {
		if (this.timer) clearTimeout(this.timer);
		this.timer = setTimeout(this._hide.bind(this), delay);
	}
}

export default Toast;
