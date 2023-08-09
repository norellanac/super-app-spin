import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Image } from 'react-native';
import Text from '../components/Text/Text';
import TextInput from '../components/atoms/TextInput';
import { useAppContext } from '../contexts/AppContext';
import Button from '../components/Button/Button';

const LoginScreen = () => {

  const { dispatch } = useAppContext(); // Use dispatch from AppContext
  const [phoneNumber, setPhoneNumber] = useState('');
  const handleLogin = () => {
    // Dispatch actions to update user and authentication state
    dispatch({
      type: 'SET_USER',
      payload: { user: { phoneNumber: Number(phoneNumber) }, isAuth: true },
    }); // Update user info in AppContext
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Image source={require('../assets/spinPlus/Splash2x.jpg')} style={styles.backgroundImage} />
      <View style={styles.infoContainer}>
        <TextInput
            variant='numeric'
            label='Número de celular'
            placeholder="Número de celular"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <Text style={styles.infoText}>Al continuar reconoces ser mayor de edad, así como haber leído y aceptado nuestros Términos y Condiciones y nuestro Aviso de privacidad</Text>
          <Button
            variant="primary"
            onPress={handleLogin}
            text="Comenzar"
            size="medium"
          />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'stretch'
  },
  safeContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  infoContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '35%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 25
  },
  infoText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#00000090',
    paddingVertical: 15,
    paddingHorizontal: 10,
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
    marginBottom: 25,
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