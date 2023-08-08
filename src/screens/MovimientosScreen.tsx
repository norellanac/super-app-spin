import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import NavBar from '../components/NavBar/NavBar';
import Spinner from '../components/atoms/Spinner/Spinner';
import { useNavigation } from '@react-navigation/native';

const MovimientosScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Movimientos Screen</Text>
      <Spinner/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MovimientosScreen;
