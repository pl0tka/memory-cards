function Scores({ currentScore, bestScore }) {
  return (
    <div className="scores-outer">
      <section className="scores">
        <p>
          Your current score: <span>{currentScore}</span>
        </p>
        <p>
          Your best score: <span>{bestScore}</span>
        </p>
      </section>
    </div>
  );
}

export default Scores;
