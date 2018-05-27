import App from './app';

new App({ target: document.querySelector('#app') });




function registerSW () {
	navigator.serviceWorker.register('sw.js')
		.then(registration => console.log('SW scope: ', registration.scope))
		.catch(err => console.log('SW failed: ', err));
}

if ('serviceWorker' in navigator) window.addEventListener('load', registerSW());

