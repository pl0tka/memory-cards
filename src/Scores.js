function Scores({ currentScore, bestScore }) {
  return (
    <section className="scores">
      <p>Your current score: {currentScore}</p>
      <p>Your best score: {bestScore}</p>
    </section>
  );
}

export default Scores;
