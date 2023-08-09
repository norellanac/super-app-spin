import { StyleSheet, FlatList, View } from "react-native";
import MonthTitle from '../customComponents/MonthTitle';
import MovementItem from '../customComponents/MovimientoComponent';
import { getMonthName } from "../utils/monthName";
import { Movement } from "../types/Movements";
import { TabContentProps } from "../types/TabProps";

export const TabContent = ({ data }: TabContentProps) => (
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
              transactionNo={movement.transactionNo}
            />
          ))}
        </View>
      )}
    />
  );

  const styles = StyleSheet.create({
    flatList: {
        marginHorizontal: 15,
      },
  })