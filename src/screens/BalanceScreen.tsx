import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Text from '../components/Text/Text';
import CardPoints from '../customComponents/CardPoints';
import { useAppContext } from '../contexts/AppContext';
import Button from '../components/Button/Button';
import GridView from '../components/GridView/GridView';
import TextInput from '../components/atoms/TextInput';
import Disclaimer from '../components/Disclaimer/Disclaimer';
import { useNavigation } from '@react-navigation/native';

const BalanceScreen = () => {
  const { state } = useAppContext();
  const navigation = useNavigation();
  const { wallet: pointsUser } = state;

  const [textInputValue, setTextInputValue] = useState('0');

  const handleCardPress = (amount:number) => {
    const newValue = (parseFloat(textInputValue) || 0) + amount;
    setTextInputValue(newValue.toString());
  };

  const generateCards = () => {
    const availableCards = [
      { amount: 50, points: 500 },
      { amount: 100, points: 1000 },
      { amount: 200, points: 2000 },
      { amount: 500, points: 5000 }
    ];

    return availableCards.filter(card => pointsUser >= card.points);
  };

  const renderCard = (card: any) => (
    <View style={{ margin: 5 }} key={card.amount}>
      <Button
        disabled={pointsUser / 10 - parseInt(textInputValue) < card.amount}
        variant="secondary"
        onPress={() => handleCardPress(card.amount)}
        text={`$${card.amount}`}
        size={card.amount === 200 ? 'small' : 'large'}
      />
      <Text variant='default-body'> {card.points} puntos</Text>
    </View>
  );

  const shouldShowCards = pointsUser / 10 >= 50;
  const shouldShowDisclaimer = pointsUser / 10 < 20;

  return (
    <>
      <CardPoints
        title={`${pointsUser} puntos`}
        tagText={`$ ${(pointsUser / 10).toFixed(2)}`}
      />
      <Text variant="subtitle-medium">
        Elige o escribe el valor de los puntos que quieres cambiar
      </Text>
      {shouldShowCards && <GridView data={generateCards().map(renderCard)} />}

      <Text variant="subtitle-medium"> Otro</Text>
      <TextInput
        variant="default"
        placeholder="Monto en pesos"
        value={textInputValue}
        onChangeText={newValue => setTextInputValue(newValue)}
        onValidation={isValid => {
          console.log(isValid);
        }}
        label="Monto en pesos"
      />

      <Text>El valor máximo que puedes cambiar es $1,000.00</Text>
      {shouldShowDisclaimer && (
        <Disclaimer
          variant="warning"
          text="Recuerda que necesitas tener mínimo $20.00 en puntos para poder cambiarlos con la marca que elegiste"
          backgroundColor="lightBlue"
          textColor="black"
          iconColor="blue"
        />
      )}

      <Button
        disabled={shouldShowDisclaimer && parseInt(textInputValue) < 20}
        variant="primary"
        onPress={() => {
          navigation.navigate('TicketScreen' as never);
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
