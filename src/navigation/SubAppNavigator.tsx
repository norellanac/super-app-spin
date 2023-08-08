import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MovimientosScreen from '../screens/MovimientosScreen';
import BeneficiosScreen from '../screens/BeneficiosScreen';
import NavBar from '../components/NavBar/NavBar';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import ArrowNav from '../icons/NavigationArrow';
//import CambioPuntosScreen from '../screens/CambioPuntosScreen';

const Stack = createStackNavigator();

const SubAppNavigator = () => {

  const navigation = useNavigation();

  //Events Handler for Navigation
  const handleArrowNavPress = () => {
    navigation.navigate('BeneficiosScreen' as never);
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BeneficiosScreen"
        component={BeneficiosScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
      name="MovimientosScreen" 
      component={MovimientosScreen} 
      options={{
        header: () => (
          <NavBar
            variant={'primary'}
            title={'Movimientos'}
            leftSection={
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                <ArrowNav onPress={handleArrowNavPress}/>
              </View>
            }
          />
        ),
      }}
      />
    </Stack.Navigator>
  );
};

export default SubAppNavigator;
