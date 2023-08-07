import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import VideoCallScreen from './appelvideo'; // Import the VideoCallScreen component
const WaitingRoomScreen = () => {
  const [timeUp, setTimeUp] = useState(false);
  const [countdown, setCountdown] = useState(10);

  const handleReadMagazine = () => {
    console.log('Read Magazine button pressed');
    // Logic to navigate to the magazine reading screen
  };

  const handlePlayGame = () => {
    console.log('Play Game button pressed');
    // Logic to navigate to the game screen
  };

  // Automatically set the timeUp state to true after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeUp(true);
    }, 10000); // 10000 milliseconds = 10 seconds

    // Countdown timer that updates every second
    const countdownTimer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Clean up the timers
    return () => {
      clearTimeout(timer);
      clearInterval(countdownTimer);
    };
  }, []);

  if (timeUp) {
    return <VideoCallScreen />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.timerContainer}>
            <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="timer-sand" size={40} color="#F4C300" />
      </View>
        <Text style={styles.countdownText}>Countdown: {countdown}</Text>
      </View>

      <Image source={require('../assets/png/salledattente.png')} style={styles.backgroundImage} />
      <Text style={styles.title}>"Doctor's Waiting Room "</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerContainer: {
    position: 'absolute',
    top: 20,
  },
  countdownText: {
    fontSize: 24,
    color: '#F4C300',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    position: 'absolute',
    width: 506,
    height: 632,
    left: -76,
    top: 133,
  },
  iconContainer: {
    position: 'absolute',
    top: -100,
    left: -36,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 90,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#00000',
  },

});

export default WaitingRoomScreen;
