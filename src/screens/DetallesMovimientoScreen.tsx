import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from '../components/Text/Text';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/RootStackParamList';

type DetalleMovimientoScreenRouteProp = RouteProp<
  RootStackParamList,
  'DetallesScreen'
>;

type Props = {
    route: DetalleMovimientoScreenRouteProp;
  };

const DetallesScreen = ({ route }: Props) => {
  const { entity, date, points, operation, transactionNo, imageSource } = route.params;

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.entityImage} resizeMode="contain" />
      <Text style={styles.entity}>{entity}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.points}>{points}</Text>
      <Text style={styles.operation}>{operation}</Text>
      <Text style={styles.operation}>{transactionNo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  entity: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  points: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 5,
  },
  operation: {
    fontSize: 16,
    color: 'black',
  },
  entityImage: {
    width: 40,
    height: 40,
  },
});

export default DetallesScreen;
