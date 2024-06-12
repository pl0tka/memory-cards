import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCanceled = false;

    const fetchData = async () => {
      setLoading(true);

      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          throw new Error(`HTTP error: Status ${resp.status}`);
        }
        let fetchedData = await resp.json();
        if (!isCanceled) {
          setData(fetchedData.slice(0, 16));
          setError(null);
        }
      } catch (err) {
        if (!isCanceled) {
          setError(err.message);
          setData(null);
        }
      } finally {
        if (!isCanceled) {
          setLoading(false);
        }
      }
    };
    fetchData();

    return () => {
      isCanceled = true;
    };
  }, [url]);

  return [data, loading, error];
}

export default useFetch;
