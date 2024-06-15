function NewGameBtn({ onStart }) {
  const handleClick = () => {
    onStart();
  };

  return (
    <button onClick={handleClick} className="btn">
      new game
    </button>
  );
}

export default NewGameBtn;
