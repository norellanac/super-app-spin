import React from 'react';
import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/RootStackParamList';

//Components
import Text from '../components/Text/Text';
import BottomSheet from '../components/atoms/BottomSheet';
import Button from '../components/Button/Button';
import ElementListItem from '../customComponents/ElementListItem';
import TicketIcon from '../icons/TicketIcon';
import Modal from '../components/atoms/Modal';

//Utils
import { formattedMontoTotalTicket } from '../utils/formatMoney';
import { completeDate } from '../utils/completeDate';
import { detailsDate } from '../utils/detailsDate';
import { getImageSource } from '../utils/movementImage';

//Types
type TicketScreenScreenRouteProp = RouteProp<
  RootStackParamList,
  'TicketScreen'
>;
type Props = { route: TicketScreenScreenRouteProp };


const TicketScreen = ({ route }: Props) => {

  //Data
  const { name, amount} = route.params;
  const imageSRC = getImageSource(name);
  const today = new Date;

  const navigation = useNavigation();
  const data = [
    { id: 1, description: 'Copia tu certificado de regalo de Spin Premia' },
    { id: 2, description: 'Ingresa al sitio web' },
    { id: 3, description: 'Elije tu premio a canjear' },
    { id: 4, description: 'Antes de terminar tu compra, pega o escribe el certificado de regalo al elegir tu método de pago'},
  ];
  return (
    <SafeAreaView>
      <Image source={require('../assets/spinPlus/Ticket.png')} style={styles.backgroundImage} />
      <ScrollView>
        <View style={{marginHorizontal: 5}}>
          <Text variant="title-two-semibold" style={styles.title}>
            Detalles del movimiento
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={imageSRC}
            style={styles.entityImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.entityData}>
          <Text style={styles.entity}>{name}</Text>
          <Text style={styles.entityText}>Toca el ícono para copiar el certificado de regalo o escríbelo desde la app o página web de Volaris</Text>
          <View style={styles.code}>
            <View style={styles.infoContainer}>
              <Text variant='caption-medium' style={styles.codeTitle}> Certificado de regalo</Text>
              <Text variant='caption-medium' style={styles.codeDescription}>42738499092812000</Text>
            </View>
            <View style={styles.iconContainer}>
              <TicketIcon/>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: '#ffffff'}}>
          <View style={{flex: 1, alignItems: 'center', alignContent: 'center', backgroundColor: '#ffffff'}}>
            <Text style={{color: 'blue', fontWeight: '600', fontSize: 15, paddingVertical: 20}} onPress={() => {
              BottomSheet.show({
                title: '¿Cómo usar un certificado de regalo?',
                children: (
                  <FlatList
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
                headerBackgroundColor: '#ffffff',
                bodyBackgroundColor: '#ffffff',
                contentStyle: {
                  paddingHorizontal: 50,
                },
              });
            }}
            >¿Cómo usar mi certificado de regalo?</Text>
            <BottomSheet.Component />
          </View>
          <View style={{ marginHorizontal: 15 }}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Puntos cambiados:</Text>
              <Text style={styles.infoValue}>{amount}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Valen:</Text>
              <Text style={styles.infoValue}>{formattedMontoTotalTicket(amount)}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Fecha:</Text>
              <Text style={styles.infoValue}>{completeDate(today)}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Válido hasta el:</Text>
              <Text style={styles.infoValue}>{detailsDate(today.setMonth(today.getMonth() + 2))}</Text>
            </View>
          </View>
          <View style={styles.infoSectionBottom}>
            <Text style={styles.transactionNoHeader}>Número de transacción</Text>
            <Text style={styles.transactionNo}>5dced89c-2b6e-4a1c-a715-c19b0a51</Text>
          </View>        
          <View style={{ marginHorizontal: 15, gap: 8, paddingBottom: 25}}>
            <Button
              variant='primary'
              onPress={() => {
                Alert.alert(
                  'Se guardó tu ticket',
                  'Puedes verlo en tu historial de movimientos',
                );
              }}
              text={'Usar certificado de regalo'}
            />
            <Modal.Component />
            <Button
              variant='secondary'
              text="Guardar para otro momento"
              onPress={() => {
                Modal.show({
                  title: 'Se guardó tu ticket',
                  variant: 'content',
                  description: 'Puedes verlo en tu historial de movimientos',
                });
              }}
            />
          </View>  
        </View>
        
      </ScrollView>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'stretch'
  },
  imageContainer:{
    alignItems: 'center', 
    zIndex: 2,
  },
  entityImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 0,
  },
  entityData: {
    backgroundColor: '#ffffff', 
    marginHorizontal: 15, 
    padding: 15, 
    alignItems: 'center',
    borderRadius: 8,
    marginTop: -35,
    shadowColor: '#00000090',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginBottom: 20,
  },
  entity: {
    paddingTop: 30,
    fontSize: 23,
    fontWeight: '500',
  },
  code: {
    backgroundColor: '#00000009',
    padding: 10,
    borderRadius: 5, 
    flexDirection: 'row',
  },
  infoContainer: {
    flex: 0.8,
    gap: 2
  },
  iconContainer: {
    flex: 0.2,
    alignItems: 'flex-end', 
    ustifyContent: 'center', 
    marginTop: 9
  },
  codeTitle:{
    fontSize: 13,
    fontWeight: '400',
  },
  codeDescription:{
    fontSize: 18,
    fontWeight: '600',
  },
  entityText: {
    fontSize: 15,
    fontWeight: '400',
    paddingVertical: 15,
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
  infoSection: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  infoSectionBottom: {
    marginVertical: 20,
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
    fontSize: 17,
    color: '#000000',
    fontWeight: '400',
  },
  infoValue: {
    fontSize: 17,
    color: '#000000',
    fontWeight: '600',
  },
  title: {
    marginHorizontal: 15,
    marginTop: 10,
    fontSize: 22,
    fontWeight: '500',
    color: '#ffffff',
    marginBottom: 25,
  },
});

export default TicketScreen;
