function NewGameBtn({ handleNewGame }) {
  const handleClick = () => {
    handleNewGame();
  };

  return (
    <button onClick={handleClick} className="btn">
      new game
    </button>
  );
}

export default NewGameBtn;
