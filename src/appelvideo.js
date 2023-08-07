import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import PostConsultation from './consultationterminee';
const VideoCallScreen = () => {
  const [showPostConsultation, setShowpostconsultation] = useState(false);
  
  const [cameraPermission, setCameraPermission] = useState(false);
  const [microphonePermission, setMicrophonePermission] = useState(false);

  useEffect(() => {
    requestPermissions();
  }, []);

  const requestPermissions = async () => {
    const { status: cameraStatus } = await Permissions.askAsync(Permissions.CAMERA);
    const { status: microphoneStatus } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);

    setCameraPermission(cameraStatus === 'granted');
    setMicrophonePermission(microphoneStatus === 'granted');
  };
const handlepostconsultaion = () => {
    setShowpostconsultation(true);
  };

  if (showPostConsultation) {
    return < PostConsultation/>;
  }

  return (
    <View style={styles.container}>
      {cameraPermission ? (
        <View style={styles.videoContainer}>
          {/* Video component */}
        </View>
      ) : (
        <Text style={styles.permissionText}>Camera permission not granted</Text>
      )}

      {microphonePermission ? (
        <View style={styles.audioContainer}>
          {/* Audio component */}
        </View>
      ) : (
        <Text style={styles.permissionText}>Microphone permission not granted</Text>
      )}

      <View style={styles.topContainer}>
        <View style={styles.profileContainer}>
          <Image source={require('../assets/png/drshaima.jpg')} style={styles.profileImage} />
          <Text style={styles.profileName}>Dr.Shaima</Text>
        </View>
        <Text style={styles.timeCounter}>00:01:23</Text>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesome5 name="microphone" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesome5 name="video" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handlepostconsultaion} style={styles.hangupButton}>
          <FontAwesome5 name="phone" style={styles.hangupIcon} />
        </TouchableOpacity>

        <TouchableOpacity  style={styles.iconContainer}>
          <FontAwesome5 name="ellipsis-v" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={{height:60,}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  audioContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  permissionText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  timeCounter: {
    fontSize: 16,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  iconContainer: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#ECECEC',
  },
  icon: {
    fontSize: 24,
    color: '#000000',
  },
  hangupButton: {
    backgroundColor: '#FF0000',
    padding: 12,
    borderRadius: 30,
  },
  hangupIcon: {
    fontSize: 24,
    color: '#FFFFFF',
  },
});

export default VideoCallScreen;
