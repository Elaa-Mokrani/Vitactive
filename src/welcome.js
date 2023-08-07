import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import LoginScreen from './login'; // Adjust the import path as per your file location
import SignInScreen from './signin';

const WelcomeScreen = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const handleLoginPress = () => {
    setShowLogin(true);
  };

  const handleSignUpPress = () => {
    setShowSignIn(true);
  };

  if (showLogin) {
    return <LoginScreen />;
  } else if (showSignIn) {
    return <SignInScreen />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenue </Text>
        <Image source={require('../assets/png/logo.png')} style={styles.image} />
        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.buttonSeparator} />
        <TouchableOpacity style={styles.button} onPress={handleSignUpPress}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
       
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff',
  },
  title: {
    fontFamily: 'Averia Sans Libre',
    fontWeight: '700',
    fontSize: 48,
    lineHeight: 59,
    textAlign: 'center',
    color: '#04AD01',
    width: 260,
    height: 59,
    marginBottom: 76,
    left: 9,
    top: 2,
  },
  image: {
    width: 270,
    height: 260,
    marginBottom: 16,
  },
  button: {
    width: 376.55,
    height: 60,
    left: 2,
    top: 54,
    backgroundColor: '#198EB6',
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Averia Sans Libre',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 18,
  },
  buttonSeparator: {
    height: 10, // Adjust the height as per your preference
  },
});

export default WelcomeScreen;
