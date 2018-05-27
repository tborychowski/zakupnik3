import App from './app';

new App({ target: document.querySelector('#app') });




function registerSW () {
	navigator.serviceWorker.register('worker.js')
		// .then(registration => console.log('SW scope: ', registration.scope))
		.catch(err => console.log('Worker failed: ', err));
}

if ('serviceWorker' in navigator) window.addEventListener('load', registerSW);

