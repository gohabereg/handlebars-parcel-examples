import template from './index.hbs';
import './components/button';

window.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');

  app.innerHTML = template({ variable: 'Hello world' });
});
