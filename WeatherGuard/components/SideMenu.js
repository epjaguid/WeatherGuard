import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SideMenu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <View style={styles.avatar} />
        <Text style={styles.username}>Maddi</Text>
      </View>

      {/* Menu Items */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          console.log('Navigating to Home');
          navigation.navigate('MainApp', { screen: 'Homepage' }); // Navigate to Homepage
        }}
      >
        <Text style={styles.menuText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          console.log('Navigating to Settings');
          navigation.navigate('MainApp', { screen: 'Settings' }); // Navigate to Settings
        }}
      >
        <Text style={styles.menuText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          console.log('Navigating to Opening');
          navigation.navigate('Auth', { screen: 'Opening' }); // Navigate to Opening screen in AuthStack
        }}
      >
        <Text style={styles.menuText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#091A3F',
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFF',
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  menuText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default SideMenu;
