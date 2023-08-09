import React from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView } from 'react-native';
import Text from '../components/Text/Text';
import PointsInfo from '../customComponents/PointsInfo';
import { useAppContext } from '../contexts/AppContext';
import Barcode from '../components/Barcode/Barcode';
import MovimientosScreen from './MovimientosScreen';

const CarteraScreen = () => {
  const { state } = useAppContext();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredContainer}>
        <Text variant="title-two-semibold" style={styles.title}>
          Cartera
        </Text>
        <PointsInfo points={state.wallet} />
        <View style={styles.walletSection}>
          <Barcode value='1234567890' format='CODE128'/>
          <Text style={styles.wallettitle} variant="content-two-regular">
            1234567890
          </Text>
        </View>
      </View>
      <MovimientosScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  centeredContainer: {
    marginHorizontal: 15,
  },
  homeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 25,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
  },
  walletSection:{
    alignItems: 'center',
    gap: -15,
    marginTop: 15,
  },
  wallettitle:{
    fontSize: 16,
    color: '#00000075',
    marginTop: 20,
  },
});

export default CarteraScreen;
