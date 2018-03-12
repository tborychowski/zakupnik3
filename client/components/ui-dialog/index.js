import style from './index.css';
import template from './index.html';


const FOCUSABLE_SELECTORS = `
	a[href]:not([tabindex="-1"]),
	input:not([disabled]):not([tabindex="-1"]),
	select:not([disabled]):not([tabindex="-1"]),
	textarea:not([disabled]):not([tabindex="-1"]),
	button:not([disabled]):not([tabindex="-1"]),
	iframe:not([tabindex="-1"]),
	[tabindex]:not([tabindex="-1"]),
	[contentEditable]:not([tabindex="-1"])
`;


const ANIM_CFG = {duration: 300, easing: 'ease-out', fill: 'forwards'};





export default class uiDialog extends HTMLElement {

	constructor () {
		super();

		this.template = document.createElement('template');
		this.template.innerHTML = `<style>${style}</style>${template}`;
		this.templateContent = this.template.content;

		this.observer = new MutationObserver(this.onContentChange.bind(this));
	}

	static get is () { return 'ui-dialog'; }

	static get observedAttributes () {
		return ['open'];
	}

	connectedCallback () {
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(this.templateContent.cloneNode(true));
		this.el = this.shadowRoot.querySelector('.ui-dialog');
		this.contentEl = this.el.querySelector('.ui-dialog-content');

		this.observer.observe(this, { attributes: false, childList: true });
		this.el.addEventListener('click', this.onClick.bind(this));
		this.el.addEventListener('keydown', this.onKeydown.bind(this), true);
		this.el.addEventListener('blur', this.onBlur.bind(this), true);
		this.onContentChange();
	}

	// el moved to a new document
	// adoptedCallback() {}

	// el removed from DOM
	disconnectedCallback () {
		this.observer.disconnect();
		console.log('disconnectedCallback');
	}


	attributeChangedCallback(name, oldVal, newVal) {
		if (name === 'open') {
			if (newVal !== null) this.doOpen();
			else this.doClose();

		}
	}


	onClick (e) {
		this.tabbingForward = null;
		const tar = e.target;
		const backdropClick = tar.closest('.ui-dialog-backdrop');
		const dialogCloseBtn = tar.getAttribute('close-dialog') !== null;

		if (backdropClick || dialogCloseBtn) this.open = false;
	}


	getFocusableEls () {
		if (!this.focusableElements) {
			let elems = this.querySelectorAll(FOCUSABLE_SELECTORS);
			let first = this.el, last = this.el;
			if (elems.length) {
				first = elems[0];
				last = elems[elems.length - 1];
			}
			else {
				first = this.el.querySelector('.ui-dialog-backdrop');
				last = this.contentEl;
			}
			this.focusableElements = {first, last};
		}
		return this.focusableElements;
	}


	onBlur (e) {
		if (this.tabbingForward === null) return;

		const target = e.target;
		const {first, last} = this.getFocusableEls();
		let focusEl = null;

		if (this.tabbingForward && target === last) focusEl = first;
		else if (!this.tabbingForward && target === first) focusEl = last;

		if (focusEl) {
			this.tabbingForward = null;
			focusEl.focus();
			e.preventDefault();
			e.stopImmediatePropagation();
		}
	}


	onKeydown (e) {
		if (e.key === 'Tab') this.tabbingForward = !e.shiftKey;
		else {
			this.tabbingForward = null;
			if (e.key === 'Escape') this.open = false;
		}
	}


	onContentChange () {
		this.focusableElements = null;
	}


	set open (val) {
		const isOpen = Boolean(val);
		if (isOpen) {
			if (!this.trigger && document.activeElement) this.trigger = document.activeElement;
			this.setAttribute('open', '');
		}
		else {
			this.removeAttribute('open');
			this.trigger = null;
		}
	}

	get open () {
		return this.hasAttribute('open');
	}



	doOpen (trigger) {
		if (this.visible) return;
		if (trigger) this.trigger = trigger;
		this.el.classList.add('visible');
		this.visible = true;
		this.getFocusableEls().first.focus();
		this.contentEl.animate([{transform: 'scale(.9)'}, {transform: 'scale(1)'}], ANIM_CFG);
		this.el
			.animate([{ opacity: 0 }, {opacity: 1}], ANIM_CFG)
			.onfinish = this.onOpened.bind(this);
	}

	doClose () {
		if (!this.visible) return;
		if (this.trigger) this.trigger.focus();
		this.contentEl.animate([{transform: 'scale(1)'}, {transform: 'scale(.9)'}], ANIM_CFG);
		this.el
			.animate([{ opacity: 1 }, {opacity: 0}], ANIM_CFG)
			.onfinish = this.onClosed.bind(this);
	}


	onOpened () {
		this.dispatchEvent(new CustomEvent('open', {}));
	}

	onClosed () {
		this.el.classList.remove('visible');
		this.visible = false;
		if (this.trigger) this.trigger.focus();
		this.dispatchEvent(new CustomEvent('close', {}));
	}


}
