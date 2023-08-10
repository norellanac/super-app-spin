import React from 'react';
import { Image, StyleSheet, View, SafeAreaView } from 'react-native';
import Text from '../components/Text/Text';
import { useAppContext } from '../contexts/AppContext';
import Tag from '../components/atoms/Tag';
import ElementListItem from '../customComponents/ElementListItem';
import Modal from '../components/atoms/Modal';

const CuentaScreen = () => {
  const { state, dispatch } = useAppContext();

  const handleLogOff = () => {
    Modal.hide();
    dispatch({
      type: 'LOGOUT',
    });
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View>
        <Text variant="title-two-semibold" style={styles.title}>
          Cuenta
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.leftContent}>
          <Text variant="jumbo-two" style={styles.name}>
            Maria Florencia
          </Text>
          <View>
            <Tag
              text={`${state.wallet} puntos`}
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
      <View style={styles.otherSection}>
        <Text variant="title-one-medium" style={styles.subtitle}>
          Otras acciones
        </Text>
        <ElementListItem
          title="Cierra sesión"
          leftIcon={require('../assets/logout.png')}
          onPress={() => {
            Modal.show({
              title: '¿Quieres cerrar tu sesión?',
              variant: 'two-button',
              description: 'Recuerda que puedes volver a entrar a la app cuando quieras',
              firstButtonProps: {
                variant: 'primary',
                text: 'Sí, cerrar sesión',
                onPress: () => handleLogOff(),
                enableCloseOnPress: true,
              },
              secondButtonProps: {
                variant: 'secondary',
                text: 'En otro momento',
                onPress: () => Modal.hide(),
              },
            });
          }}
        />
      </View>

      <Modal.Component />

      <View style={styles.versionBlock}>
        <Text style={styles.text}>Versión: 1.203.430.983</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 35,
    paddingHorizontal: 6,
    marginHorizontal: 15,
  },
  otherSection:{
    marginHorizontal: 15,
  },
  leftContent: {
    flex: 0.65,
    marginRight: 5,
  },
  subtitle: {
    fontWeight: '500',
    fontSize: 20,
  },
  name: {
    marginBottom: 10,
    fontSize: 30,
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
  title: {
    marginHorizontal: 15,
    marginTop: 10,
    fontSize: 22,
    fontWeight: '500',
  },
  versionBlock: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 12,
    color: '#888',
  },
});

export default CuentaScreen;
