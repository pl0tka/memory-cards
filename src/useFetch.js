import { useState, useEffect } from 'react';

function useFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('https://www.moogleapi.com/api/v1/characters');
        if (!resp.ok) {
          throw new Error(`HTTP error: Status ${resp.status}`);
        }
        let fetchedData = await resp.json();
        setData(fetchedData.slice(0, 16));
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return [data, loading, error];
}

export default useFetch;
