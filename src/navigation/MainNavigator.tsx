import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAppContext } from '../contexts/AppContext';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

const MainNavigator: React.FC = () => {
  const { state } = useAppContext();
  return (
    <NavigationContainer>
      {state.profile.isAuth ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;
