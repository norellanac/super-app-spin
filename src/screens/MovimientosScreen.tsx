import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, View } from 'react-native';
import Spinner from '../components/atoms/Spinner/Spinner';
import useFetch from '../hooks/useFetch';
import { useAppContext } from '../contexts/AppContext';

const MovimientosScreen = () => {
  const { data, loading, error } = useFetch('http://0.0.0.0:3001/history');
  const { state } = useAppContext();

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Spinner size={'medium'} label={'Cargando Movimiento...'} />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Error al cargar los movimientos</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={state.userGiftHistory}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.entity}>{item.entity}</Text>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.points}>{item.points} puntos</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  entity: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    color: 'gray',
  },
  points: {
    fontSize: 16,
    color: 'green',
  },
});

export default MovimientosScreen;
