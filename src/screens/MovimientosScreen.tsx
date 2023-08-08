import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Spinner from '../components/atoms/Spinner/Spinner';

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
