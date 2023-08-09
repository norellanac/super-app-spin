import { useEffect } from 'react';
import useFetch from './useFetch';
const API_URL = 'http://192.168.0.3:3001/merchants'; // Your API endpoint

const useFetchMerchantList = () => {
  const { data, loading, error } = useFetch(API_URL);
  console.error(data);
  return { data, loading, error };
};

export default useFetchMerchantList;
