import React, {createContext, useReducer, useContext, ReactNode} from 'react';
import useLocalStorage from '../utils/useLocalStorage';
import {UserState} from '../types/types';

type State = {
  profile: UserState;
  gifts: any[]; // Define your gift type here
  wallet: number;
  userGiftHistory: any[];
};

type Action =
  | {type: 'SET_USER'; payload: UserState}
  | {type: 'LOGOUT'}
  | {type: 'SET_GIFTS'; payload: any[]}
  | {type: 'SET_WALLET'; payload: number}
  | {type: 'SET_USER_GIFT_HISTORY'; payload: any[]};

type AppContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const initialState: State = {
  profile: {user: {phoneNumber: null}, isAuth: false},
  gifts: [],
  wallet: 0,
  userGiftHistory: [],
};

const appReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_USER':
      return {...state, profile: action.payload};
    case 'SET_GIFTS':
      return {...state, gifts: action.payload};
    case 'SET_WALLET':
      return {...state, wallet: action.payload};
    case 'SET_USER_GIFT_HISTORY':
      return {...state, userGiftHistory: action.payload}; // Update user gift history
    default:
      return state;
  }
};

export const AppProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
