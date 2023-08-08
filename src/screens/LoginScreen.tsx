import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {login} from '../store/authSlice';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleLogin = () => {
    dispatch(login(phoneNumber));
  };

  return (
    <View>
      <Text>Enter Phone Number:</Text>
      <TextInput value={phoneNumber} onChangeText={setPhoneNumber} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
