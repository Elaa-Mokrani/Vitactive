import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const articlesData = [
  {
    id: '1',
    title: 'Article 1',
    topic: 'Santé et Bien-être',
    image: require('../assets/png/fruit.png'),
    likes: 10,
    comments: 5,
  },
  {
    id: '2',
    title: 'Article 2',
    topic: 'Fitness',
    image: require('../assets/png/Legumes.png'),
    likes: 20,
    comments: 8,
  },
  // Add more articles here...
];

const EcranFluxSante = () => {
  const renderCard = (item) => (
    <TouchableOpacity style={styles.cardContainer} key={item.id}>
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderArticle = ({ item }) => (
    <View style={styles.articleContainer} key={item.id}>
      <Image source={item.image} style={styles.articleImage} />
      <Text style={styles.articleTitle}>{item.title}</Text>
      <Text style={styles.articleDetails}>
        {item.likes} J'aime - {item.comments} Commentaires
      </Text>
      {/* Add like and comment functionality here */}
      {/* Add like and comment buttons */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialCommunityIcons name="thumb-up" size={24} color="#198EB6" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialCommunityIcons name="comment-outline" size={24} color="#198EB6" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Following Topics */}
      <Text style={styles.sectionTitle}>Sujets Suivis</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {/* Render multiple cards for different topics */}
        {articlesData.map((article) => renderCard(article))}
      </ScrollView>

      {/* Latest Articles */}
      <Text style={styles.sectionTitle}>Derniers Articles</Text>
      <FlatList
        data={articlesData}
        renderItem={renderArticle}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.newsFeedContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scrollView: {
    marginBottom: 20,
  },
  cardContainer: {
    width: 180,
    height: 250,
    backgroundColor: '#FFF',
    borderRadius: 20,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cardImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  newsFeedContainer: {
    paddingBottom: 20,
  },
  articleContainer: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    marginBottom: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  articleImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  articleDetails: {
    fontSize: 14,
    color: '#888',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default EcranFluxSante;
