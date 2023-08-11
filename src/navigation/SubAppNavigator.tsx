import React from 'react';

//Screens
import BeneficiosScreen from '../screens/BeneficiosScreen';

//useNavigation methods
import { createStackNavigator } from '@react-navigation/stack';

//Types
import { RootStackParamList } from '../types/RootStackParamList';

const Stack = createStackNavigator<RootStackParamList>();

const SubAppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BeneficiosScreen"
        component={BeneficiosScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default SubAppNavigator;
