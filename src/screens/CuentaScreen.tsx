import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Text from '../components/Text/Text';
import { useAppContext } from '../contexts/AppContext';
import Tag from '../components/atoms/Tag';
import ElementListItem from '../customComponents/ElementListItem';

const CuentaScreen = () => {
  const { state, dispatch } = useAppContext();
  console.log(state);
  const handleLogOff = () => {
    dispatch({
      type: 'LOGOUT',
    });
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.leftContent}>
          <Text variant="jumbo-two" style={styles.points}>
            Maria Florencia
          </Text>
          <View>
            <Tag
              text={`${1200} puntos`}
              variant="points"
              leftIcon={require('../assets/points.png')}
              size="large"
            />
          </View>
        </View>
        <View style={styles.rightContent}>
          <Image
            source={require('../assets/spinPlus/fanGlove.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>

      <Text variant="title-one-medium" style={{ margin: 10 }}>
        Otras acciones{' '}
      </Text>
      <ElementListItem
        title="Cierra sesión"
        leftIcon={require('../assets/logout.png')}
        onPress={handleLogOff}
      />
      <View style={styles.versionBlock}>
        <Text style={styles.text}>Versión: 1.203.430.983</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 6,
  },
  leftContent: {
    flex: 0.65,
    marginRight: 5,
  },
  subtitle: {
    fontWeight: '500',
    fontSize: 18,
  },
  points: {
    marginBottom: 10,
    fontWeight: '800',
  },
  rightContent: {
    flex: 0.35,
    alignItems: 'flex-end',
  },
  image: {
    width: 100,
    height: 100,
  },
  versionBlock: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#f0f0f0', // Optional background color
  },
  text: {
    fontSize: 12,
    color: '#888',
  },
});

export default CuentaScreen;
