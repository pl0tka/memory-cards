import { useState, useEffect } from 'react';

function Card({ character, updateScore, gameOver, shuffleCards }) {
  const { name, pictures } = character;
  const [isClickedTwice, setIsClickedTwice] = useState(false);

  const handleClick = () => {
    if (!isClickedTwice) {
      updateScore(isClickedTwice);
      setIsClickedTwice(true);
    } else {
      updateScore(isClickedTwice);
    }
    shuffleCards();
  };

  useEffect(() => {
    if (gameOver) {
      setIsClickedTwice(false);
    }
  }, [gameOver]);

  return (
    <article onClick={handleClick} className="card">
      <img src={pictures[0].url} alt={name} />
      <p className="card-text">{name}</p>
    </article>
  );
}

export default Card;
