import { useState, useEffect } from 'react';

function NewGameDialog({ handleNewGame, onStart }) {
  const [inputValue, setInputValue] = useState(12);
  // Preventing scrolling when a dialog is open
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onStart(inputValue);
    handleNewGame();
  };

  return (
    <section className="new-game-dialog">
      <div className="dialog-container">
        <div className="dialog-content">
          <h1>Memory Game</h1>
          <h2>Test your memory with this memory cards game!</h2>
          <ol className="dialog-instruction">
            <li>Your goal is to click on as many unique cards as possible.</li>
            <li>
              Each time you click a card that you haven't clicked before, you
              earn a point.
            </li>
            <li>
              If you click the same card more than once, the game restarts.
            </li>
            <li>After each click, the cards are shuffled in a random order.</li>
          </ol>
          <form onSubmit={handleSubmit} className="dialog-form">
            <label className="dialog-label">Choose the number of cards:</label>
            <input
              onChange={handleChange}
              value={inputValue}
              type="number"
              min={2}
              max={80}
              className="dialog-input"
            />
            <button className="btn btn-start-game">Start</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NewGameDialog;
