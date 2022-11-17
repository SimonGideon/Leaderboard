const name = document.querySelector('#name');
const score = document.querySelector('#scores');

const newScore = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:amHupOnbIsrMjLaQ53nR/scores/',
    {
      method: 'POST',
      body: JSON.stringify({
        user: name.value,
        score: score.value,
      }),
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
    });
  // eslint-disable-next-line no-unused-vars
  const data = await response.json();

  name.value = '';
  score.value = '';
};

export default newScore;