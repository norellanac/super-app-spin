import React from "react";
import Button from "../components/Button/Button";
import { SafeAreaView, StyleSheet } from "react-native";

const BeneficiosScreen = () => {
    return(
        <SafeAreaView style={appStyles.mainContainer}>
            <Button text="Beneficios" onPress={() => console.log('spin')} styleText={{fontWeight: 'bold', fontSize: 18}} size="medium"/>
        </SafeAreaView>
    )
}

const appStyles = StyleSheet.create({
    mainContainer: {
      marginHorizontal: 15,
    },
  });

export default BeneficiosScreen;
