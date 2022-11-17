import components from './components.js';
// styles
import './styles/styles.css';

import getScores from './modules/loadData';
import newScore from './modules/newScores';

document.body.appendChild(components());

const submit = document.querySelector('#submit');
const refresh = document.querySelector('#refresh');

// submit the score to the api
submit.addEventListener('click', newScore);

// refresh button
refresh.addEventListener('click', getScores);

// refresh the score on page load
window.addEventListener('load', getScores);
 