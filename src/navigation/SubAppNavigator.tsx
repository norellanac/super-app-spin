import React from 'react';

//Screens
import MovimientosScreen from '../screens/MovimientosScreen';
import BeneficiosScreen from '../screens/BeneficiosScreen';

//useNavigation methods
import { useNavigation } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Navigation Components
import { View } from 'react-native';
import ArrowNav from '../icons/NavigationArrow';
import NavBar from '../components/NavBar/NavBar';

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
