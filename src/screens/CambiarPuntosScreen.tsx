import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Text from "../components/Text/Text";
import HomeIconFigma from "../icons/HomeIconFigma";
import useFetchUserGiftHistory from "../hooks/useFetchUserGiftHistory";

const ChangePointsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredContainer}>
        <HomeIconFigma />
        <Text style={styles.homeText} variant="content-two-regular">
          Pantalla Cambiar Puntos
        </Text>
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

export default ChangePointsScreen;
