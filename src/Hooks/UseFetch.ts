import axios from "axios";
import { useState, useEffect } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  err: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    err: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Api = "https://jsonplaceholder.typicode.com/posts";

        const res = await axios.get<T>(url || Api);

        setState({
          data: res.data,
          loading: false,
          err: null,
        });
      } catch {
        setState({
          data: null,
          loading: false,
          err: "500 error",
        });
      }
    };

    fetchData();
  }, [url]);

  return state;
}
