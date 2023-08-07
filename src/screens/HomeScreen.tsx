import React from "react";
import { Button } from "../../src";
import { SafeAreaView, StyleSheet } from "react-native";
import HomeIcon from "../icons/HomeIcon";

const HomeScreen = () => {
    return(
        <SafeAreaView style={appStyles.mainContainer}>
            <Button text="HomeScreen" onPress={() => console.log('spin')} styleText={{fontWeight: 'bold', fontSize: 18}} size="medium"/>
            <HomeIcon/>
        </SafeAreaView>
        
    )
}

const appStyles = StyleSheet.create({
    mainContainer: {
      marginHorizontal: 15,
    },
  });

  export default HomeScreen;