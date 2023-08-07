import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import BeneficiosScreen from "../screens/BeneficiosScreen";
import HomeIcon from "../icons/HomeIcon";
import BeneficiosIcon from "../icons/BeneficiosIcon";

const Tab = createBottomTabNavigator();

const BottomNavigation: React.FC = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{
            headerShown: false,
            tabBarIcon: ({}) => (
                <HomeIcon/>
            )
            }}/>
        <Tab.Screen name="Beneficios" component={BeneficiosScreen} options={{
            headerShown: false,
            tabBarIcon: ({}) => (
                <BeneficiosIcon/>
            )
            }}/>
      </Tab.Navigator>
    );
  };
  
  export default BottomNavigation;