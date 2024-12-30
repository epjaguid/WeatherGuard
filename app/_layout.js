import React, { useState } from 'react';
import { Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './Login';
import Signup from './Signup';
import Homepage from './Homepage';
import Notification from './Notification';
import Settings from './Settings';
import FamilyConnectivity from './FamilyConnectivity';
import SideMenu from '../components/SideMenu'; // Import your custom side menu
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const RootLayout = () => {
  const navigation = useNavigation(); // Use the useNavigation hook
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to manage authentication

  // Function to handle login
  const handleLogin = (username, password) => {
    if (username === '1234' && password === '1234') {
      setIsAuthenticated(true); // Set authenticated state to true
      Alert.alert('Log in successfully');
      navigation.navigate('Authenticated');
    } else {
      Alert.alert('Invalid username or password. Please try again.'); // Show error alert
    }
  };

  // Function to handle logout
  const handleLogout = (navigation, setIsAuthenticated) => {
    setIsAuthenticated(false); // Set authentication state to false
    Alert.alert('Logged out successfully'); // Optional: Show a logout success message
    // Navigate to the "Unauthenticated" screen which will show the Login screen
    navigation.navigate('Unauthenticated');
  };

  // Stack for unauthenticated users
  const UnauthenticatedStack = () => (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#091A3F',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Login to Your Account' }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ title: 'Create an Account' }}
      />
    </Stack.Navigator>
  );

  // Stack for authenticated users
  const AuthenticatedStack = () => (
    <Stack.Navigator
      initialRouteName="Homepage"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#091A3F',
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen name="Homepage" component={Homepage} />
      <Stack.Screen
        name="FamilyConnectivity"
        component={FamilyConnectivity}
        options={{ title: 'Family Connectivity' }}
      />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );

  return (
    <Drawer.Navigator
      initialRouteName={isAuthenticated ? 'Authenticated' : 'Unauthenticated'} // Start with 'Unauthenticated'
      drawerContent={(props) => (
        <SideMenu {...props} onLogout={() => handleLogout(navigation, setIsAuthenticated)} />
      )}
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'rgba(9, 26, 63, 0.8)',
        },
        headerShown: false, // Hide default headers for Drawer Screens
      }}
    >
      {/* Drawer Screens */}
      <Drawer.Screen name="Authenticated" component={AuthenticatedStack} />
      <Drawer.Screen name="Unauthenticated" component={UnauthenticatedStack} />
    </Drawer.Navigator>
  );
};

export default RootLayout;
