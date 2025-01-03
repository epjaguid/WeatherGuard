import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GradientBackground from '../components/GradientBackground';

const Homepage = ({ navigation }) => {
  const scrollRef = useRef(null);
  const [selectedTab, setSelectedTab] = useState('home');

  const scrollHorizontal = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        x: direction === 'left' ? -100 : 100,
        animated: true,
      });
    }
  };

  return (
    <GradientBackground>
      {/* Top Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/small_logo.png')} // Add your logo file to the assets folder
          style={styles.logo}
        />
      </View>

      {/* Location Section */}
      <View style={styles.header}>
        <Text style={styles.locationText}>Carmen,</Text>
        <Text style={styles.subLocationText}>Cagayan de Oro</Text>
      </View>

      {/* Weather Icon and Temperature */}
      <View style={styles.weatherSection}>
        <Ionicons name="sunny" size={100} color="yellow" />
        <Text style={styles.temperatureText}>34°</Text>
        <Text style={styles.weatherConditionText}>Partly Cloudy</Text>
        <Text style={styles.dateTimeText}>Thursday 24 • 05:16 PM</Text>
      </View>

      {/* Scrollable Weather Forecast */}
      <View style={styles.forecastSection}>
        {/* Left Arrow */}
        <TouchableOpacity onPress={() => scrollHorizontal('left')}>
          <Ionicons name="chevron-back" size={24} color="#FFF" />
        </TouchableOpacity>

        {/* Scrollable Weather Days */}
        <ScrollView
          horizontal
          ref={scrollRef}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}>
          {Array.from({ length: 7 }).map((_, index) => (
            <View key={index} style={styles.dayContainer}>
              <Text style={styles.dayText}>
                {['Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed'][index]}
              </Text>
              <Ionicons
                name={index % 2 === 0 ? 'partly-sunny' : 'rainy'}
                size={24}
                color="white"
              />
              <Text style={styles.tempText}>
                {index % 2 === 0 ? '34°' : '32°'}
              </Text>
            </View>
          ))}
        </ScrollView>

        {/* Right Arrow */}
        <TouchableOpacity onPress={() => scrollHorizontal('right')}>
          <Ionicons name="chevron-forward" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
          <Ionicons
            name="home"
            size={24}
            color={selectedTab === 'home' ? '#FFC107' : '#FFF'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Map')}>
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
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
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
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: 80, // Adjust size as needed
    height: 80,
    resizeMode: 'contain',
  },
  header: {
    alignItems: 'center',
    marginTop: 10,
  },
  locationText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  subLocationText: {
    fontSize: 14,
    color: 'white',
  },
  weatherSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  temperatureText: {
    fontSize: 64,
    color: 'white',
    fontWeight: 'bold',
  },
  weatherConditionText: {
    fontSize: 18,
    color: 'white',
    marginVertical: 5,
  },
  dateTimeText: {
    fontSize: 14,
    color: 'white',
  },
  forecastSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dayContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
    padding: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    width: 60,
  },
  dayText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  tempText: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
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

export default Homepage;