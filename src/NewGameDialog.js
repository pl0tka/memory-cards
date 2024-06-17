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
      <div className="overflow-hidden">
        <div className="dialog-content">
          <h1>Memory Game</h1>
          <h2>
            Test your memory by clicking cards for points — just don't click any
            card more than once!
          </h2>
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
