import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const MovimientosScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Movimientos Screen</Text>
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
