const components = () => {
  const element = document.createElement('div');
  element.innerHTML = `
  <h1>Leaderboard</h1>
    <div>
      <div>
        <span id="actions">
          <h2>Recent scores</h2>
          <button type="">Refresh</button>
        </span>
        <span id="dispaly-section">
          <p>Name: 100</p>
          <p>Name: 20</p>
          <p>Name: 50</p>
          <p>Name: 78</p>
          <p>Name: 125</p>
          <p>Name: 77</p>
          <p>Name: 42</p>
        </span>
      </div>
      <div>
        <h2>Add your scores</h2>
        <form action="">
          <ul>
            <input type="text" name="name" placeholder="Your name">
          </ul>
          <ul>
            <input type="text" name="scores" placeholder="Your score">
          </ul>
          <ul>
            <button type="submit">submit</button>
          </ul>
        </form>
      </div>
    </div>
  `;
  return element;
};

export default components;