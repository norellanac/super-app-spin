import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens
import HomeScreen from '../screens/HomeScreen';
import CarteraScreen from '../screens/CarteraScreen';
import CuentaScreen from '../screens/CuentaScreen';

//Iconos
import HomeTabIcon from '../icons/HomeTabIcon';
import BeneficiosTabIcon from '../icons/BeneficiosTabIcon';
import CarteraTabIcon from '../icons/CarteraTabIcon';
import CuentaTabIcon from '../icons/CuentaTabIcon';

//SubStackNavigator
import SubAppNavigator from './SubAppNavigator';

//Components
import BottomTabText from '../customComponents/BottomTabText';
import { createStackNavigator } from '@react-navigation/stack';
import TicketScreen from '../screens/TicketScreen';
import BalanceScreen from '../screens/BalanceScreen';
import MerchantsScreen from '../screens/MerchantsScreen';
import DetallesScreen from '../screens/DetallesMovimientoScreen';
import MovimientosScreen from '../screens/MovimientosScreen';
import NavBar from '../components/NavBar/NavBar';
import ArrowNav from '../icons/NavigationArrow';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <HomeTabIcon isFocused={focused} />,
          tabBarLabel: ({ focused }) => (
            <BottomTabText title="Home" isFocused={focused} />
          ),
          tabBarIconStyle: {
            marginTop: 10,
          },
        }}
      />
      <Tab.Screen
        name="Beneficios"
        component={SubAppNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <BeneficiosTabIcon isFocused={focused} />
          ),
          tabBarLabel: ({ focused }) => (
            <BottomTabText title="Beneficios" isFocused={focused} />
          ),
          tabBarIconStyle: {
            marginTop: 10,
          },
        }}
      />
      <Tab.Screen
        name="Cartera"
        component={CarteraScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <CarteraTabIcon isFocused={focused} />,
          tabBarLabel: ({ focused }) => (
            <BottomTabText title="Cartera" isFocused={focused} />
          ),
          tabBarIconStyle: {
            marginTop: 10,
          },
        }}
      />
      <Tab.Screen
        name="Cuenta"
        component={CuentaScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <CuentaTabIcon isFocused={focused} />,
          tabBarLabel: ({ focused }) => (
            <BottomTabText title="Cuenta" isFocused={focused} />
          ),
          tabBarIconStyle: {
            marginTop: 10,
          },
        }}
      />
    </Tab.Navigator>
  );
}

const BottomNavigation = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Home" component={HomeTabs} />
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
                  <ArrowNav onPress={navigation.goBack} />
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
                  <ArrowNav onPress={navigation.goBack} />
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
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <ArrowNav onPress={navigation.goBack} />
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
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <ArrowNav onPress={navigation.goBack} />
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
          headerShown: true,
          headerTitle: 'Detalles de la transacción',
        }}
      />
    </Stack.Navigator>
  );
};

export default BottomNavigation;
