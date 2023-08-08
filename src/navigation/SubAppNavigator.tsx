import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MovimientosScreen from '../screens/MovimientosScreen';
import BeneficiosScreen from '../screens/BeneficiosScreen';
//import CambioPuntosScreen from '../screens/CambioPuntosScreen'; 

const Stack = createStackNavigator();

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
      <Stack.Screen name="MovimientosScreen" component={MovimientosScreen}/>
    </Stack.Navigator>
  );
};

export default SubAppNavigator;
