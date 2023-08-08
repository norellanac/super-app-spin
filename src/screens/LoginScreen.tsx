import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useAppContext } from '../contexts/AppContext';
const LoginScreen: React.FC = () => {
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
    <View>
      <Text>Login Screen</Text>
      <TextInput
        placeholder="Enter Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
