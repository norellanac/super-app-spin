import React from 'react';

//Screens
import MovimientosScreen from '../screens/MovimientosScreen';
import BeneficiosScreen from '../screens/BeneficiosScreen';
import DetallesScreen from '../screens/DetallesMovimientoScreen';

//useNavigation methods
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

//Navigation Components
import { View } from 'react-native';
import ArrowNav from '../icons/NavigationArrow';
import NavBar from '../components/NavBar/NavBar';
import MerchantsScreen from '../screens/MerchantsScreen';
import BalanceScreen from '../screens/BalanceScreen';
import TicketScreen from '../screens/TicketScreen';

//Types
import { RootStackParamList } from '../types/RootStackParamList';

const Stack = createStackNavigator<RootStackParamList>();

const SubAppNavigator = () => {
  const navigation = useNavigation();

  //Events Handler for Navigation
  const handleArrowNavPress = () => {
    navigation.navigate('BeneficiosScreen' as never);
  };

  //Events Handler for Movements
  const handleArrowNavPressDetails = () => {
    navigation.navigate('MovimientosScreen' as never);
  };

  //Events Handler for Exchange
  const handleArrowNavPressBalance = () => {
    navigation.navigate('exchangeScreen' as never);
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
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <ArrowNav onPress={handleArrowNavPress} />
                </View>
              }
            />
          ),
        }}
      />
      <Stack.Screen
        name="DetallesScreen"
        component={DetallesScreen as never}
        options={{
          header: () => (
            <NavBar
              variant={'primary'}
              title={'Detalles'}
              leftSection={
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <ArrowNav onPress={handleArrowNavPressDetails} />
                </View>
              }
            />
          ),
        }}
      />
      <Stack.Screen 
      name="exchangeScreen" 
      component={MerchantsScreen} 
      options={{
        header: () => (
          <NavBar
            variant={'primary'}
            title={'Cambia tus puntos'}
            leftSection={
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                <ArrowNav onPress={handleArrowNavPress}/>
              </View>
            }
          />
        ),
      }}
      />
      <Stack.Screen
        name="BalanceScreen"
        component={BalanceScreen}
        options={{
          header: () => (
            <NavBar
              variant={'primary'}
              title={'Cambia tus puntos'}
              leftSection={
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                  <ArrowNav onPress={handleArrowNavPressBalance}/>
                </View>
              }
            />
          ),
        }}
      />
      <Stack.Screen
        name="TicketScreen"
        component={TicketScreen}
        options={{
          headerShown: false,
          headerTitle: 'Detalles de la transacción',
        }}
      />
    </Stack.Navigator>
  );
};

export default SubAppNavigator;
