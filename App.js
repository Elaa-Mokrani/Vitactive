
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from './src/onboarding';
import WelcomeScreen from './src/welcome';
import LoginScreen from './src/login';
import SignInScreen from './src/signin';
import AuthenticatedApp from './components/AuthenticatedApp';
import DoctorScreen from './src/doctor';
import ReservationScreen from './src/reservation'; // Corrected import statement
import AppointmentScreen from './src/appointment';
import PaymentacScreen from './src/paymentaucabinet';
import PaymentelScreen from './src/paymentenligne';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="vitactive" component={AuthenticatedApp} />
    {/* Add other screens specific to the HomeStack */}
  </HomeStack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={OnboardingScreen}/>
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="vitactive" component={AuthenticatedApp} />
        <Stack.Screen name="Signin" component={SignInScreen} />
        <Stack.Screen name="doctor" component={DoctorScreen} />
        <Stack.Screen name="reservation" component={ReservationScreen} />
        <Stack.Screen name="appointment" component={AppointmentScreen} />
        <Stack.Screen name="paymentac" component={PaymentacScreen} />
        <Stack.Screen name="paymentel" component={PaymentelScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
