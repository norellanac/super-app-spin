import {useEffect} from 'react';
import axios from 'axios';
import {useAppContext} from '../contexts/AppContext';
const API_URL = 'http://130.41.173.51:3001/history'; // Your API endpoint

const useFetchUserGiftHistory = () => {
  const {dispatch} = useAppContext();

  useEffect(() => {
    const fetchUserGiftHistory = async () => {
      try {
        const response = await axios.get(API_URL);
        //console.error('fetchUserGiftHistory', response.data);
        dispatch({type: 'SET_USER_GIFT_HISTORY', payload: response.data});
        console.log(response.data);
      } catch (error: any) {
        console.error('Error fetching user gift history:', error.message);
      }
    };

    fetchUserGiftHistory();
  }, [dispatch]);

  return null; // This hook doesn't need to return anything
};

export default useFetchUserGiftHistory;
