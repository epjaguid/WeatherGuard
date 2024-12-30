// screens/RegisterScreen.js
import React from 'react';
import { TextInput, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import GradientBackground from '../components/GradientBackground';



const Signup = ({ navigation }) => {
  return (
    <GradientBackground>
     
      <TextInput style={styles.input} placeholder="Username" placeholderTextColor='rgba(255, 255, 255, 0.2)' />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor='rgba(255, 255, 255, 0.2)' />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor='rgba(255, 255, 255, 0.2)' secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.buttonText}>Register</Text>
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
    backgroundColor: 'rgba(255, 255,255, 0.2)',
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
});

export default Signup;