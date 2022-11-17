const components = () => {
  const element = document.createElement('div');
  element.setAttribute('id', 'main-body');

  element.innerHTML = `
  <h1>Leaderboard</h1>
    <div id="outline">
      <div>
        <span id="actions">
          <h2>Recent scores</h2>
          <button id="refresh" type="">Refresh</button>
        </span>
        <div id="dispaly-section">
        </div>
      </div>
      <div>
        <h2>Add your scores</h2>
        <form action="" id="form">
          <ul>
            <input type="text" id="name" name="name" placeholder="Your name">
          </ul>
          <ul>
            <input type="text" id="scores" name="scores" placeholder="Your score">
          </ul>
          <ul>
            <button id="submit" type="submit">submit</button>
          </ul>
        </form>
      </div>
    </div>
  `;
  return element;
};

export default components;