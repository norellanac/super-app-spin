import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Image, StatusBar } from 'react-native';

//FEMSA Components
import Text from '../components/Text/Text';
import TextInput from '../components/atoms/TextInput';
import Button from '../components/Button/Button';

//Context
import { useAppContext } from '../contexts/AppContext';


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
      <StatusBar barStyle={'light-content'}/>
      <Image source={require('../assets/spinPlus/Splash2x.jpg')} style={styles.backgroundImage} />
      <View style={styles.centerContainer}>
        <Image source={require('../assets/spinPlus/SpinPlusLogo.png')} style={styles.logoImage} />
        <Text style={styles.logoText}>Ahora OXXO a un click de distancia</Text>
      </View>
      <View style={styles.infoContainer}>
        <TextInput
            variant='numeric'
            label='🇲🇽 Número de celular'
            maxLength={10}
            placeholder="🇲🇽 Número de celular"
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
    height: '40%',
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
  centerContainer: {
    flex: 1,
    marginHorizontal: 25,
    marginTop: 100,
  },
  logoImage: {
    width: 115,
    height: 100,
    marginBottom: 10,
    resizeMode: 'contain'
  },
  logoText: {
    fontSize: 45,
    fontWeight: '600',
    color: '#fff'
  },
});