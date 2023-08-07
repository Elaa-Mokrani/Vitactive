import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import SettingScreen from './setting';
const ProfileScreen = () => {
const [showSetting, setShowSetting] = useState(false);

  const handlesetting = () => {
    setShowSetting(true);
  };

  if (showSetting) {
    return <SettingScreen/>;
  }
else{
  return (
    <View style={styles.container}>
    
      <View style={styles.profileContainer}>
        <Image source={require('../assets/png/avatar.png')} style={styles.profileImage} />
        <Text style={styles.profileName}>flen fouleni</Text>
      </View>

      <TouchableOpacity style={styles.menuItem}>
        <View style={styles.iconContainer}>
          <FontAwesome name="user" size={24} color="#198EB6" />
        </View>
        <Text style={styles.menuItemText}>Personal Details</Text>
        <MaterialIcons style={{ marginLeft: 'auto' }} name="navigate-next" size={24} color="black" />
      </TouchableOpacity>

    
      <TouchableOpacity style={styles.menuItem} onPress={handlesetting}>
        <View style={styles.iconContainer}>
          <FontAwesome name="cog" size={24} color="#198EB6" />
        </View>
        <Text style={styles.menuItemText}>Settings</Text>
        <MaterialIcons style={{ marginLeft: 'auto' }} name="navigate-next" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <View style={styles.iconContainer}>
          <FontAwesome name="question-circle" size={24} color="#198EB6" />
        </View>
        <Text style={styles.menuItemText}>Help</Text>
        <MaterialIcons style={{ marginLeft: 'auto' }} name="navigate-next" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <View style={styles.iconContainer}>
          <FontAwesome name="sign-out" size={24} color="#198EB6" />
        </View>
        <Text style={styles.menuItemText}>Logout</Text>
        <MaterialIcons style={{ marginLeft: 'auto' }} name="navigate-next" size={24} color="black" />
      </TouchableOpacity>
      <View style={{height:20}}></View>
    </View>
  );}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 35,
  },
  profileImage: {
    marginTop:-20,
    width: 130,
    height: 130,
    borderRadius: 70,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 20,
    marginLeft: 20,
    color: '#000',
  },
});

export default ProfileScreen;
