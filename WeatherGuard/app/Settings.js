import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import GradientBackground from '../components/GradientBackground';

const Settings = ({ navigation }) => {
  return (
    <GradientBackground>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <Ionicons name="search" size={20} color="#fff" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor="#999"
        />
      </View>

      {/* Menu Items */}
      <ScrollView style={styles.container}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Account')}
        >
          <View style={styles.menuLeft}>
            <Ionicons name="person" size={15} color="#fff" style={styles.menuIcon} />
            <Text style={styles.menuText}>Account</Text>
          </View>
          <Entypo name="chevron-right" size={24} color="#fff" style={styles.chevron} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('PrivacyAndSecurity')}
        >
          <View style={styles.menuLeft}>
            <Ionicons name="lock-closed" size={15} color="#fff" style={styles.menuIcon} />
            <Text style={styles.menuText}>Privacy and Security</Text>
          </View>
          <Entypo name="chevron-right" size={24} color="#fff" style={styles.chevron} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('About')}
        >
          <View style={styles.menuLeft}>
            <MaterialIcons name="help-outline" size={15} color="#fff" style={styles.menuIcon} />
            <Text style={styles.menuText}>About</Text>
          </View>
          <Entypo name="chevron-right" size={24} color="#fff" style={styles.chevron} />
        </TouchableOpacity>
      </ScrollView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#9C9CA7',
    borderRadius: 8,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    marginBottom: 15,
    height: 40,
  },
  searchIcon: {
    marginRight: 10, // Creates spacing between icon and text input
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: 50, // Spacing between icon and text
  },
  menuText: {
    fontSize: 16,
    color: '#fff',
  },
  chevron: {
    marginLeft: 50, // Adjust spacing from text (if needed)
  },
});

export default Settings;
