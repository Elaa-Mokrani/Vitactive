import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import PaymentelScreen from './paymentenligne';
import PaymentacScreen from './paymentaucabinet';

const ReservationScreen = () => {
  const navigation = useNavigation();
  const [appointmentType, setAppointmentType] = useState('en ligne');
  const [showEnligne, setShowEnligne] = useState(false);
  const [showAucabinet, setShowAucabinet] = useState(false);

  const handleAppointmentTypeChange = (type) => {
    setAppointmentType(type);
  };

  const handleEnligne = () => {
    setShowEnligne(true);
    setShowAucabinet(false);
  };

  const handleAucabinet = () => {
    setShowAucabinet(true);
    setShowEnligne(false);
  };

  const handleConfirmation = () => {
    if (appointmentType === 'en ligne') {
      handleEnligne();
    } else if (appointmentType === 'au cabinet') {
      handleAucabinet();
    }
  };

  if (showEnligne) {
    return <PaymentelScreen />;
  } else if (showAucabinet) {
    return <PaymentacScreen />;
  } else {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.container}>
          {/* Header - Informations de rendez-vous */}
          <Text style={styles.headerText}>Les informations de réservation :</Text>
          <View style={styles.header1}>
            <View style={styles.imageContainer}>
              <Image source={require('../assets/png/drshaima.jpg')} style={styles.doctorImage} />
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.doctorName}>Dr Shaima Mechti</Text>
              <View style={styles.dateTimeContainer}>
                <Ionicons name="md-time-outline" size={24} color="#04AD01" style={styles.icon} />
                <Text style={styles.dateTimeText}>22 juillet 2023, 10:00</Text>
              </View>
            </View>
          </View>

          {/* Header - Choisir le type de rendez-vous */}
          <Text style={styles.headerText}>Choisir le type de rendez-vous :</Text>
          <View style={styles.header1}>
            <TouchableOpacity
              onPress={() => handleAppointmentTypeChange('en ligne')}
              style={[
                styles.button,
                { backgroundColor: appointmentType === 'en ligne' ? '#FFE2B3' : '#fff' },
              ]}
            >
              <Text style={{ textAlign: 'center', color: appointmentType === 'en ligne' ? '#FF7900' : '#838A93' }}>
                En ligne
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleAppointmentTypeChange('au cabinet')}
              style={[
                styles.button,
                { backgroundColor: appointmentType === 'au cabinet' ? '#FFE2B3' : '#fff' },
              ]}
            >
              <Text style={{ textAlign: 'center', color: appointmentType === 'au cabinet' ? '#FF7900' : '#838A93' }}>
                Au cabinet
              </Text>
            </TouchableOpacity>
          </View>

          {/* Additional information for "au cabinet" appointment */}
          {appointmentType === 'au cabinet' && (
            <View style={styles.locationContainer}>
              <MaterialIcons name="location-pin" size={22} color="#0170BC" />
              <View style={styles.locationTextContainer}>
                <Text style={styles.locationText}>Localisation :</Text>
                <Text style={styles.locationValue}>123 Street, Hammem Chatt, BenArous</Text>
              </View>
            </View>
          )}

          {/* Header - Informations de paiement */}
          <Text style={styles.headerText}>Informations de paiement :</Text>
          <View style={styles.header1}>
            <View style={styles.paymentItem}>
              <Text style={styles.paymentLabel}>Prix :</Text>
              <Text style={styles.paymentValue}>$50</Text>
            </View>
            <View style={styles.paymentItem}>
              <Text style={styles.paymentLabel}>Taxe :</Text>
              <Text style={styles.paymentValue}>$5</Text>
            </View>
            <View style={styles.paymentItem}>
              <Text style={styles.paymentLabel}>Net à payer :</Text>
              <Text style={styles.paymentValue}>$55</Text>
            </View>
          </View>

          {/* Bouton de confirmation */}
          <TouchableOpacity onPress={handleConfirmation} style={styles.confirmButton}>
            <Text style={styles.confirmButtonText}>Confirmer</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header1: {
    backgroundColor: '#fff',
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowOpacity: 0.15,
    shadowColor: 'black',
    borderRadius: 20,
  },
  icon: {
    marginRight: 5,
  },
  headerText: {
    paddingVertical: 20,
    fontSize: 18,
    color: '#000',
    width: 10000,
    marginRight: 92,
    marginBottom: 0,
  },
  doctorImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  imageContainer: {
    marginRight: 20,
  },
  nameContainer: {
    flex: 1,
  },
  doctorName: {
    width: 200,
    height: 20,
    fontFamily: 'Averia Sans Libre',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 20,
    color: '#18273B',
    marginTop: 50,
  },
  dateTimeContainer: {
    marginTop: 30,
    marginRight: 80,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DEF2FF',
  },
  dateTimeText: {
    fontSize: 16,
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginRight: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#E1F3FF',
    marginTop: -10,
  },
  locationTextContainer: {
    flex: 1,
  },
  locationText: {
    color: '#0170BC',
    fontWeight: 'bold',
  },
  locationValue: {
    color: '#0170BC',
  },
  paymentItem: {
    flexDirection: 'row',
    marginBottom: 5,
    padding: 10,
  },
  paymentLabel: {
    fontSize: 16,
    marginRight: 10,
  },
  paymentValue: {
    fontSize: 16,
  },
  confirmButton: {
    width: '100%',
    height: 50,
    marginTop: 20,
    backgroundColor: '#198EB6',
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Averia Sans Libre',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ReservationScreen;
