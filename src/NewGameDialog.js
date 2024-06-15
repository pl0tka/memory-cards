import { useState, useEffect } from 'react';

function NewGameDialog({ onStart }) {
  const [amountOfCards, setAmountOfCards] = useState(8);
  // Preventing scrolling when a dialog is open
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  const handleChange = (e) => {
    setAmountOfCards(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onStart();
  };

  return (
    <section className="new-game">
      <div className="new-game-box overflow-hidden">
        <div className="new-game-inner">
          <form onSubmit={handleSubmit} className="new-game-form">
            <p className="new-game-question">Choose the number of cards: </p>
            <input
              onChange={handleChange}
              value={amountOfCards}
              type="number"
              min={8}
              max={50}
            />
            <button className="btn btn-start">Start</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NewGameDialog;
