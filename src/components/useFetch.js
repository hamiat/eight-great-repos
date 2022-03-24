import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortCont = new AbortController();
    const signal = abortCont.signal;

    fetch(url, { signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("An error has occurred", error);
        setIsLoading(false);
      });

    return () => abortCont.abort();
  }, [url]);

  return { data, isLoading };
}
