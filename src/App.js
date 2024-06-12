import './styles.css';
import { useState } from 'react';
import CardList from './CardList';
import Scores from './Scores';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const updateScore = () => {
    let updatedScore = currentScore + 1;
    setCurrentScore(updatedScore);

    if (bestScore < updatedScore) {
      setBestScore(updatedScore);
    }
  };

  return (
    <div>
      <Scores currentScore={currentScore} bestScore={bestScore}></Scores>
      <CardList addScore={updateScore} currentScore={currentScore} />
    </div>
  );
}

export default App;
