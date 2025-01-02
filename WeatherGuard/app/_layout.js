import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './Login';
import Signup from './Signup';
import Homepage from './Homepage';
import Notification from './Notification';
import Settings from './Settings';
import FamilyConnectivity from './FamilyConnectivity';
import SideMenu from '../components/SideMenu'; // Adjust the path as needed
import Opening from './Opening';
import Map from './MapScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Stack for main app screens
const MainStack = ({navigation}) => (
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
    <Stack.Screen name="Settings" component={Settings} />
    
    <Stack.Screen
      name="FamilyConnectivity"
      component={FamilyConnectivity}
      options={{ title: 'Family Connectivity' }}
    />
    
    <Stack.Screen name="Notification" component={Notification} />
    <Stack.Screen name="Map" component={Map} />
    
  </Stack.Navigator>
);







// Stack for Login and Signup screens
const AuthStack = ({ navigation }) => (
  <Stack.Navigator
    initialRouteName="Opening"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#091A3F',
      },
      headerTintColor: '#fff',
    }}
  >

 
    <Stack.Screen
      name="Opening"
      component={Opening}
      options={{
        title: 'Opening',
        headerShown: false, // Hide the header for simplicity
      }}
      
    />

    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        title: 'Login',
        headerShown: false,
      }}
      initialParams={{ onLogin: () => navigation.replace('MainApp') }}
    />

    <Stack.Screen
      name="Signup"
      component={Signup}
      options={{ title: 'Create an Account' }}
    />
  </Stack.Navigator>
);












const RootLayout = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Auth"
      drawerContent={(props) => <SideMenu {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'rgba(9, 26, 63, 0.8)',
        },
        headerShown: false, // Hide headers for Drawer Screens
      }}
    >
      {/* Drawer Screens */}
      <Drawer.Screen name="Auth" component={AuthStack} />
      <Drawer.Screen name="MainApp" component={MainStack} />

    </Drawer.Navigator>
  );
};

export default RootLayout;
