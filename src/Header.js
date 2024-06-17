import Scores from './Scores';

function Header({ currentScore, bestScore }) {
  return (
    <div className="header">
      <header className="header-content container">
        <div>
          <h1>Memory Game</h1>
          <h2>
            Test your memory by clicking cards for points — just don't click any
            card more than once!
          </h2>
        </div>
        <Scores currentScore={currentScore} bestScore={bestScore} />
      </header>
    </div>
  );
}

export default Header;
