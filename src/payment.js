import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import SuccessScreen from './success';
const PaymentScreen = () => {
  const [showPayment, setShowPayment] = useState(false);
 
  const handlePaymentPress = () => {
    setShowPayment(true);
     console.log('Payer button pressed!');
  };

  if (showPayment) {
    return <SuccessScreen />;
  }else{
  return (
    <View style={styles.container}>
      <Text style={styles.title}>payment</Text>
      <Text style={styles.Somme}>120 dt</Text>
      <View style={styles.backgroundView}>
        
      </View>

      <View style={styles.formContainer}>
      <View style={{height:-150}}></View>
      <TextInput style={styles.input} placeholder="Numéro de carte" />
      <TextInput style={styles.input} placeholder="Date d'expiration" />
      <TextInput style={styles.input} placeholder="CVV" />
      <TextInput style={styles.input} placeholder="Nom et Prénom" />
        <View style={styles.espace}></View>
         <TouchableOpacity style={styles.payerButton} onPress={handlePaymentPress}>
        <Text style={styles.payerButtonText}>Payer</Text>
      </TouchableOpacity>
      </View>

     
    </View>
  );}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(4, 173, 1, 0.6)',
    padding: 16,
  },
  backgroundView: {
    backgroundColor: 'rgba(4, 173, 1, 0.6)',
    marginBottom: 50,
  },
  
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    padding: 18,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    width:393.5,
    height:570,
    marginLeft:-17,
  },
  input: {
    height: 50,
    borderColor: 'rgba(217, 217, 217, 0.3)',
    borderWidth: 1,
    borderRadius:15,
    marginBottom: 32,
   
    paddingHorizontal: 10,
    backgroundColor:'rgba(217, 217, 217, 0.3)',
  },
  payerButton: {
    width: '100%',
    height: 50,
    marginTop: 0,
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
  Somme: {
    fontSize: 55,
    fontFamily:'Averia Sans Libre',
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
   marginTop:35,
  },
   title: {
    fontSize: 24,
    fontFamily:'Averia Sans Libre',
    fontWeight: 'bold',
    color: '#C4025F',
    textAlign: 'center',
   marginTop:30,
  },
  espace:{
    height:0,
  },
});

export default PaymentScreen;
