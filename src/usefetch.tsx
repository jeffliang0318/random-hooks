import { useState, useEffect } from "react";
interface User {
  login: string;
  id: string;
}
export function useFetch(url: string): [User[] | undefined, boolean, string] {
  const [data, setData] = useState<User[] | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .then(() => setLoading(false))
      .catch(setError);
  }, [url]);
  return [data, loading, error];
}
