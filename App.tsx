import 'react-native-gesture-handler';
import React from 'react';
import ThemeProvider from './src/theme/ThemeProvider';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './src/navigation/BottomNavigation';

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
