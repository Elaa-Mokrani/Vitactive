import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ResetPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPasswordPress = () => {
    // Valider les champs et réinitialiser le mot de passe
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        // Envoyer une demande de réinitialisation de mot de passe à l'adresse e-mail
        // Implémentez votre logique de réinitialisation de mot de passe ici

        // Exemple simple d'affichage d'une alerte pour montrer que le mot de passe a été réinitialisé
        Alert.alert('Mot de passe réinitialisé', 'Votre mot de passe a été réinitialisé avec succès !');
      } else {
        Alert.alert('Erreur', 'Les mots de passe saisis ne correspondent pas.');
      }
    } else {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Réinitialisation de mot de passe</Text>

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Adresse e-mail"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <Text style={styles.label}>Nouveau mot de passe:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nouveau mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <Text style={styles.label}>Confirmer le mot de passe:</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirmer le mot de passe"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
      />

      <TouchableOpacity title="Reset Password" onPress={handleResetPasswordPress} style={styles.button}>
        <Text style={styles.buttonText}>Réinitialiser le mot de passe</Text>
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

export default ResetPasswordScreen;
