import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import PaymentScreen from './payment';

const PaymentelScreen = () => {
  const [selectedPayment, setSelectedPayment] = useState('');
  const [showPayment, setShowPayment] = useState(false);
 
  const handlePaymentPress = () => {
    setShowPayment(true);
     console.log('Payer button pressed!');
  };

  if (showPayment) {
    return <PaymentScreen />;
  }
  const handlePaymentSelect = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };

  const renderCheckmarkIcon = (paymentMethod) => {
    if (selectedPayment === paymentMethod) {
      return (
        <View style={styles.checklistChecked}>
          <Ionicons name="checkmark-circle" size={24} color="#grey" />
        </View>
      );
    } else {
      return (
        <View style={styles.checklistUnchecked}>
          <Ionicons name="radio-button-off" size={24} color="rgba(24, 160, 251, 0.4)" />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Choisir la méthode de paiement</Text>

      {/* Payment methods */}
      <TouchableOpacity
        style={[styles.paymentMethod, styles.applePay]}
        onPress={() => handlePaymentSelect('creditCard')}
      >
        {renderCheckmarkIcon('creditCard')}
        <Image
          source={require('../assets/png/debit-card.png')}
          style={styles.image}
        />
        <Text style={styles.paymentText}>Carte de crédit</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.paymentMethod, styles.paypal]}
        onPress={() => handlePaymentSelect('paypal')}
      >
        {renderCheckmarkIcon('paypal')}
        <Image
          source={require('../assets/png/paypal.png')}
          style={styles.image}
        />
        <Text style={styles.paymentText}>PayPal</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.paymentMethod, styles.applePay]}
        onPress={() => handlePaymentSelect('applePay')}
      >
        {renderCheckmarkIcon('applePay')}
        <Ionicons name="logo-apple" size={40} color="#858585" style={styles.paymentIcon} />
        <Text style={styles.paymentText}>Apple Pay</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.paymentMethod, styles.googlePay]}
        onPress={() => handlePaymentSelect('googlePay')}
      >
        {renderCheckmarkIcon('googlePay')}
        <Image
          source={require('../assets/png/google.png')}
          style={styles.image}
        />
        <Text style={styles.paymentText}>Google Pay</Text>
      </TouchableOpacity>

      {/* Payer button */}
      <TouchableOpacity style={styles.payerButton} onPress={handlePaymentPress}>
        <Text style={styles.payerButtonText}>Payer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#C4025F',
    marginBottom: 20,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    borderRadius: 12,
    width: 391,
    height: 75.56,
  },
  applePay: {
    backgroundColor: '#FFFFFF',
  },
  paypal: {
    backgroundColor: '#FFFFFF',
  },
  googlePay: {
    backgroundColor: '#FFFFFF',
  },
  paymentIcon: {
    marginRight: 10,
  },
  paymentText: {
    fontSize: 16,
    color: '#202244',
    fontFamily: 'Poppins',
    fontWeight: '400',
    lineHeight: 15,
    width: 133,
    height: 23,
  },
  checklistChecked: {
    width: 24.06,
    height: 26.99,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(24, 160, 251, 0.4)',
    backgroundColor: '#18A0FB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checklistUnchecked: {
    width: 24.06,
    height: 26.99,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(24, 160, 251, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  image: {
    width: 40,
    height: 40,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  payerButton: {
    width: '100%',
    height: 50,
    marginTop: 20,
    backgroundColor: '#198EB6',
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  payerButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Averia Sans Libre',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PaymentelScreen;
