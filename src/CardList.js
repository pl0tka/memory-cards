import useFetch from './useFetch';
import Card from './Card';

const url = 'https://www.moogleapi.com/api/v1/characters';

function CardList({ updateScore, gameOver }) {
  const [data, loading, error] = useFetch(url);

  let displayedData;
  if (loading) {
    displayedData = <div>Loading...</div>;
  } else if (error) {
    displayedData = <div>{error}</div>;
  } else {
    displayedData = data.map((character) => {
      return (
        <Card
          character={character}
          key={character.id}
          updateScore={updateScore}
          gameOver={gameOver}
        ></Card>
      );
    });
  }

  return <main>{displayedData}</main>;
}

export default CardList;
