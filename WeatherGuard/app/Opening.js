import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GradientBackground from '../components/GradientBackground';
import { useNavigation } from '@react-navigation/native';

const Opening = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate('Login'); // This matches the route name in the navigator
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <Image
          source={require('../assets/images/small_logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#F9A825',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 19,
    color: '#ffffff',
  },
});

export default Opening;
