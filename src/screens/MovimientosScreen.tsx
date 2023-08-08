import React from 'react';
import {SafeAreaView, StyleSheet, FlatList, View} from 'react-native';

//Context
import {useAppContext} from '../contexts/AppContext';

//Types
import {Movement} from '../types/Movements';

//Functions
import {getMonthName} from '../utils/monthName';
import {filterMovementsByMonth} from '../utils/timeUtils';

//Components
import MonthTitle from '../customComponents/MonthTitle';
import MovementItem from '../customComponents/MovimientoComponent';

const MovimientosScreen = () => {
  const {state} = useAppContext();
  const movementsByMonths: {month: number; movements: Movement[]}[] = [];

  //Organize movements
  for (let month = 0; month < 12; month++) {
    const filteredMovements = filterMovementsByMonth(
      state.userGiftHistory,
      month,
    );
    movementsByMonths.push({month, movements: filteredMovements});
  }

  //Filtering movements by month
  const filteredMovementsByMonths = movementsByMonths
    .filter(({movements}) => movements.length > 0)
    .sort((a, b) => b.month - a.month);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={filteredMovementsByMonths}
        keyExtractor={item => item.month.toString()}
        showsVerticalScrollIndicator={false} 
        renderItem={({item}) => (
          <View>
            <MonthTitle title={getMonthName(item.month)} />
            {item.movements.map(movement => (
              <MovementItem
                key={movement.id}
                entity={movement.entity}
                date={movement.date}
                points={movement.points}
                operation={movement.operation}
              />
            ))}
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
  flatList: {
    marginHorizontal: 15,
  },
  itemContainer: {
    paddingVertical: 16,
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
