import Scores from './Scores';

function Header({ currentScore, bestScore }) {
  return (
    <header>
      <div>
        <h1 className="title">Memory Game</h1>
        <h2 className="subtitle">
          Test your memory by clicking cards for points — just don't click any
          card more than once!
        </h2>
      </div>
      <Scores currentScore={currentScore} bestScore={bestScore} />
    </header>
  );
}

export default Header;
