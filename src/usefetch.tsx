import { useState, useEffect } from "react";

export default function useFetch(url: string) {
  const [data, setData] = useState<JSON>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .then(() => setLoading(false))
      .catch(setError);
  }, [url]);
  return [data, loading, error];
}
