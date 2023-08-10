import React from 'react';
import { Alert, FlatList, Image, SafeAreaView, StyleSheet, View } from 'react-native';
import Text from '../components/Text/Text';
import HomeIconFigma from '../icons/HomeIconFigma';
import BottomSheet from '../components/atoms/BottomSheet';
import Button from '../components/Button/Button';
import ElementListItem from '../customComponents/ElementListItem';
import { useNavigation } from '@react-navigation/native';

const TicketScreen = () => {
  const navigation = useNavigation();
  const data = [
    { id: 1, description: 'Copia tu certificado de regalo de Spin Premia' },
    { id: 2, description: 'Ingresa al sitio web' },
    { id: 3, description: 'Elije tu premio a canjear' },
    {
      id: 4,
      description:
        'Antes de terminar tu compra, pega o escribe el certificado de regalo al elegir tu método de pago',
    },
  ];
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require('../assets/MovsImages/oxxomov.png')}
          style={styles.entityImage}
          resizeMode="contain"
        />
        <Text style={styles.entity}>{'entity'}</Text>
        <View style={{ marginHorizontal: 25 }}>
          <View style={styles.rewardBox}>
            <Text style={styles.rewardText}>En esta compra {'status'}:</Text>
          </View>
        </View>
        <View style={styles.pointsContainer}>
          <Text style={[styles.plus, { color: 'blue' }]}>
            {'operation' === 'earned' ? '+' : ''}
          </Text>
          <Text style={[styles.points, { color: 'blue' }]}> {'points'} </Text>
        </View>
        <View style={styles.infoSection}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Monto total:</Text>
            <Text style={styles.infoValue}>{'formattedMontoTotal'}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Fecha:</Text>
            <Text style={styles.infoValue}>{'formattedDate'}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Úsalos desde el:</Text>
            <Text style={styles.infoValue}>{'formattedDate'}</Text>
          </View>
        </View>
        <View style={styles.infoSectionBottom}>
          <Text style={styles.transactionNoHeader}>Número de transacción</Text>
          <Text style={styles.transactionNo}>{'transactionNo'}</Text>
        </View>
      </View>
      <BottomSheet.Component />

      <Button
        onPress={() => {
          BottomSheet.show({
            title: '¿Cómo usar un certificado de regalo?',
            children: (
              <FlatList
                style={{ marginVertical: 35 }}
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                  <ElementListItem
                    title={`${item.id} . ${item.description}`}
                    onPress={() =>
                      navigation.navigate('BalanceScreen' as never)
                    }
                  />
                )}
              />
            ),
            headerBackgroundColor: '#cccccc',
            bodyBackgroundColor: '#cccccc',
            contentStyle: {
              paddingHorizontal: 50,
            },
          });
        }}
        text={'Usar certificado de regalo'}
      />
      <Button
        variant='secondary'
        onPress={() => {
          Alert.alert(
            'Se guardó tu ticket',
            'Puedes verlo en tu historial de movimientos',
          );
        }}
        text={'Guardar para otro momento'}
      />
    </>
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

export default TicketScreen;
