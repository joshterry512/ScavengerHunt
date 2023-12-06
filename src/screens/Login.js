import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TextInput, Alert} from 'react-native';
import CustomButton from '../utils/CustomButton';
import {useDispatch} from 'react-redux';
import {setName} from '../redux/actions';

export default function Login({navigation}) {
  const dispatch = useDispatch();
  const [name, setNameValue] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    if (!name.trim()) {
      Alert.alert('Error', 'Please enter your name.');
      return;
    }

    if (!password.trim()) {
      Alert.alert('Error', 'Please enter your password.');
      return;
    }
    navigation.navigate('Home');
  };

  useEffect(() => {
    // createTable();
    // getData();
    // createChannels();
  }, []);

  return (
    <View style={styles.body}>
      <Text style={styles.text} />
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={value => {
          dispatch(setName(value));
          setNameValue(value);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Password"
        value={password}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true} // This masks the input for a password
      />
      <CustomButton
        title="Login"
        color="#1eb900"
        onPressFunction={handleLoginPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0080ff',
  },
  logo: {
    width: 150,
    height: 150,
    margin: 20,
  },
  text: {
    fontSize: 30,
    color: '#ffffff',
    marginBottom: 100,
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
});
