import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity ,Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import GradientBackground from '../components/GradientBackground';


const Notification = () => {
  const navigation = useNavigation(); // Hook to get the navigation object
  const [selectedTab, setSelectedTab] = useState('alerts');

  return (
    
    <View style={styles.container}>





      <GradientBackground >
        {/**Content here MAAMBONG  */}

     
        <Text>CONTENT HERE MAAMBONG, CHRISTIAN REY!!!!</Text>




      </GradientBackground>

















      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
          <Ionicons
            name="home"
            size={24}
            color={selectedTab === 'home' ? '#FFC107' : '#FFF'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('map')}>
          <Ionicons
            name="map"
            size={24}
            color={selectedTab === 'map' ? '#FFC107' : '#FFF'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('FamilyConnectivity')}>
          <Ionicons
            name="people"
            size={24}
            color={selectedTab === 'family' ? '#FFC107' : '#FFF'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>  navigation.navigate('Notification')}>
          <Ionicons
            name="notifications"
            size={24}
            color={selectedTab === 'alerts' ? '#FFC107' : '#FFF'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons
            name="menu"
            size={24}
            color={selectedTab === 'menu' ? '#FFC107' : '#FFF'}
          />
        </TouchableOpacity>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A2B48',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1A2B48',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
});

export default Notification;
