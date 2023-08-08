import 'react-native-gesture-handler';
import React from 'react';
import ThemeProvider from './src/theme/ThemeProvider';
import {AppProvider} from './src/contexts/AppContext';
import MainNavigator from './src/navigation/MainNavigator';

const App = () => {
  return (
    <AppProvider>
      <ThemeProvider>
        <MainNavigator />
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
