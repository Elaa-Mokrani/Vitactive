import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const MessengerScreen = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (message.trim() !== '') {
      setMessages(prevMessages => [...prevMessages, message.trim()]);
      setMessage('');
    }
  };

  const renderMessage = ({ item }) => (
    <View style={styles.messageContainer}>
      <Text style={styles.messageText}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Back button pressed')}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Dr.Shaima</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => console.log('Phone button pressed')}>
            <Ionicons name="call" size={24} color="#fff" style={styles.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Video button pressed')}>
            <Ionicons name="videocam" size={24} color="#fff" style={styles.headerIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.messagesContainer}>
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item, index) => index.toString()}
          inverted
        />
      </View>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={() => console.log('Camera button pressed')}>
          <Ionicons  name="camera" size={20} color="#858585" style={styles.inputIcon} />
        </TouchableOpacity>
        <TextInput 
          style={styles.input}
          placeholder="ecrire votre message..."
          value={message}
          onChangeText={text => setMessage(text)}
        />
        <TouchableOpacity onPress={() => console.log('Smile button pressed')}>
          <FontAwesome5 style={{ marginRight: 10 }}  name="smile-beam" size={20} color="#858585" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Ionicons  name="send" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Microphone button pressed')}>
          <Ionicons name="mic" size={24} color="#04AD01" style={styles.inputIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  safeArea: {
    backgroundColor: '#2980b9',
  },
  header: {
    backgroundColor: '#2980b9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  headerIcon: {
    marginLeft: 16,
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  messageContainer: {
    backgroundColor: '#DEF2FF',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    maxWidth: '80%',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 13,
    paddingBottom: 66,
  },
  inputIcon: {
    marginRight: 8,

  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    backgroundColor:"#fff",
    borderColor: '#04AD01',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: '#2980b9',
    borderRadius: 20,
    padding: 8,
  },
});

export default MessengerScreen;
