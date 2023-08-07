import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SuccessScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/png/fachfouchett.png')} style={styles.topImage} />

      <View style={styles.middleContainer}>
        <Image source={require('../assets/png/success.png')} style={styles.middleImage} />

        <Text style={styles.largeText}>merci pour votre feedback !</Text>

        <Text style={styles.subtitle}>votre avis est important pour nous</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  topImage: {
    width: '100%',
    height: 270,
    marginTop:-120,
    resizeMode: 'cover',
  },
  middleContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  middleImage: {
    width: 200,
    height: 200,
    marginTop:-30,
    resizeMode: 'contain',
  },
  largeText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 26,

    color:'#F4C300',
  },
  subtitle: {
    fontSize: 16,
    color: '#C4025F',
    marginTop: 8,
  },
});

export default SuccessScreen;
