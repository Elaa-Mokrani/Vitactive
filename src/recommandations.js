import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const RecommendationScreen = () => {
  const recommendations = [
    {
      id: '1',
      type: 'Food',
      name: 'Healthy Bites Cafe',
      image: require('../assets/png/cafe.png'),
    },
    {
      id: '2',
      type: 'Gym',
      name: 'FitZone Gym',
      image: require('../assets/png/sport.png'),
    },
    {
      id: '3',
      type: 'Food',
      name: 'Green Leaf Restaurant',
      image: require('../assets/png/Legumes.png'),
    },
    {
      id: '4',
      type: 'Gym',
      name: 'Active Life Fitness',
      image: require('../assets/png/sport.png'),
    },
    {
      id: '5',
      type: 'Food',
      name: 'Organic Delights',
      image: require('../restaurant.png'),
    },
    {
      id: '6',
      type: 'Gym',
      name: 'Fit & Healthy Club',
      image: require('../assets/snack-icon.png'),
    },
    {
      id: '7',
      type: 'Food',
      name: 'Veggie Heaven',
      image: require('../assets/png/restaurants.png'),
    },
    {
      id: '8',
      type: 'Gym',
      name: 'Power Up Gym',
      image: require('../assets/png/sport.png'),
    },
    // Add more recommendations here...
  ];

  const handleVisitButtonPress = (name) => {
    // You can implement navigation logic to the specific location details screen here
    console.log('Visiting:', name);
  };

   return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Recommendations</Text>
      {recommendations.map((recommendation) => (
        <View key={recommendation.id} style={styles.recommendationContainer}>
          <Image source={recommendation.image} style={styles.recommendationImage} />
          <View style={styles.recommendationContent}>
            <View style={styles.titleContainer}>
              <FontAwesome name={recommendation.type === 'Food' ? 'cutlery' : 'heartbeat'} size={24} color="#198EB6" />
              <Text style={styles.recommendationName}>{recommendation.name}</Text>
            </View>
            <TouchableOpacity
              style={styles.visitButton}
              onPress={() => handleVisitButtonPress(recommendation.name)}
            >
              <Text style={styles.visitButtonText}>Visiter</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#198EB6',
    marginBottom: 20,
  },
  recommendationContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  recommendationImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  recommendationContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recommendationName: {
    fontSize: 18,
    color: '#198EB6',
    marginLeft: 10,
  },
  visitButton: {
    backgroundColor: '#198EB6',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  visitButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RecommendationScreen;
