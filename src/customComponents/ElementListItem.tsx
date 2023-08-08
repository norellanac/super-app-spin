import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface ElementListItemProps {
  title: string;
  subtitle?: string;
  leftIcon?: any; // Change the type to the appropriate image/icon type
  rightIcon?: any; // Change the type to the appropriate image/icon type
  onPress?: () => void;
}

const ElementListItem: React.FC<ElementListItemProps> = ({ title, subtitle, leftIcon, rightIcon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {leftIcon && (
        <View style={styles.left}>
          <Image source={leftIcon} style={styles.icon} />
        </View>
      )}
      <View style={styles.middle}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
      {rightIcon && (
        <View style={styles.right}>
          <>{rightIcon}</>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  left: {
    flex: 1,
    alignItems: 'flex-start',
  },
  middle: {
    flex: 3,
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#888',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
  },
});

export default ElementListItem;
