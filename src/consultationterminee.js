import React, { useState } from 'react';
import { View, Text, TouchableOpacity,TextInput, Image, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AirbnbRating } from 'react-native-ratings';
import SuccessScreen from './postfeedback';
import BilanScreen from './bilan';

const PostConsultation = () => {
  const [feedback, setFeedback] = useState('');
  const [showpostfeed, setShowpostfeed] = useState(false);
   const [showskip, setShowskip] = useState(false);
const handleskip = () => {
     setShowskip(true);
  };
if (showskip) {
    return < BilanScreen/>;
  }



  const handleSubmitFeedback = () => {
     setShowpostfeed(true);
    console.log('Feedback:', feedback);
    // Reset the feedback field
    setFeedback('');
  };
if (showpostfeed) {
    return <SuccessScreen />;
  }
  
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
    <View style={{height:-80}}></View>
      <View style={styles.container}>
        {/* Votre consultation avec Dr.Shaima a ete terminee! 🎉 */}
        <Text style={styles.title}>Votre consultation avec Dr.Shaima a été terminée! 🎉</Text>

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
<View style={{height:23,}}></View>
        {/* View Detail Button */}
        <TouchableOpacity style={styles.viewDetailButton}>
          <Text style={styles.viewDetailButtonText}>voir les details</Text>
        </TouchableOpacity>

        {/* Feedback */}
        <Text style={styles.feedbackText}>Merci de donner votre feedback</Text>
        <View style={styles.ratingContainer}>
      <AirbnbRating
      count={5}
      reviews={['Terrible', 'Mauvais', 'Moyen', 'Bon', 'Excellent']}
      defaultRating={0}
      size={20}
      onFinishRating={(rating) => console.log('Rated: ', rating)}
    />
    </View>
        <View style={styles.feedbackFormContainer}>
        
          <TextInput
            style={styles.feedbackInput}
            multiline
            placeholder="Votre feedback..."
            value={feedback}
            onChangeText={setFeedback}
          />
          <TouchableOpacity style={styles.confirmButton} onPress={handleSubmitFeedback}>
            <Text style={styles.confirmButtonText}>Confirmer</Text>
          </TouchableOpacity>
        </View>

        {/* Skip Button */}
        <TouchableOpacity style={styles.skipButton} onPress={handleskip}>
          <Text style={styles.skipButtonText}>Sauter cette étape</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontFamily: 'Averia Sans Libre',
    fontStyle: 'normal',
    fontWeight: '700',
    color: '#C4025F',
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
    marginLeft:-120,
    marginRight:220,
  },
  statusText: {
    fontSize: 16,
    marginTop:0,
    marginBottom: 3,
    width:100,
    height:25,
    color:'#04AD01',
    alignItems: 'center',

    backgroundColor:'#E2F8E3',
  },
   dateTimeContainer: {
    marginTop: 10,
    marginRight: 80,
    flexDirection: 'row',
    alignItems: 'center',
     backgroundColor: '#DEF2FF',
     borderRadius:8,
     height:35,
  },
  dateTimeText: {
   
    fontSize: 16,
    },
 
  viewDetailButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth:1,
    borderColor:'#FF7900',
  },
  viewDetailButtonText: {
    color: '#FF7900',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Averia Sans Libre',
  },
  feedbackText: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
  },
  feedbackFormContainer: {
    borderWidth: 1,
    borderColor: '#858585',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
   ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -10,
    marginBottom:12,
    fontSize:1,
    marginLeft:95,
  },
  feedbackInput: {
    height: 45,
    textAlignVertical: 'top',
    marginBottom: 10,
  },
  confirmButton: {
    backgroundColor: '#198EB6',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Averia Sans Libre',
  },
  skipButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipButtonText: {
    color: '#B93B9D',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Averia Sans Libre',
  },
});

export default PostConsultation ;
