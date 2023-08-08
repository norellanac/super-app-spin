import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Text from "../components/Text/Text";
import { useAppContext } from "../contexts/AppContext";

const CuentaScreen = () => {
  const {state, dispatch} = useAppContext();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredContainer}>
        <Text style={styles.homeText} variant='content-two-regular'>Pantalla Cuenta {state.profile.user.phoneNumber}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  centeredContainer: {
    alignItems: "center",
  },
  homeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15
  },
});

export default CuentaScreen;
