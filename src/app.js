import components from './components.js';
// styles
import './styles/styles.css';
import fetchAPI from './modules/newGame';

fetchAPI();

document.body.appendChild(components());
