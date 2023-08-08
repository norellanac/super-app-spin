import React from "react";
import Text from "../components/Text/Text";
import { StyleSheet } from "react-native";

interface MonthTitleProps {
  title: string;
}

const BottomTabText = ({ title }: MonthTitleProps) => {
  return (
    <Text
      variant="subtitle-semibold"
      style={[
        bottomTabStyle.label,
      ]}
    >
      {title}
    </Text>
  );
};

const bottomTabStyle = StyleSheet.create({
  label: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default BottomTabText;
