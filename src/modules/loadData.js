const scores = document.getElementById('dispaly-section');
let gamesArr = [];
const renderGame = () => {
  let html = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const game of gamesArr) {
    html += `<li>${game.user}: ${game.score}</li>`;
  }
  if (scores !== null) {
    scores.innerHTML = html;
  }
};

const getScores = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:amHupOnbIsrMjLaQ53nR/scores/');

  const data = await response.json();
  gamesArr = data.result;
  renderGame();
};

export default getScores;