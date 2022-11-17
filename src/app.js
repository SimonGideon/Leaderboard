// styles
import './styles/styles.css';

import getScores from './modules/loadData.js';
import newScore from './modules/newScores.js';
// import fetchAPI from './modules/newGame';
// fetchAPI();

const submit = document.querySelector('#submit');
const refresh = document.querySelector('#refresh');

// submit the score to the api
submit.addEventListener('click', (e) => { e.preventDefault(); newScore(); });

// refresh button
refresh.addEventListener('click', getScores);

// refresh the score on page load
window.addEventListener('load', getScores);
