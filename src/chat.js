import React, { useEffect, useState } from 'react';
import { View, Button, PermissionsAndroid, StyleSheet } from 'react-native';
import { RTCPeerConnection, RTCView, mediaDevices } from 'react-native-webrtc';

const WelcomeScreen = () => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [isCalling, setIsCalling] = useState(false);

  useEffect(() => {
    // Request camera and audio permissions
    requestCameraAndAudioPermission();
  }, []);

  const requestCameraAndAudioPermission = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ]);

      if (
        granted['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.RECORD_AUDIO'] === PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('Camera and audio permissions granted');
      } else {
        console.log('Camera and audio permissions denied');
      }
    } catch (error) {
      console.error('Failed to request camera and audio permissions:', error);
    }
  };

  const startCall = async () => {
    const configuration = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] };
    const pc = new RTCPeerConnection(configuration);

    // Add local stream to the peer connection
    localStream.getTracks().forEach((track) => {
      pc.addTrack(track, localStream);
    });

    // Listen for remote stream
    pc.ontrack = (event) => {
      if (event.streams && event.streams[0]) {
        setRemoteStream(event.streams[0]);
      }
    };

    // Create offer and set local description
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);

    // TODO: Send the offer to the remote client using a signaling server

    setIsCalling(true);
  };

  return (
    <View style={styles.container}>
      {localStream && (
        <RTCView style={styles.localVideo} streamURL={localStream.toURL()} zOrder={0} />
      )}

      {remoteStream && (
        <RTCView style={styles.remoteVideo} streamURL={remoteStream.toURL()} zOrder={1} />
      )}

      <Button title="Start Call" onPress={startCall} disabled={isCalling} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  localVideo: {
    width: 200,
    height: 200,
    position: 'absolute',
    top: 20,
    right: 20,
  },
  remoteVideo: {
    width: '100%',
    height: '100%',
  },
});

export default WelcomeScreen;
