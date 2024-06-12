function Card({ character, addScore }) {
  const { name, id, pictures } = character;

  const handleClick = () => {
    addScore();
  };

  return (
    <article key={id} onClick={handleClick}>
      <img src={pictures[0].url} alt={name} />
      <p>{name}</p>
    </article>
  );
}

export default Card;
