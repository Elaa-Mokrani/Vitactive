import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import LoginScreen from './login'; 
import AuthenticatedApp from '../components/AuthenticatedApp';

const SignInScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [focusedInput, setFocusedInput] = useState('');

  const [showLogin, setShowLogin] = useState(false);

  const handleLoginPress = () => {
    setShowLogin(true);
  };

  if (showLogin) {
    return <LoginScreen />;
  }

  const handleSignIn = () => {
    // Perform sign-in logic here
    console.log('Name:', name);
    console.log('Password:', password);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    navigation.navigate('vitactive');
  };

  const handleGoogleSignIn = () => {
    // Perform sign-in with Google logic here
    console.log('Google sign-in clicked');
  };

  const handleFacebookSignIn = () => {
    // Perform sign-in with Facebook logic here
    console.log('Facebook sign-in clicked');
  };

  const handleInputFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleInputBlur = () => {
    setFocusedInput('');
  };

  const isInputFocused = (inputName) => {
    return focusedInput === inputName;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.svgButton} onPress={() => console.log('SVG button pressed')}>
        <Text style={styles.backText}>Retour</Text>
      </TouchableOpacity>
      <Text style={styles.header}>Se Connecter</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nom :</Text>
        <TextInput
          style={[
            styles.input,
            isInputFocused('name') && styles.inputFocused,
          ]}
          placeholder="Nom"
          value={name}
          onChangeText={(text) => setName(text)}
          onFocus={() => handleInputFocus('name')}
          onBlur={handleInputBlur}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mot de Passe :</Text>
        <TextInput
          style={[
            styles.input,
            isInputFocused('password') && styles.inputFocused,
          ]}
          placeholder="Mot de Passe"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          onFocus={() => handleInputFocus('password')}
          onBlur={handleInputBlur}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email :</Text>
        <TextInput
          style={[
            styles.input,
            isInputFocused('email') && styles.inputFocused,
          ]}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
          onFocus={() => handleInputFocus('email')}
          onBlur={handleInputBlur}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Numéro de Téléphone :</Text>
        <TextInput
          style={[
            styles.input,
            isInputFocused('phoneNumber') && styles.inputFocused,
          ]}
          placeholder="Numéro de Téléphone"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          onFocus={() => handleInputFocus('phoneNumber')}
          onBlur={handleInputBlur}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Se Connecter</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <Text style={styles.loginButtonText}>Vous avez déjà un compte ? Se Connecter</Text>
      </TouchableOpacity>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity onPress={handleGoogleSignIn}>
          <FontAwesome5 name="google" style={styles.socialButton} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleFacebookSignIn}>
          <FontAwesome5 name="facebook" style={styles.socialButton} />
        </TouchableOpacity>
      </View>
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
  svgButton: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  backText: {
    color: '#198EB6',
    fontSize: 18,
    top: 30,
  },
  header: {
    fontFamily: 'Averia Sans Libre',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 67,
    color: '#C4025F',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontFamily: 'Averia Sans Libre',
    fontSize: 16,
    color: '#04AD01',
    marginBottom: 5,
  },
  input: {
    fontFamily: 'Averia Sans Libre',
    height: 40,
    paddingHorizontal: 8,
    width: 290,
    backgroundColor: 'rgba(217, 217, 217, 0.3)',
    borderWidth: 1,
    borderColor: 'rgba(133, 133, 133, 0.3)',
    borderRadius: 10,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Averia Sans Libre',
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginButton: {
    marginTop: 15,
  },
  loginButtonText: {
    fontFamily: 'Averia Sans Libre',
    color: '#198EB6',
    fontSize: 16,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    marginTop: 24,
  },
  socialButton: {
    fontSize: 32,
    marginHorizontal: 8,
  },
});

export default SignInScreen;
