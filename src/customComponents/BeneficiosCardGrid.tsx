import React from 'react';
import {Image, StyleSheet} from 'react-native';
import StackedCardGrid from '../components/GridView/StackedCardGrid';

const BeneficiosCardGrid = () => {
  const changePoints = require('../assets/change-points.png');
  const checkHistory = require('../assets/check-history.png');

  const handleCardPress = (title: string) => {
    console.log('Se hizo clic en:', title);
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
          onPress: () => handleCardPress('Cambia tus puntos'),
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
