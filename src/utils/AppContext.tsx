// AppContext.tsx
import React, {createContext, useContext} from 'react';

interface AppContextValue {
  // Define your context values here
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};

export const AppContextProvider: React.FC<AppContextValue> = ({children}) => {
  // Implement your context provider logic here
  return (
    <AppContext.Provider value={/* provide context values */}>
      {children}
    </AppContext.Provider>
  );
};
