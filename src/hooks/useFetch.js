import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // let abortController = new AbortController();
    // let signal = abortController.signal;
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res) {
          throw Error("something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setError(null);
        setLoading(false);
        return setData(data);
      })
      .catch((err) => setError(err.message));

    // return () => {
    //   abortController.abort();
    // };
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
