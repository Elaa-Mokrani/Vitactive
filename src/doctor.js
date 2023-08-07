import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const DoctorScreen = () => {
  const doctorInfo = {
    name: 'Dr. Shaima',
    profilePic: require('../assets/png/drshaima.jpg'),
    numberOfPatients: 500,
    yearsOfExperience: 10,
    reviews: 4.8,
    bio: "Avec un doctorat en nutrition et une vaste expérience clinique, le Dr. Shaima apporte une approche scientifique et personnalisée à chaque consultation. Ayant travaillé avec divers groupes de patients, des enfants aux adultes, ainsi qu'avec des athlètes de haut niveau, elle possède une compréhension approfondie des besoins nutritionnels uniques de chacun. Sa collaboration avec des professionnels de la santé et sa participation à des recherches innovantes en nutrition font d'elle une experte respectée dans son domaine.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget erat non quam fermentum pulvinar. Proin feugiat, libero id tincidunt sollicitudin, nunc purus suscipit tellus, eget convallis libero nisi non magna.",
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/png/background.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.contentContainer}>
        <View style={styles.profileImageContainer}>
          <Image source={doctorInfo.profilePic} style={styles.profileImage} />
        </View>
        <Text style={styles.nameText}>{doctorInfo.name}</Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <FontAwesome name="user-md" size={24} color="#198EB6" />
            <Text style={styles.infoText}>{doctorInfo.numberOfPatients} Patients</Text>
          </View>
          <View style={styles.infoItem}>
            <FontAwesome name="calendar" size={24} color="#198EB6" />
            <Text style={styles.infoText}>{doctorInfo.yearsOfExperience} Years of Experience</Text>
          </View>
          <View style={styles.infoItem}>
            <FontAwesome name="star" size={24} color="#198EB6" />
            <Text style={styles.infoText}>{doctorInfo.reviews} Reviews</Text>
          </View>
        </View>

        <View style={styles.bioContainer}>
          <Text style={styles.bioText}>{doctorInfo.bio}</Text>
          <TouchableOpacity style={styles.seeMoreButton}>
            <Text style={styles.seeMoreButtonText}>Voir plus</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
  ...StyleSheet.absoluteFillObject,
  position:"absolute",
  flex:1,
  resizeMode: 'cover',
  "width": 465,
  "height": 774,
  "left": 33,
  "top": 10
  },
  contentContainer: {
    
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    alignItems: 'center',
    paddingTop: 0,
    paddingHorizontal: 20,
  },
  profileImageContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#AB82FF', // Violet color
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#198EB6',
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  infoItem: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    
    shadowOpacity: 0.55,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoText: {
    color: '#858585',
    fontSize: 16,
    marginTop: 5,
  },
  bioContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 20,
     shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    
    shadowOpacity: 0.55,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  bioText: {
    color: '#000',
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  seeMoreButton: {
    backgroundColor: '#198EB6',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: 'center',
  },
  seeMoreButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DoctorScreen;
