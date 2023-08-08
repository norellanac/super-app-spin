import 'react-native-gesture-handler';
import React from 'react';
import ThemeProvider from './src/theme/ThemeProvider';
import {AppProvider} from './src/contexts/AppContext';
import MainNavigator from './src/navigation/MainNavigator';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <AppProvider>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'}/>
      <ThemeProvider>
        <MainNavigator />
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
