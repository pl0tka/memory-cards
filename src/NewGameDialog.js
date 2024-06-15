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
    <section className="new-game">
      <div className="new-game-box overflow-hidden">
        <div className="new-game-inner">
          <form onSubmit={handleSubmit} className="new-game-form">
            <label className="new-game-question">
              Choose the number of cards:
            </label>
            <input
              onChange={handleChange}
              value={inputValue}
              type="number"
              min={2}
              max={80}
            />
            <button className="btn btn-start">Start</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NewGameDialog;
