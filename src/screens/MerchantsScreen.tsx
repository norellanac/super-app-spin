import React, { useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import Text from '../components/Text/Text';
import useFetchMerchantList from '../hooks/useFetchMerchantList';
import Spinner from '../components/atoms/Spinner/Spinner';
import ElementListItem from '../customComponents/ElementListItem';
import MerchantCard from '../customComponents/MerchantCard';

const MerchantsScreen = () => {
  const {
    data: merchantList,
    loading: isLoading,
    error,
  } = useFetchMerchantList();
  useEffect(() => {}, [isLoading]);
  return isLoading ? (
    <Spinner />
  ) : (
    <SafeAreaView style={styles.container}>
      <View style={styles.listConatiner}>
        <Text style={styles.homeText}>
          Elige la marca aliada en la que quieres usar tus puntos
        </Text>
        <FlatList
          style={styles.listRender}
          data={merchantList}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <MerchantCard
              name= {item.name}
              cat= {item.cat}
              id = {item.id}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  listConatiner: {
    marginHorizontal: 15,
  },
  listRender: {
    marginVertical: 15,
  },
  homeText: {
    fontSize: 18,
    fontWeight: '400',
    marginTop: 15,
  },
});

export default MerchantsScreen;
