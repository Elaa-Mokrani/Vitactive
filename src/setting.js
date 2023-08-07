import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import ChangePasswordScreen from './changepassword';
const SettingScreen = () => {
  const [profilePic, setProfilePic] = useState(require('../assets/png/avatar.png'));
  const [name, setName] = useState('Elaa Mokrani');
  const [email, setEmail] = useState('ElaaMokrani@example.com');
  const [phone, setPhone] = useState('221*****');
  const [isNameFocused, setNameFocused] = useState(false);
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPhoneFocused, setPhoneFocused] = useState(false);
 const [showchangepassword, setShowchangepassword] = useState(false);

  const handleChangePassword = () => {
    console.log('Change Password button pressed');
    setShowchangepassword(true);
  };


  if (showchangepassword) {
    return <ChangePasswordScreen/>;
  }
  const handleCameraIconPress = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.cancelled) {
        setProfilePic({ uri: result.uri });
      }
    }
  };

  const handleSave = () => {
    console.log('Save Changes button pressed');
    
    // Logic to save changes (e.g., update user profile data)
  };

  return (
    <View style={styles.container}>
      {/* Profile Picture and Camera Icon */}
      <TouchableOpacity onPress={handleCameraIconPress}>
        <Image source={profilePic} style={styles.profileImage} />
        <FontAwesome name="camera" size={24} color="#198EB6" style={styles.cameraIcon} />
      </TouchableOpacity>

      {/* Form */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Nom Et Prenom</Text>
        <TextInput
          style={[
            styles.input,
            isNameFocused ? { borderColor: '#FFF2D0', backgroundColor: '#FFF2D0' } : null,
          ]}
          value={name}
          onChangeText={setName}
          onFocus={() => setNameFocused(true)}
          onBlur={() => setNameFocused(false)}
          placeholder="Entrer Le Nom"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={[
            styles.input,
            isEmailFocused ? { borderColor: '#FFF2D0', backgroundColor: '#FFF2D0' } : null,
          ]}
          value={email}
          onChangeText={setEmail}
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
          placeholder="Entrer l'email"
        />

        <Text style={styles.label}>Num de tel</Text>
        <TextInput
          style={[
            styles.input,
            isPhoneFocused ? { borderColor: '#FFF2D0', backgroundColor: '#FFF2D0' } : null,
          ]}
          value={phone}
          onChangeText={setPhone}
          onFocus={() => setPhoneFocused(true)}
          onBlur={() => setPhoneFocused(false)}
          placeholder="num de tel"
        />
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Changer mot de passe</Text>
      </TouchableOpacity>
<View style={{marginTop:-652, marginLeft:240, marginRight:-25,}}>
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Enregistrer</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 5,
  },
  formContainer: {
    width: '100%',
    marginTop: 20,
  },
  label: {
    color: '#04AD01',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'rgba(217, 217, 217, 0.3)',
    borderWidth: 1,
    borderColor: 'rgba(133, 133, 133, 0.3)',
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
    height: 55,
    paddingHorizontal: 10,
    fontFamily: 'Averia Sans Libre',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 55,
    textAlign: 'center',
    letterSpacing: -0.02,
    color: '#858585',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    marginBottom: 16,
  },
  buttonText: {
    color: '#198EB6',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SettingScreen;
