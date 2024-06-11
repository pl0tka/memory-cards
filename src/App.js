import useFetch from './useFetch';

function App() {
  const [data, loading, error] = useFetch();

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
          <p>{name}</p>
          <img src={pictures[0].url} alt={name} />
        </article>
      );
    });
  }

  return <div>{displayedData}</div>;
}

export default App;
