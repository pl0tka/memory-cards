import './styles.css';
import { useState, useEffect } from 'react';
import CardList from './CardList';
import Header from './Header';
import ThemeToggler from './ThemeToggler';
import NewGameDialog from './NewGameDialog';
import NewGameBtn from './StartNewGameBtn';

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

  // NEW GAME DIALOG temp
  const [isStartedGame, setIsStartedGame] = useState(true);

  const onStart = () => {
    setIsStartedGame(!isStartedGame);
  };

  let modal;
  if (!isStartedGame) {
    modal = <NewGameDialog isStartedGame={isStartedGame} onStart={onStart} />;
  } else {
    modal = '';
  }

  return (
    <div>
      {modal}
      <div className="top-panel">
        <NewGameBtn onStart={onStart} />
        <ThemeToggler />
      </div>
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
