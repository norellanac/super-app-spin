import { useEffect } from 'react';
import { useAppContext } from '../contexts/AppContext';
import useFetch from './useFetch';
const API_URL = 'http://192.168.0.3:3001/history'; // Your API endpoint

const useFetchUserGiftHistory = () => {
  const { dispatch } = useAppContext();
  const { data, loading, error } = useFetch(API_URL);
  console.log(data);

  useEffect(() => {
    if (data) {
      const totalPoints = data.reduce(
        (total: number, item: any) => total + item.points,
        0,
      );
      dispatch({ type: 'SET_WALLET', payload: totalPoints });
      dispatch({ type: 'SET_USER_GIFT_HISTORY', payload: data });
      console.error('usefetch', data, totalPoints);
    }
  }, [data]);

  return null; // This hook doesn't need to return anything
};

export default useFetchUserGiftHistory;
