// useLocalStorage.ts
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    async function getStoredValue() {
      try {
        const storedValue = await AsyncStorage.getItem(key);
        if (storedValue !== null) {
          setValue(JSON.parse(storedValue));
        }
      } catch (error) {
        console.error('Error retrieving stored value:', error);
      }
    }
    getStoredValue();
  }, [key]);

  const setStoredValue = async (newValue: T) => {
    try {
      setValue(newValue);
      await AsyncStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error('Error setting stored value:', error);
    }
  };

  return [value, setStoredValue] as const;
};

export default useLocalStorage;
