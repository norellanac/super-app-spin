import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from '../components/Text/Text';
import { RouteProp } from '@react-navigation/native';

//Types
import { RootStackParamList } from '../types/RootStackParamList';

//Utils
import { detailsDate } from '../utils/detailsDate';

// Definir los tipos de las propiedades de la ruta
type DetalleMovimientoScreenRouteProp = RouteProp<
  RootStackParamList,
  'DetallesScreen'
>;

type Props = {
  route: DetalleMovimientoScreenRouteProp;
};

// Componente principal
const DetallesScreen = ({ route }: Props) => {

  // Extraer los datos de la ruta
  const { entity, date, points, operation, transactionNo, imageSource } =
    route.params;

  // Determinar colores y estado
  const pointsColor = operation === 'earned' ? 'black' : 'red';
  const plusColor = operation === 'earned' ? '#1723D3' : 'red';
  const status = operation === 'earned' ? 'ganaste' : 'gastaste';

  // Calcular el monto total
  const montoTotal = (points / 10).toFixed(2);

  // Formatear el monto total como moneda
  const formattedMontoTotal = parseFloat(montoTotal).toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Formatear la fecha
  const formattedDate = detailsDate(date);

  return (
    <View style={styles.container}>
      <Image
        source={imageSource}
        style={styles.entityImage}
        resizeMode="contain"
      />
      <Text style={styles.entity}>{entity}</Text>
      <View style={{ marginHorizontal: 25 }}>
        <View style={styles.rewardBox}>
          <Text style={styles.rewardText}>En esta compra {status}:</Text>
        </View>
      </View>
      <View style={styles.pointsContainer}>
        <Text style={[styles.plus, { color: plusColor }]}>
          {operation === 'earned' ? '+' : ''}
        </Text>
        <Text style={[styles.points, { color: pointsColor }]}> {points} </Text>
      </View>
      <View style={styles.infoSection}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Monto total:</Text>
          <Text style={styles.infoValue}>{formattedMontoTotal}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Fecha:</Text>
          <Text style={styles.infoValue}>{formattedDate}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Úsalos desde el:</Text>
          <Text style={styles.infoValue}>{formattedDate}</Text>
        </View>
      </View>
      <View style={styles.infoSectionBottom}>
        <Text style={styles.transactionNoHeader}>Número de transacción</Text>
        <Text style={styles.transactionNo}>{transactionNo}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  entity: {
    fontSize: 25,
    fontWeight: '500',
    paddingVertical: 10,
  },
  date: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  points: {
    fontSize: 42,
    fontWeight: '500',
    color: 'green',
    marginBottom: 5,
  },
  plus: {
    fontSize: 25,
    fontWeight: '800',
    marginBottom: 5,
    marginRight: -5,
  },
  transactionNo: {
    fontSize: 15,
    color: '#00000080',
    marginTop: 10,
  },
  transactionNoHeader: {
    fontSize: 16,
    color: '#000000',
    marginTop: 20,
  },
  entityImage: {
    marginTop: 30,
    width: 80,
    height: 80,
  },
  infoSection: {
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  infoSectionBottom: {
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#00000025',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  infoLabel: {
    fontSize: 16,
    color: 'black',
    fontWeight: '300',
  },
  infoValue: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
  },
  rewardBox: {
    backgroundColor: '#F5F5F7',
    borderRadius: 100,
    paddingVertical: 14,
    paddingHorizontal: 50,
    marginVertical: 5,
  },
  rewardText: {
    fontSize: 17,
    color: '#000000',
    fontWeight: '400',
    textAlign: 'center',
  },
});

export default DetallesScreen;
