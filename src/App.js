import './styles.css';
import useFetch from './useFetch';

const url = 'https://www.moogleapi.com/api/v1/characters';

function App() {
  const [data, loading, error] = useFetch(url);

  let displayedData;
  if (loading) {
    displayedData = <div>Loading...</div>;
  } else if (error) {
    displayedData = <div>{error}</div>;
  } else {
    displayedData = data.map((character) => {
      const { name, id, pictures } = character;
      return (
        <article key={id}>
          <img src={pictures[0].url} alt={name} />
          <p>{name}</p>
        </article>
      );
    });
  }

  return <main>{displayedData}</main>;
}

export default App;
