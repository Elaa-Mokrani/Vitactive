import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../src/login';
import HomeScreen from '../src/home';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
