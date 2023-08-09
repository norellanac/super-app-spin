import React, { useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import Text from '../components/Text/Text';
import HomeIconFigma from '../icons/HomeIconFigma';
import useFetchMerchantList from '../hooks/useFetchMerchantList';
import Spinner from '../components/atoms/Spinner/Spinner';
import ElementListItem from '../customComponents/ElementListItem';
import { useNavigation } from '@react-navigation/native';

const MerchantsScreen = () => {
  const navigation = useNavigation();
  const {
    data: merchantList,
    loading: isLoading,
    error,
  } = useFetchMerchantList();
  useEffect(() => {
    console.log('Hola');
  }, [isLoading]);
  return isLoading ? (
    <Spinner />
  ) : (
    <FlatList
      style={{ marginVertical: 35 }}
      data={merchantList}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <ElementListItem
          title={item.name}
          subtitle="Categoria"
          rightIcon={<Text>{'>'}</Text>}
          leftIcon={require('../assets/MovsImages/oxxomov.png')}
          onPress={() => navigation.navigate('BalanceScreen')}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  centeredContainer: {
    alignItems: 'center',
  },
  homeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
  },
});

export default MerchantsScreen;
