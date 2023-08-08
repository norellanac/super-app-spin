import React from "react";
import Text from "../components/Text/Text";
import { StyleSheet } from "react-native";

interface BottomTabTextProps {
  title: string;
  isFocused: boolean;
}

const BottomTabText = ({ title, isFocused }: BottomTabTextProps) => {
  return (
    <Text
      variant="subtitle-semibold"
      style={[
        bottomTabStyle.label,
        isFocused ? { fontWeight: '600' } : null,
        isFocused ? { color: '#1723D3' } : null,
      ]}
    >
      {title}
    </Text>
  );
};

const bottomTabStyle = StyleSheet.create({
  label: {
    fontSize: 13,
    fontWeight: '400',
    color: '#000'
  },
});

export default BottomTabText;
