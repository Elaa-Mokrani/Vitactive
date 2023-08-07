import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert ,Image, ScrollView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import { Ionicons } from '@expo/vector-icons';

const BilanScreen = () => {
  const [permissionStatus, setPermissionStatus] = useState(null);

  useEffect(() => {
    requestFileSystemPermission();
  }, []);

  const requestFileSystemPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.FILESYSTEM_WRITE);
    setPermissionStatus(status);
  };

  const handleDownloadButtonPress = async () => {
    if (permissionStatus !== 'granted') {
      Alert.alert(
        'Permission Required',
        'Please allow access to your file system to download the prescription.'
      );
      return;
    }

    const url = 'URL_TO_YOUR_PDF_DOCUMENT'; // Replace with the actual URL of your PDF document
    const fileName = 'prescription.pdf'; // The desired name for the downloaded file

    try {
      const downloadResumable = FileSystem.createDownloadResumable(
        url,
        FileSystem.documentDirectory + fileName
      );

      const { uri } = await downloadResumable.downloadAsync();

      Alert.alert('Success', `Prescription downloaded at: ${uri}`);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to download prescription.');
    }
  };
return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
    <View style={{height:-70}}></View>
      <View style={styles.container}>
        {/* Votre consultation avec Dr.Shaima a ete terminee! 🎉 */}
        <Text style={styles.title}>Les informations de consultation precedente</Text>

        {/* Profile Images */}
        <View style={styles.profileImagesContainer}>
          <Image source={require('../assets/png/doctor.png')} style={styles.profileImage1} />
          <Image source={require('../assets/png/patient.png')} style={styles.profileImage2} />
        </View>

        {/* Status */}
        <Text style={styles.statusText}>   Complete</Text>

        {/* Date and Time */}
        
        <View style={styles.dateTimeContainer}>
              <Ionicons name="md-time-outline" size={24} color="#04AD01" style={styles.icon} />
              <Text style={styles.dateTimeText}>  22   juillet  2023 , 10:00</Text>
            </View>
<View style={{height:30,}}></View>
        {/* View Detail Button */}
        {/* Feedback */}
      <Image style={styles.prescriptionimage} source={require('../assets/png/prescription.png')}/>
        <View style={styles.container}>
      <TouchableOpacity onPress={handleDownloadButtonPress} style={styles.downloadButton}>
        <FontAwesome name="download" size={20} color="#FFECCC" />
        <Text style={styles.downloadButtonText}>Download Prescription Here</Text>
      </TouchableOpacity>
    </View>
        {/* Skip Button */}
        <View style={{height:30}}></View>
          <Text style={styles.title}>Le prochain rendez-vous:</Text>
          <View style={styles.dateTimeContainer}>
              <Ionicons name="md-time-outline" size={24} color="#04AD01" style={styles.icon} />
              <Text style={styles.dateTimeText}>  04 septembre 2023 , 11:00  </Text>
            </View>
      </View>
    </ScrollView>
  );
};

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  downloadButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF9100',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  downloadButtonText: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Averia Sans Libre',
    fontWeight: 'bold',
  },
   title: {
    fontFamily: 'Averia Sans Libre',
    fontStyle: 'normal',
    fontWeight: '700',
    color: '#000',
    fontSize: 18,
    marginBottom: 20,
  },
  profileImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  profileImage1: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
   profileImage2: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginLeft:-15,
    marginRight:220,
  },
  statusText: {
    fontSize: 16,
    marginTop:10,
    marginBottom: 3,
    width:100,
    height:25,
    color:'#04AD01',
  marginLeft:-233,
  backgroundColor:'#E2F8E3',
  } ,
   dateTimeContainer: {
    marginTop: 20,
    marginRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
     backgroundColor: '#DEF2FF',
     borderRadius:8,
     height:35,
     width:300,
    justifyContent: 'center',

  },
  dateTimeText: {
   
    fontSize: 16,
    },
 
 
 prescriptionimage:{
   width:370,
   height:160,
   borderRadius:12,
 },
});

export default BilanScreen;
