const name = document.querySelector('#name');
const score = document.querySelector('#scores');

const newScore = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:u06lzZuHDEVnvjfd4K1F/scores/', {
      method: 'POST',
      body: JSON.stringify({
        user: name.value,
        score: score.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    // eslint-disable-next-line no-unused-vars
    const data = await response.json();

    name.value = '';
    score.value = '';
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export default newScore;