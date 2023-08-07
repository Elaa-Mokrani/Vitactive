import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ico-material-design';
import WelcomeScreen from '../src/welcome';
import HomeScreen from '../src/home';
import ProfileScreen from '../src/profile';
import AppointmentScreen from '../src/appointment';
import OnlineConsultationScreen from '../src/consultation';
import MessageScreen from '../src/message';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

const ScreenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    elevation: 0,
    height: 60,
    backgroundColor: "#fff",
  }
};

const AuthenticatedApp= () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const handlePressOutsideNavbar = () => {
    setIsNavbarVisible(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePressOutsideNavbar}>
      <View style={styles.container}>
        <NavigationContainer independent={true}>
          <Tab.Navigator screenOptions={ScreenOptions}>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={{ alignItems: "center", justifyContent: 'center' }}>
                    <AntDesign name="home" size={24} color={focused ? "#198EB6" : "#111"} />
                    
                  </View>
                )
              }}
            />
            <Tab.Screen
              name="Appointment"
              component={AppointmentScreen}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={{ alignItems: "center", justifyContent: 'center' }}>
                    <MaterialCommunityIcons name="clock-time-three-outline" size={24} color={focused ? "#198EB6" : "#111"} />
                    
                  </View>
                )
              }}
            />
            <Tab.Screen
              name="Consultation"
              component={OnlineConsultationScreen}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={{ alignItems: "center", justifyContent: 'center' }}>
                    <FontAwesome name="stethoscope" size={24} color={focused ? "#198EB6" : "#111"} />
                    
                  </View>
                )
              }}
            />
            <Tab.Screen
              name="Message"
              component={MessageScreen}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={{ alignItems: "center", justifyContent: 'center' }}>
                    <MaterialCommunityIcons name="message-processing-outline" size={24} color={focused ? "#198EB6" : "#111"} />
                   
                  </View>
                )
              }}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={{ alignItems: "center", justifyContent: 'center' }}>
                    <Ionicons name="person-circle-outline" size={24} color={focused ? "#198EB6" : "#111"} />
                    
                  </View>
                )
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:80,
    shadowColor:"grey",
    shadowOpacity:0.5,
    borderRadius:10,
  },
});

export default  AuthenticatedApp;
