import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';

const NavigationBar = () => {
  const navigation = useNavigation();

  const goToHome = () => {
    navigation.navigate('HomeScreen');
  };

  const goToAppointments = () => {
    navigation.navigate('Appointments');
  };

  const goToConsultations = () => {
    navigation.navigate('Consultations');
  };

  const goToMessages = () => {
    navigation.navigate('MessageScreen');
  };

  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={goToHome}>
        <AntDesign name="home" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={goToAppointments}>
        <MaterialIcons name="event" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={goToConsultations}>
        <FontAwesome name="comments" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={goToMessages}>
        <MaterialIcons name="message" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={goToProfile}>
        <FontAwesome name="user" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <NavigationBar />
    </NavigationContainer>
  );
};

export default App;
