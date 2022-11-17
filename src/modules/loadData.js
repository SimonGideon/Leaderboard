/* eslint-disable no-restricted-syntax */
// Retrieve the scores from the API and show them on the page.

const scores = document.querySelector('#dispaly-section');

let gamesArray = [];

const renderGames = () => {
  let html = '';

  for (const game of gamesArray) {
    html += `<li class="score-list">${game.user}: ${game.score}</li>`;
  }
  if (scores !== null) {
    scores.innerHTML = html;
  }
};

const getScores = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:u06lzZuHDEVnvjfd4K1F/scores/');
  const data = await response.json();
  gamesArray = data.result;
  renderGames();
};

export default getScores;