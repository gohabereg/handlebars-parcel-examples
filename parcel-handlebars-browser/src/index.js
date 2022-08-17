import Handlebars from 'handlebars';
import './components';
import template from './index.tmpl';

window.addEventListener('DOMContentLoaded', () => {
  const compiled = Handlebars.compile(template);

  app.innerHTML = compiled({ variable: 'Hello John Doe' });
});
