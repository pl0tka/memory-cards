import './styles.css';
import { useState, useEffect } from 'react';
import CardList from './CardList';
import Header from './Header';
import ThemeToggler from './ThemeToggler';
import NewGameDialog from './NewGameDialog';
import NewGameBtn from './NewGameBtn';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [amountOfCards, setAmountOfCards] = useState(null);

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

  const handleNewGame = () => {
    if (isGameStarted) {
      setAmountOfCards(null);
      setCurrentScore(0);
      setBestScore(0);
      setGameOver(false);
    }
    setIsGameStarted(!isGameStarted);
  };
  const onStart = (amount) => {
    setAmountOfCards(amount);
  };

  let dialog = null;
  if (!isGameStarted || !amountOfCards) {
    dialog = <NewGameDialog onStart={onStart} handleNewGame={handleNewGame} />;
  } else {
    dialog = null;
  }

  return (
    <div>
      {dialog}
      <div className="header-toolbar">
        <NewGameBtn handleNewGame={handleNewGame} />
        <ThemeToggler />
      </div>
      <Header currentScore={currentScore} bestScore={bestScore} />
      <CardList
        updateScore={updateScore}
        currentScore={currentScore}
        gameOver={gameOver}
        amountOfCards={amountOfCards}
      />
    </div>
  );
}

export default App;
