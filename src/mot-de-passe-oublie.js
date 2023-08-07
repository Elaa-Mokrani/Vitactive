import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);

  const handlemotdepassePress = () => {
    // Envoyer une demande de réinitialisation de mot de passe à l'adresse e-mail
    // Ici, vous pouvez implémenter votre logique de réinitialisation de mot de passe

    // Exemple simple d'affichage d'une alerte pour montrer que la demande a été envoyée
    Alert.alert('Demande envoyée', `Un e-mail de réinitialisation a été envoyé à ${email}`);
  };

  const handleEmailFocus = () => {
    setEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setEmailFocused(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mot De Passe Oubliee</Text>

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={[styles.input, emailFocused && styles.inputFocused]}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        onFocus={handleEmailFocus}
        onBlur={handleEmailBlur}
      />
      <TouchableOpacity title="Reset Password" onPress={handlemotdepassePress} style={styles.button}>
        <Text style={styles.buttonText}>envoyer le code</Text>
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
    marginBottom: 67,
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
    height: 45,
    backgroundColor: 'rgba(217, 217, 217, 0.3)',
    borderWidth: 1,
    borderColor: 'rgba(133, 133, 133, 0.3)',
    borderRadius: 10,
    marginBottom: 7,
    paddingHorizontal: 8,
    color: 'grey',
  },
  inputFocused: {
    backgroundColor: '#FFF2D0',
    borderColor: '#FFF2D0',
  },
  button: {
    width: 376.5,
    height: 60,
    marginTop: 45,
    backgroundColor: '#198EB6',
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Averia Sans Libre',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 18,
  },
});

export default ForgotPasswordScreen;
