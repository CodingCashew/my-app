import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
// import DetailsScreen from '../screens/DetailsScreen';
import ModuleScreen from '../screens/ModuleScreen';

type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Details: undefined;
  Module: { moduleName: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
        <Stack.Screen 
          name="Module" 
          component={ModuleScreen} 
          options={({ route }) => ({ 
            title: route.params?.moduleName || 'Default Title',
          })} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}