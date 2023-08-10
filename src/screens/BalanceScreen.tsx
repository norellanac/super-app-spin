import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Text from '../components/Text/Text';
import CardPoints from '../customComponents/CardPoints';
import { useAppContext } from '../contexts/AppContext';
import Button from '../components/Button/Button';
import { useNavigation } from '@react-navigation/native';
import GridView from '../components/GridView/GridView';
import TextInput from '../components/atoms/TextInput';
import Disclaimer from '../components/Disclaimer/Disclaimer';

const BalanceScreen = () => {
  const { state, dispatch } = useAppContext();
  const navigation = useNavigation();
  const { wallet } = state;
  const card1 = (
    <View>
      <Button
        disabled={false}
        variant="secondary"
        onPress={() => {
          console.log('$50');
          navigation.navigate('TicketScreen');
        }}
        text="$50"
        size="large"
      />
      <Text variant="subtitle-small"> 500 puntos</Text>
    </View>
  );

  const card2 = (
    <View>
      <Button
        disabled={false}
        variant="secondary"
        onPress={() => {
          console.log('$100');
          navigation.navigate('TicketScreen');
        }}
        text="$100"
        size="large"
      />
      <Text variant="subtitle-small"> 1000 puntos</Text>
    </View>
  );

  const card3 = (
    <View style={{ margin: 5 }}>
      <Button
        disabled={false}
        variant="secondary"
        onPress={() => {
          console.log('$200');
          navigation.navigate('TicketScreen');
        }}
        text="$200"
        size="small"
      />
      <Text variant="subtitle-small"> 2000 puntos</Text>
    </View>
  );
  const card4 = (
    <View style={{ margin: 5 }}>
      <Button
        disabled={false}
        variant="secondary"
        onPress={() => {
          console.log('$500');
          navigation.navigate('TicketScreen');
        }}
        text="$500"
        size="large"
      />
      <Text variant="subtitle-small"> 5000 puntos</Text>
    </View>
  );

  const cards = [];
  cards.push(card1);
  cards.push(card2);
  cards.push(card3);
  cards.push(card4);
  return (
    <>
      <CardPoints
        title={`${wallet} puntos`}
        tagText={`$ ${(wallet / 10).toFixed(2)}`}
      />
      <Text variant="subtitle-medium">
        {' '}
        Elige o escribe el valor de los puntos que quieres cambiar
      </Text>
      <GridView data={cards} />

      <Text variant="subtitle-medium"> Otro</Text>
      <TextInput
        variant="default"
        placeHolder="Monto en pesos"
        value={'Monto en pesos'}
        onChangeText={() => console.log('valor')}
        onValidation={isValid => {
          console.log(isValid); // [true] or [false]
        }}
        label={'Monto en pesos'}
      />
      <Text>El valor máximo que puedes cambiar es $1,000.00</Text>
      <Disclaimer
        variant="warning"
        text="Recuerda que necesitas tener mínimo $20.00 en puntos para poder cambiarlos con la marca que elegiste"
        backgroundColor="lightBlue"
        textColor="black"
        iconColor="blue"
        icon=""
      />

      <Button
        disabled={false}
        variant="primary"
        onPress={() => {
          console.log('Continuar');
          navigation.navigate('TicketScreen');
        }}
        text="Continuar"
        size="large"
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
