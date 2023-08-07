import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import SignInScreen from './signin';
import ForgotPasswordScreen from './mot-de-passe-oublie';
import AuthenticatedApp from '../components/AuthenticatedApp';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleSignUpPress = () => {
    setShowSignIn(true);
  };

  const handleLogin = () => {
    console.log('Email :', email);
    console.log('Mot de passe :', password);
    // Effectuer la logique de connexion
    navigation.navigate('vitactive');
  };

  const handleForgotPassword = () => {
    setShowForgotPassword(true);
  };

  const handleSvgButtonPress = () => {
    console.log('Bouton SVG appuyé');
  };

  const handleGoogleLogin = () => {
    console.log('Connexion Google cliquée');
  };

  const handleFacebookLogin = () => {
    console.log('Connexion Facebook cliquée');
  };

  const handleEmailFocus = () => {
    setEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setEmailFocused(false);
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setPasswordFocused(false);
  };

  if (showSignIn) {
    return <SignInScreen />;
  }

  if (showForgotPassword) {
    return <ForgotPasswordScreen />;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.svgButton} onPress={handleSvgButtonPress}>
        <Image
          source={require('../assets/svg/back.svg')}
          style={styles.svgImage}
        />
      </TouchableOpacity>

      <Text style={styles.header}>Connexion</Text>

      <Text style={styles.label}>Email :</Text>
      <TextInput
        style={[styles.input, emailFocused && styles.inputFocused]}
        placeholder="Entrez votre email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        onFocus={handleEmailFocus}
        onBlur={handleEmailBlur}
      />

      <Text style={styles.label}>Mot de passe :</Text>
      <TextInput
        style={[styles.input, passwordFocused && styles.inputFocused]}
        placeholder="Entrez votre mot de passe"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
        onFocus={handlePasswordFocus}
        onBlur={handlePasswordBlur}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Connexion</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
      </TouchableOpacity>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity onPress={handleGoogleLogin}>
          <FontAwesome5 name="google" style={styles.socialButton} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleFacebookLogin}>
          <FontAwesome5 name="facebook" style={styles.socialButton} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleSignUpPress}>
        <Text style={styles.signupText}>Pas de compte ? Inscription</Text>
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
  svgButton: {
    position: 'absolute',
    left: '33.33%',
    right: '34.26%',
    top: '23.49%',
    bottom: '23.48%',
  },
  svgImage: {
    width: 50,
    height: 40,
  },
  header: {
    marginBottom: 67,
    fontFamily: 'Averia Sans Libre',
    fontWeight: '700',
    fontSize: 26,
    textAlign: 'center',
    color: '#C4025F',
  },
  label: {
    textAlign: 'left',
    marginTop: 28,
    fontFamily: 'Averia Sans Libre',
    fontWeight: '400',
    fontSize: 18,
    marginBottom: 7,
    marginRight: 200,
    color: '#04AD01',
  },
  input: {
    height: 40,
    paddingHorizontal: 8,
    width: '100%',
    backgroundColor: 'rgba(217, 217, 217, 0.3)',
    borderWidth: 1,
    borderColor: 'rgba(133, 133, 133, 0.3)',
    borderRadius: 10,
  },
  inputFocused: {
    backgroundColor: '#FFF2D0',
    borderColor: '#FFF2D0',
  },
  forgotPassword: {
    marginTop: 12,
    fontFamily: 'Averia Sans Libre',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
    textDecorationLine: 'underline',
    color: '#000000',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    marginTop: 24,
  },
  socialButton: {
    fontSize: 32,
    marginHorizontal: 8,
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
  signupText: {
    top: 30,
    fontFamily: 'Averia Sans Libre',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
    textDecorationLine: 'underline',
    color: '#198EB6',
  },
});

export default LoginScreen;
