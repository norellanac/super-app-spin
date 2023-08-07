import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from '../components/Text/Text';
import Tag from '../components/atoms/Tag';

interface PointsInfoProps {
  points: number;
}

const PointsInfo = ({ points }: PointsInfoProps) => {

    const currentPoints = points;
    const value = currentPoints/100;

  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <Text variant="subtitle-semibold" style={styles.subtitle}>
          Tienes
        </Text>
        <Text variant="jumbo-two" style={styles.points}>
          {points.toLocaleString()} puntos
        </Text>
        <View>
          <Tag
            text={`Valen ${value}`}
            variant="points"
            leftIcon={require('../assets/points.png')}
            size="large"
          />
        </View>
      </View>
      <View style={styles.rightContent}>
            <Image
              source={require('../assets/Premia1.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  leftContent: {
    flex: 0.65,
    marginRight: 5,
  },
  subtitle: {
    fontWeight: '500',
    fontSize: 18,
  },
  points: {
    marginBottom: 10,
    fontWeight: '800',
  },
  rightContent: {
    flex: 0.35,
    alignItems: 'flex-end',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default PointsInfo;
