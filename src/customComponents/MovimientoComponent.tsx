import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Text from '../components/Text/Text';
import { useNavigation } from '@react-navigation/native';

//Types
import { MovementItemProps } from '../types/MovementItem';

//Utils
import { formatDate } from '../utils/movementDate';
import { getImageSource } from '../utils/movementImage';

const MovementItem = ({ entity, date, points, operation, transactionNo }: MovementItemProps) => {

  const navigation = useNavigation();

  const imageSource = getImageSource(entity);
  const pointsColor = operation === 'earned' ? 'black' : 'red';

  const handlePress = () => {
    navigation.navigate('DetallesScreen', { entity, date, points, operation, transactionNo, imageSource });
  };

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={handlePress}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.entityImage} resizeMode="contain" />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.entity}>{entity}</Text>
        <Text style={styles.date}>{formatDate(date)}</Text>
      </View>
      <View style={styles.pointsContainer}>
        <Text style={[styles.points, { color: pointsColor }]}>
        {operation === 'earned' ? '+' : ''} {points} 
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#00000025',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 3,
    paddingHorizontal: 10,
  },
  pointsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  entityImage: {
    width: 40,
    height: 40,
  },
  entity: {
    fontSize: 16,
    fontWeight: '600',
  },
  date: {
    fontSize: 14,
    color: 'gray',
    textTransform: 'capitalize',
    paddingTop: 3,
  },
  points: {
    fontSize: 14,
    fontWeight: '500'
  },
});

export default MovementItem;

