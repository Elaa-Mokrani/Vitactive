import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ChangePasswordScreen = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [isCurrentPasswordFocused, setCurrentPasswordFocused] = useState(false);
  const [isNewPasswordFocused, setNewPasswordFocused] = useState(false);
  const [isConfirmNewPasswordFocused, setConfirmNewPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      {/* Form */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Current Password</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={[
              styles.input,
              isCurrentPasswordFocused ? { borderColor: '#FFF2D0', backgroundColor: '#FFF2D0' } : null,
            ]}
            value={currentPassword}
            onChangeText={setCurrentPassword}
            onFocus={() => setCurrentPasswordFocused(true)}
            onBlur={() => setCurrentPasswordFocused(false)}
            secureTextEntry={!showPassword}
            placeholder="Enter your current password"
            placeholderTextColor="#858585"
            textAlignVertical="center" // Move the placeholder text to the center vertically
          />
          <TouchableOpacity style={styles.eyeIcon} onPress={handleShowPassword}>
            <FontAwesome name={showPassword ? 'eye-slash' : 'eye'} size={24} color="#198EB6" />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>New Password</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={[
              styles.input,
              isNewPasswordFocused ? { borderColor: '#FFF2D0', backgroundColor: '#FFF2D0' } : null,
            ]}
            value={newPassword}
            onChangeText={setNewPassword}
            onFocus={() => setNewPasswordFocused(true)}
            onBlur={() => setNewPasswordFocused(false)}
            secureTextEntry={!showPassword}
            placeholder="Enter your new password"
            placeholderTextColor="#858585"
            textAlignVertical="center" // Move the placeholder text to the center vertically
          />
          <TouchableOpacity style={styles.eyeIcon} onPress={handleShowPassword}>
            <FontAwesome name={showPassword ? 'eye-slash' : 'eye'} size={24} color="#198EB6" />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Confirm New Password</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={[
              styles.input,
              isConfirmNewPasswordFocused ? { borderColor: '#FFF2D0', backgroundColor: '#FFF2D0' } : null,
            ]}
            value={confirmNewPassword}
            onChangeText={setConfirmNewPassword}
            onFocus={() => setConfirmNewPasswordFocused(true)}
            onBlur={() => setConfirmNewPasswordFocused(false)}
            secureTextEntry={!showPassword}
            placeholder="Confirm your new password"
            placeholderTextColor="#858585"
            textAlignVertical="center" 
            textAlignHorizontal="center"// Move the placeholder text to the center vertically
          />
          <TouchableOpacity style={styles.eyeIcon} onPress={handleShowPassword}>
            <FontAwesome name={showPassword ? 'eye-slash' : 'eye'} size={24} color="#198EB6" />
          </TouchableOpacity>
        </View>
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
  formContainer: {
    width: '100%',
    marginTop: 20,
  },
  label: {
    color: '#04AD01',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  input: {
    backgroundColor:"rgba(217, 217, 217, 0.3)",
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
  passwordInputContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 20,
    top: '50%',
    marginTop: -12,
  },
});

export default ChangePasswordScreen;
