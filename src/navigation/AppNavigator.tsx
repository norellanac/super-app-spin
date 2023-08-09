import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Screens
import HomeScreen from "../screens/HomeScreen";
import CarteraScreen from "../screens/CarteraScreen";
import CuentaScreen from "../screens/CuentaScreen";

//Iconos
import HomeTabIcon from "../icons/HomeTabIcon";
import BeneficiosTabIcon from "../icons/BeneficiosTabIcon";
import CarteraTabIcon from "../icons/CarteraTabIcon";
import CuentaTabIcon from "../icons/CuentaTabIcon";

//SubStackNavigator
import SubAppNavigator from "./SubAppNavigator";

//Components
import BottomTabText from "../customComponents/BottomTabText";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <HomeTabIcon isFocused={focused}/>
          ),
          tabBarLabel: ({focused}) => (
            <BottomTabText title="Home" isFocused={focused}/>
          ),
          tabBarIconStyle:{
            marginTop: 10
          }
        }}
      />
      <Tab.Screen
        name="Beneficios"
        component={SubAppNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <BeneficiosTabIcon isFocused={focused}/>
          ),
          tabBarLabel: ({focused}) => (
            <BottomTabText title="Beneficios" isFocused={focused}/>
          ),
          tabBarIconStyle:{
            marginTop: 10
          }
        }}
      />
      <Tab.Screen
        name="Cartera"
        component={CarteraScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <CarteraTabIcon isFocused={focused}/>
          ),
          tabBarLabel: ({focused}) => (
            <BottomTabText title="Cartera" isFocused={focused}/>
          ),
          tabBarIconStyle:{
            marginTop: 10
          }
        }}
      />
      <Tab.Screen
        name="Cuenta"
        component={CuentaScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <CuentaTabIcon isFocused={focused}/>
          ),
          tabBarLabel: ({focused}) => (
            <BottomTabText title="Cuenta" isFocused={focused}/>
          ),
          tabBarIconStyle:{
            marginTop: 10
          }
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
