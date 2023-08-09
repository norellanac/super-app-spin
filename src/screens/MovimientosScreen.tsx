import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, FlatList, View} from 'react-native';

//Tabs
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

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

    const [index, setIndex] = useState(0);

    const routes = [
      { key: 'all', title: 'Todos' },
      { key: 'earned', title: 'Ganados' },
      { key: 'spent', title: 'Usados' },
    ];

    const renderScene = SceneMap({
      all: () => <TabContent data={filteredMovementsByMonths} />,
      earned: () => (
        <TabContent
          data={filteredMovementsByMonths.map(item => ({
            month: item.month,
            movements: item.movements.filter(movement => movement.operation === 'earned'),
          }))}
        />
      ),
      spent: () => (
        <TabContent
          data={filteredMovementsByMonths.map(item => ({
            month: item.month,
            movements: item.movements.filter(movement => movement.operation === 'spent'),
          }))}
        />
      ),
    });

  return (
    <SafeAreaView style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={styles.tabIndicator}
            style={styles.tabBar}
            labelStyle={styles.tabLabel}
          />
        )}
      />
    </SafeAreaView>
  );
};

const TabContent = ({ data }: any) => (
  <FlatList
    style={styles.flatList}
    showsVerticalScrollIndicator={false}
    data={data}
    keyExtractor={item => item.month.toString()}
    renderItem={({ item }) => (
      <View>
        <MonthTitle title={getMonthName(item.month)} />
        {item.movements.map((movement: Movement) => (
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
);

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
  tabIndicator: {
    backgroundColor: '#1723D3',

  },
  tabBar: {
    backgroundColor: 'white',
  },
  tabLabel: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 14,
    fontWeight: '600'
  },
});

export default MovimientosScreen;
