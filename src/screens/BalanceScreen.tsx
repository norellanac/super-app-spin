import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Text from '../components/Text/Text';
import CardPoints from '../customComponents/CardPoints';
import { useAppContext } from '../contexts/AppContext';
import Button from '../components/Button/Button';
import { useNavigation } from '@react-navigation/native';

const BalanceScreen = () => {
  const { state, dispatch } = useAppContext();
  const navigation = useNavigation();
  const { wallet } = state;
  return (
    <>
      <CardPoints
        title={`${wallet} puntos`}
        tagText={`$ ${(wallet / 10).toFixed(2)}`}
      />

      <Button
        disabled={false}
        variant="primary"
        onPress={() => {
          console.log('Continuar');
          navigation.navigate('TicketScreen');
        }}
        text="Continuar"
        size="small"
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  centeredContainer: {
    alignItems: 'center',
  },
  homeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
  },
});

export default BalanceScreen;
