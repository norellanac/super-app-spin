import React, { useMemo } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Text from '../components/Text/Text';
import { useNavigation } from '@react-navigation/native';

//Utils
import { getImageSource } from '../utils/movementImage';

//Icons
import NavigationArrowRight from '../icons/NavigationArrowRight';
//Types
import { MercahntCardProps } from '../types/MercahntCardProps';

const MerchantCard = ({ name, cat, id }: MercahntCardProps) => {
  const navigation = useNavigation();
  const imageSource =  getImageSource(name);

  const handlePress = () => {
    navigation.navigate('BalanceScreen' as never);
  };

  return (
    <TouchableOpacity
      style={styles.touchableContainer}
      onPress={handlePress}
      activeOpacity={0.5}
    >
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={imageSource}
            style={styles.catImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.cat}>{cat}</Text>
        </View>
        <View style={styles.pointsContainer}>
          <NavigationArrowRight/>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableContainer: {
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#00000090',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginHorizontal: 5,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 16,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 1,
    paddingHorizontal: 10,
    gap: 5,
  },
  pointsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  catImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  cat: {
    fontSize: 15,
    fontWeight: '400',
    color: '#00000085',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  points: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default MerchantCard;
