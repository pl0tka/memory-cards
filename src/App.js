import './styles.css';
import { useState, useEffect } from 'react';
import CardList from './CardList';
import Header from './Header';
import ThemeToggler from './ThemeToggler';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const updateScore = (clickedTwice) => {
    if (!clickedTwice) {
      setCurrentScore(currentScore + 1);
    } else {
      setBestScore(Math.max(currentScore, bestScore));
      setCurrentScore(0);
      setGameOver(true);
    }
  };

  useEffect(() => {
    if (gameOver) {
      const resetGame = () => {
        setGameOver(false);
      };
      resetGame();
    }
  }, [gameOver]);

  return (
    <div>
      <ThemeToggler />
      <Header currentScore={currentScore} bestScore={bestScore} />
      <CardList
        updateScore={updateScore}
        currentScore={currentScore}
        gameOver={gameOver}
      />
    </div>
  );
}

export default App;
