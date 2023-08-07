import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';

const VerificationCodeScreen = () => {
  const [verificationCode, setVerificationCode] = useState('');

  const handleVerifyCodePress = () => {
    // Valider le code de vérification
    if (verificationCode === '123456') {
      // Code de vérification valide, rediriger vers l'écran de réinitialisation du mot de passe
      Alert.alert('Code valide', 'Code de vérification correct. Redirection vers l\'écran de réinitialisation du mot de passe.');
      // Ici, vous pouvez ajouter votre logique de redirection vers l'écran de réinitialisation du mot de passe
    } else {
      Alert.alert('Code incorrect', 'Le code de vérification est incorrect. Veuillez réessayer.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Vérification du code</Text>

      <Text style={styles.label}>Code de vérification:</Text>
      <TextInput
        style={styles.input}
        placeholder="Code de vérification"
        value={verificationCode}
        onChangeText={setVerificationCode}
        keyboardType="numeric"
      />

      <TouchableOpacity title="Verify Code" onPress={handleVerifyCodePress} style={styles.button}>
        <Text style={styles.buttonText}>Vérifier le code</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontFamily: 'Averia Sans Libre',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 40,
    color: '#C4025F',
  },
  label: {
    color: '#04AD01',
    fontFamily: 'Averia Sans Libre',
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'left',
    alignSelf: 'stretch',
    marginLeft: 10,
  },
  input: {
    fontFamily: 'Averia Sans Libre',
    width: '100%',
    height: 40,
    backgroundColor: 'rgba(217, 217, 217, 0.3)',
    borderWidth: 1,
    borderColor: 'rgba(133, 133, 133, 0.3)',
    borderRadius: 10,
    marginBottom: 7,
    paddingHorizontal: 8,
    color: 'grey',
  },
  button: {
    width: 300,
    height: 50,
    marginTop: 30,
    backgroundColor: '#198EB6',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Averia Sans Libre',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default VerificationCodeScreen;
