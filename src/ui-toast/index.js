import style from './index.css';
import template from './index.html';


const ANIM_CFG = {duration: 300, easing: 'ease-out', fill: 'forwards'};
const TOAST_TIMEOUT = 5000;




export default class uiToast extends HTMLElement {

	constructor () {
		super();

		this.template = document.createElement('template');
		this.template.innerHTML = `<style>${style}</style>${template}`;
		this.templateContent = this.template.content;
	}

	static get is () { return 'ui-toast'; }

	static get observedAttributes () {}

	connectedCallback () {
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(this.templateContent.cloneNode(true));
		this.el = this.shadowRoot.querySelector('.ui-toast-wrapper');
		this.el.addEventListener('click', this.onClick.bind(this));
		this.el.addEventListener('keydown', this.onKeydown.bind(this), true);
	}


	show ({ msg = '', type = 'info', autoclose = true }) {
		if (document.activeElement) this.trigger = document.activeElement;
		const toast = document.createElement('div');
		toast.setAttribute('tabindex', 0);
		toast.className = `ui-toast ui-toast-${type}`;
		toast.innerHTML = msg;
		this.el.appendChild(toast);
		toast.focus();

		const TOASTH = toast.getBoundingClientRect().height;
		const props = [
			{opacity: 0, marginTop: `-${TOASTH}px`, transform: 'scale(0.8)'},
			{opacity: 1, marginTop: 0, transform: 'scale(1)'}
		];
		const anim = toast.animate(props, ANIM_CFG);
		if (autoclose) {
			anim.onfinish = () => setTimeout(() => this.hide(toast), TOAST_TIMEOUT);
		}
	}


	hide (toast) {
		const TOASTH = toast.getBoundingClientRect().height;
		toast.classList.add('ui-toast-hiding');
		const props = [
			{opacity: 1, marginTop: 0, transform: 'scale(1)'},
			{opacity: 0, marginTop: `-${TOASTH}px`, transform: 'scale(0.8)'}
		];
		const anim = toast.animate(props, ANIM_CFG);
		anim.onfinish = () => toast.remove();

		const toasts = this.el.querySelectorAll('.ui-toast:not(.ui-toast-hiding)');
		if (toasts.length) toasts[toasts.length - 1].focus();
		else if (this.trigger) this.trigger.focus();
	}


	onClick (e) {
		const toast = e.target.closest('.ui-toast');
		if (toast) this.hide(toast);
	}


	onKeydown (e) {
		if (e.key === 'Escape') {
			e.stopImmediatePropagation();
			e.preventDefault();
			this.onClick(e);
		}
	}




}
