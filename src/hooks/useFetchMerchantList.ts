import useFetch from './useFetch';
//const API_URL = 'http://192.168.0.3:3001/merchants'; // Your API endpoint
const API_URL = 'http://0.0.0.0:3001/merchants'; //Add for CRISTHIAN30 TEST


const useFetchMerchantList = () => {
  const { data, loading, error } = useFetch(API_URL);
  //console.error(data);
  return { data, loading, error };
};

export default useFetchMerchantList;
