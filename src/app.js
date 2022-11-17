// styles
import './styles/styles.css';

import getScores from './modules/loadData.js';
import newScore from './modules/newScores.js';

const submit = document.querySelector('#submit');
const refresh = document.querySelector('#refresh');

// submit the score to the api
submit.addEventListener('submit', (e) => {
  e.preventDefault();
  newScore();
});

// refresh button
refresh.addEventListener('click', getScores);

// refresh the score on page load
window.addEventListener('load', getScores);
