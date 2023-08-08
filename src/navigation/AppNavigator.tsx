import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import AuthNavigator from './AuthNavigator';
import BottomNavigation from './BottomNavigation';

const AppStack = createStackNavigator();

const AppNavigator = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        {isLoggedIn ? (
          <AppStack.Screen name="Main" component={BottomNavigation} options={{headerShown: false,}}/>
        ) : (
          <AppStack.Screen name="Auth" component={AuthNavigator} options={{headerShown: false,}}/>
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
