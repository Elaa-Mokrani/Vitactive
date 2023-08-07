import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CommonBtn = ({ w, h, txt, onPress, status }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ alignSelf: 'center', marginTop: 10, marginBottom: 10 }}>
      <LinearGradient
        colors={status ? ['#198EB6', '#198EB6'] : ['#198EB6', '#198EB6']}
        style={{
          width: w,
          height: h,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          opacity: status ? 1 : 0.5,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 16 }}>{txt}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
export default CommonBtn;