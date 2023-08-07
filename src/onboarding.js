import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import WelcomeScreen from './welcome';

const Dots = ({ selected }) => {
  let backgroundColor;
  backgroundColor = selected ? '#04AD01' : '#808080';
  return (
    <View
      style={{
        height: 6,
        width: 5,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Done = ({ ...props }) => (
  <TouchableOpacity style={{ marginRight: 12 }} {...props}>
    <Text style={{ color: '#04AD01' }}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.navigate('welcome')}
      onDone={() => navigation.navigate('welcome')}
      DotComponent={Dots}
      DoneButtonComponent={Done}
      bottomBarColor="#ffffff"
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image style={styles.image} source={require('../assets/png/onboarding1.png')} />,
          title: 'Reservez une consultation en ligne',
          subtitle: 'Lorem ipsum dollor Lorem ipsum dollor  Lorem ipsum dollor  Lorem ipsum dollor ',
          titleStyles: { color: '#C4025F' },
          subTitleStyles: { color: '#198EB6' },
        },
        {
          backgroundColor: '#fff',
          image: <Image style={styles.image} source={require('../assets/png/onboarding2.png')} />,
          title: 'Trouvez des articles et des conseils en ligne',
          subtitle: 'Lorem ipsum dollor Lorem ipsum dollor  Lorem ipsum dollor  Lorem ipsum dollor ',
          titleStyles: { color: '#C4025F' },
          subTitleStyles: { color: '#198EB6' },
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 310,
    height: 260,
    marginBottom: 46,
  },
});

export default OnboardingScreen;