import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity , ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import NotificationScreen from './notifications';
import HealthfeedScreen from './healthfeed';
import DoctorScreen from './doctor';
import RecommendationScreen from './recommandations';
import ContactUsScreen from './contactus';

const HomeScreen = () => {
   const [shownotification, setShownotification] = useState(false);
   const [showdoctor, setShowdoctor] = useState(false);
  const [showhealth, setShowhealth] = useState(false);
const [showcontact, setShowcontact] = useState(false);
  const [showrecommande, setShowrecommande] = useState(false);

  const handledoctorPress = () => {
    setShowdoctor(true);
  };

const handlecontactPress = () => {
    setShowcontact(true);
  };

  const handlerecommandePress = () => {
    setShowrecommande(true);
  };


  const handlehealthPress = () => {
    setShowhealth(true);
  };

  if (showdoctor) {
    return <DoctorScreen />;
  } else if (showhealth) {
    return <HealthfeedScreen/>;
  }else if (showcontact){
    return <ContactUsScreen/>;
  }else if (showrecommande){
return<RecommendationScreen/>;
  }

  const handlenotification = () =>{
setShownotification(true);
  };
  if (shownotification){
return < NotificationScreen/>;
  }
  const handleTaskPress = (task) => {
    // Handle press event for each task
    console.log('Task pressed:', task);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Top section */}
      <View style={styles.topSection}>
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/png/avatar.png')}
            style={styles.profilePic}
          />
          <Text style={styles.profileText}>Hi user</Text>
        </View>
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Comment ça va aujourd'hui?</Text>
        </View>
        <TouchableOpacity  onPress={handlenotification}>
        <MaterialIcons style={styles.notification} name="notifications-none" size={30} color="#C4025F" />
</TouchableOpacity>
        <View style={{width:350, flexDirection: "row", alignItems: "center", backgroundColor: "#D9D9D9", marginHorizontal: 4, borderRadius: 8, paddingVertical: 1, paddingHorizontal: 4, shadowColor: "black", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.55, shadowRadius: 3.84, marginTop: 120,
marginLeft:-400, }}>

        <GooglePlacesAutocomplete
        
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          placeholder="Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            console.log(details?.geometry?.viewport);
            setBl_lat(details?.geometry?.viewport?.southwest?.lat);
            setBl_lng(details?.geometry?.viewport?.southwest?.lng);
            setTr_lat(details?.geometry?.viewport?.northeast?.lat);
            setTr_lng(details?.geometry?.viewport?.northeast?.lng);
          }}
          query={{
            key: "YOUR_API_KEY",
            language: "en",
          }}
           style={styles.searchContainer}
        />
        <Ionicons name="search" size={24} color="grey" />
      </View>

      </View>

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Decouvrir </Text>
        <Text style={styles.subtitleText}>Vous avez le potentiel, foncez !</Text>
      </View>

      {/* Task views */}
      <View style={styles.taskContainer}>
        <TouchableOpacity
          style={styles.taskItem}
          onPress={handledoctorPress}
        >
          <Image source={require('../assets/png/doctor1.png')} style={styles.taskIcon} />
          <Text style={styles.taskLabel}>A propos de Dr.Shaima</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.taskItem}
          onPress={handlecontactPress}
        >
           <Image source={require('../assets/png/communicate.png')} style={styles.taskIcon} />
          <Text style={styles.taskLabel}>Contactez-nous</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.taskContainer}>
        <TouchableOpacity
          style={styles.taskItem}
          onPress={handlehealthPress}
        >
           <Image source={require('../assets/png/newspaper.png')} style={styles.taskIcon} />
          <Text style={styles.taskLabel}>Health feed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.taskItem}
          onPress={handlerecommandePress}
        >
           <Image source={require('../assets/png/offer.png')}  style={styles.taskIcon} />
          <Text style={styles.taskLabel}>Nos Recommendations</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  notification:{
      marginLeft:-10,

    },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:-40,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 45,
    height: 45,
    borderRadius: 10,
  },
  profileText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  greetingContainer: {
    marginLeft: 10,
  },
  greetingText: {
    fontSize: 14,
    color: '#666',
  },

 searchContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 400,
 marginLeft:-470,
},

  titleContainer: {
    marginTop: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitleText: {
    fontSize: 14,
    color: '#666',
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  taskItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
  marginTop:10,
    height:160,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    
    shadowOpacity: 0.55,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    width: '47%',
    marginBottom: 30,
  },
  taskIcon: {
    marginBottom: 10,
    width:60,
    height:60,
  },
  taskLabel: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HomeScreen;
