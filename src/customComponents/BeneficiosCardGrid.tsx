import React from 'react';
import {Image, StyleSheet} from 'react-native';
import StackedCardGrid from '../components/GridView/StackedCardGrid';
import { useNavigation } from '@react-navigation/native';

const BeneficiosCardGrid = () => {

  const navigation = useNavigation();

  const changePoints = require('../assets/change-points.png');
  const checkHistory = require('../assets/check-history.png');

  const handleCardPress = (title: string) => {
    if (title === 'Consulta tu historial') {
      navigation.navigate('MovimientosScreen'as never);
    } else if (title === 'Cambia tus puntos') {
      navigation.navigate('CambiarPuntosScreen'as never);
    }
  };

  return (
    <StackedCardGrid
      data={[
        {
          title: 'Consulta tu historial',
          icon: <Image source={checkHistory} style={styles.imageGrid} />,
          onPress: () => handleCardPress('Consulta tu historial'),
        },
        {
          title: 'Cambia tus puntos',
          icon: <Image source={changePoints} style={styles.imageGrid} />,
          onPress: () => navigation.navigate('exchangeScreen'),
        },
      ]}
      titlesSize="small"
      numberOfColumns={2}
      containerStyle={{marginTop: 25, gap: 15}}
    />
  );
};

const styles = StyleSheet.create({
  imageGrid: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
    marginTop: 15,
  },
});

export default BeneficiosCardGrid;
