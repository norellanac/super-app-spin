import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

type FetchResult<T> = {
  data: any;
  loading: boolean;
  error: string | null;
};

const useFetch = <T>(url: string): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<T> = await axios.get(url);
        setData(response.data);
        setLoading(false);
        //console.log('fetchData', response.data);
      } catch (err) {
        console.warn(err);
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
