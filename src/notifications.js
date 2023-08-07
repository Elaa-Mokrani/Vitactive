import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const notificationsData = [
  {
    id: '1',
    titre: 'Nouveau Message',
    contenu: 'Vous avez reçu un nouveau message de John Doe.',
    date: '18 juillet 2023',
    temps: 'Il y a 2 heures',
  },
  {
    id: '2',
    titre: 'Rappel',
    contenu: 'N\'oubliez pas votre rendez-vous à 15h.',
    date: '17 juillet 2023',
    temps: 'Il y a 1 jour',
  },
  {
    id: '3',
    titre: 'Offre',
    contenu: 'Profitez de 20% de réduction sur tous les achats aujourd\'hui seulement !',
    date: '15 juillet 2023',
    temps: 'Il y a 3 jours',
  },
  // Ajoutez plus de notifications ici...
];

const NotificationScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.notificationContainer}>
      <View style={styles.notificationBox}>
        <MaterialIcons name="notifications-none" size={40} color="black" />
        <View style={styles.notificationContent}>
          <Text style={styles.notificationTitle}>{item.titre}</Text>
          <Text style={styles.notificationText}>{item.contenu}</Text>
        </View>
      </View>
      <View style={styles.notificationTimeContainer}>
        <Text style={styles.notificationDate}>{item.date}</Text>
        <Text style={styles.notificationTime}>{item.temps}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.bouton}>
          <Text style={styles.texteBouton}>Nouveau</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bouton}>
          <Text style={styles.texteBouton}>Tout Marquer</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={notificationsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.conteneurListe}
      />
      <TouchableOpacity style={styles.boutonVoirTout}>
        <Text style={styles.texteBoutonVoirTout}>Voir Tout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  bouton: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  texteBouton: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  conteneurListe: {
    paddingBottom: 20,
  },
  notificationContainer: {
    marginBottom: 20,
    borderRadius: 25,
    backgroundColor: 'rgba(217, 217, 217, 0.3)',
    shadowColor: 'rgba(217, 217, 217, 0.3)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    padding: 15,
  },
  notificationBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationContent: {
    flex: 1,
    marginLeft: 10,
  },
  notificationTitle: {
    color: '#198EB6',
    fontSize: 20,
    fontWeight: 'bold',
  },
  notificationText: {
    fontSize: 16,
    color: '#000',
    marginTop: 5,
  },
  notificationTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },
  notificationDate: {
    fontSize: 14,
    color: '#858585',
  },
  notificationTime: {
    fontSize: 14,
    color: '#858585',
  },
  boutonVoirTout: {
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom:80,
  },
  texteBoutonVoirTout: {
    color: '#198EB6',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NotificationScreen;
