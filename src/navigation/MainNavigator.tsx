import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useAppContext} from '../contexts/AppContext';
import BottomNavigation from './AppNavigator';
import AuthNavigator from './AuthNavigator';

const Stack = createStackNavigator();

const MainNavigator: React.FC = () => {
  const {state} = useAppContext();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {state.profile.isAuth ? (
          <Stack.Screen name="App" component={BottomNavigation} />
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
