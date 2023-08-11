import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { RouteProp } from '@react-navigation/native';

//Comopnents
import Text from '../components/Text/Text';
import Button from '../components/Button/Button';
import TextInput from '../components/atoms/TextInput';
import Disclaimer from '../components/Disclaimer/Disclaimer';
import PointsInfo from '../customComponents/PointsInfo';

//Navegacion
import { useNavigation } from '@react-navigation/native';

//Context
import { useAppContext } from '../contexts/AppContext';

//Types
import { RootStackParamList } from '../types/RootStackParamList';
type BalanceScreenScreenRouteProp = RouteProp<RootStackParamList,'BalanceScreen'>;
type Props = {route: BalanceScreenScreenRouteProp;};

const BalanceScreen = ( { route }: Props ) => {

  const { merchantName } = route.params;

  const { state } = useAppContext();
  const navigation = useNavigation();
  const { wallet: pointsUser } = state;

  const [textInputValue, setTextInputValue] = useState('0');

  const handleCardPress = (amount: number) => {
    const newValue = (parseFloat(textInputValue) || 0) + amount;
    setTextInputValue(newValue.toString());
  };

  const handleContinue = () =>{
    navigation.navigate('TicketScreen', { name: merchantName, amount: parseFloat(textInputValue)});
  }

  const generateCards = () => {
    const availableCards = [
      { amount: 50, points: 500 },
      { amount: 100, points: 1000 },
      { amount: 200, points: 2000 },
      { amount: 500, points: 5000 },
    ];

    return availableCards.filter(card => pointsUser >= card.points);
  };

  const shouldShowCards = pointsUser / 10 >= 50;
  const shouldShowDisclaimer = pointsUser / 10 < 20;

  const renderCard = (card: string | number | any) => (
    <View style={styles.cardContainer} key={card.amount}>
      <TouchableOpacity
        disabled={pointsUser / 10 - parseInt(textInputValue) < card.amount}
        onPress={() => handleCardPress(card.amount)}
        style={[
          styles.touchableContainer,
          {
            backgroundColor:
              pointsUser / 10 - parseInt(textInputValue) < card.amount
                ? '#00000010'
                : '#E0E0FF',
          },
        ]}>
        <Text
          style={[
            styles.touchableText,
            {
              color:
                pointsUser / 10 - parseInt(textInputValue) < card.amount
                  ? '#00000085'
                  : '#1723D3',
            },
          ]}>
          {`$${card.amount}`}
        </Text>
      </TouchableOpacity>
      <Text variant="default-body" style={styles.cardPointsText}> {card.points} puntos</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View
          style={styles.topSection}>
          <PointsInfo
            points={state.wallet}
          />
        </View>
        <View>
          <Text variant="subtitle-medium" style={styles.gridText}>
            Elige o escribe el valor de los puntos que quieres cambiar
          </Text>
          {shouldShowCards && (
            <FlatList
              numColumns={2}
              data={generateCards()}
              renderItem={({ item }) => renderCard(item)}
              keyExtractor={item => item.amount.toString()}
            />
          )}
          <Text variant="subtitle-medium" style={styles.inputText}>
            Otro:
          </Text>
          <TextInput
            variant="numeric"
            placeholder="Monto en pesos"
            value={textInputValue}
            onChangeText={newValue => setTextInputValue(newValue)}
            onValidation={isValid => {
              console.log(isValid);
            }}
            label="Monto en pesos"
          />
          <Text style={styles.alertText}>
            El valor máximo que puedes cambiar es $1,000.00
          </Text>
          {shouldShowDisclaimer && (
            <View style={styles.disclaimerSection}>
              <Disclaimer
                variant="custom"
                text="Recuerda que necesitas tener mínimo $20.00 en puntos para poder cambiarlos con la marca que elegiste"
                backgroundColor="#FFDFBC"
                textColor="black"
                iconColor='#955000'
              />
            </View>
            
          )}
        </View>
        <View
          style={styles.bottomSection}>
          <Button
            disabled={shouldShowDisclaimer && parseInt(textInputValue) < 20}
            variant="primary"
            onPress={() => {
              handleContinue();
            }}
            text="Continuar"
            size="large"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,

    marginHorizontal: 15,
  },
  cardContainer: {
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    paddingHorizontal: 10,
  },
  gridText: {
    fontSize: 18,
    lineHeight: 23,
    paddingBottom: 15,
    paddingTop: 5,
  },
  alertText: {
    fontSize: 14,
    paddingBottom: 5,
    paddingTop: 10,
    paddingHorizontal: 5,
    color: '#00000090',
  },
  inputText: {
    paddingVertical: 15,
    fontSize: 18,
    fontWeight: '400',
  },
  touchableContainer: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    width: '100%',
    margin: 5,
  },
  touchableText: {
    color: '#373764',
    fontSize: 18,
    fontWeight: '600',
    paddingVertical: 2,
  },
  cardPointsText: {
    fontSize: 14,
    color: '#00000075'
  },
  bottomSection: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: 25,
    paddingTop: 25,
    flex: 1,
  },
  topSection: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#00000025',
    paddingBottom: 10,
  },
  disclaimerSection: {
    paddingTop: 15,
  }
});

export default BalanceScreen;
