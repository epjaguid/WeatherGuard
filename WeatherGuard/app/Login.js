// screens/LoginScreen.js
import React from 'react';
import { View, TextInput, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import GradientBackground from '../components/GradientBackground';



const LoginScreen = ({ navigation }) => {
  return (
    <GradientBackground>
      <Image source={require('../assets/images/small_logo.png')} style={styles.logo} />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor='rgba(255, 255, 255, 0.2)' />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor='rgba(255, 255, 255, 0.2)' secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainApp')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor:'rgba(255, 255, 255, 0.2)',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#FCB316',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  link: {
    color: '#FCB316',
    marginTop: 10,
  },
});

export default LoginScreen;
