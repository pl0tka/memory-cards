import { useState, useEffect } from 'react';
import useFetch from './useFetch';
import Card from './Card';

const url = 'https://www.moogleapi.com/api/v1/characters';

function CardList({ updateScore, gameOver, amountOfCards }) {
  const [data, loading, error] = useFetch(url, amountOfCards);
  const [shuffledCards, setShuffledCards] = useState([]);

  useEffect(() => {
    if (data) {
      setShuffledCards(shuffleArray([...data]));
    }
  }, [data]);

  // Shuffle an array using a random sort
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Shuffle current cards and update the 'shuffledCards' state
  const shuffleCards = () => {
    setShuffledCards(shuffleArray([...shuffledCards]));
  };

  let displayedData;
  // Render different content based on the loading, error, and data states
  if (loading) {
    // Show a loading message while data is being fetched
    displayedData = <div>Loading...</div>;
  } else if (error) {
    // Show an error message if there was an error fetching the data
    displayedData = <div>{error}</div>;
  } else {
    // Render the shuffled cards
    displayedData = shuffledCards.map((character) => {
      return (
        <Card
          character={character}
          key={character.id}
          updateScore={updateScore}
          gameOver={gameOver}
          shuffleCards={shuffleCards}
        ></Card>
      );
    });
  }

  return <main className="cards">{displayedData}</main>;
}

export default CardList;
