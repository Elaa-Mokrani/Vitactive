import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Header from '../components/header';
import CommonBtn from '../components/commonbtn';
import ReservationScreen from './reservation';

LocaleConfig.locales['en'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};

LocaleConfig.defaultLocale = 'en';

const dismissKeyboard = () => {
  Keyboard.dismiss();
};


const AppointmentScreen = ({ navigation }) => {
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isAgeFocused, setIsAgeFocused] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
 


  const handleNameFocus = () => {
    setIsNameFocused(true);
  };

  const handleNameBlur = () => {
    setIsNameFocused(false);
  };

  const handleAgeFocus = () => {
    setIsAgeFocused(true);
  };

  const handleAgeBlur = () => {
    setIsAgeFocused(false);
  };

  const [selectedSlot, setSelectedSlot] = useState(-1);
  const [selectedGender, setSelectedGender] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [slots, setSlots] = useState([
    { slot: '10:00-12:00PM', selected: false },
    { slot: '12:00-02:00PM', selected: false },
    { slot: '02:00-04:00PM', selected: false },
    { slot: '04:00-06:00PM', selected: false },
    { slot: '06:00-08:00PM', selected: false },
    { slot: '08:00-11:00PM', selected: false },
  ]);

  useEffect(() => {
    // Request permission to access calendar
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === 'granted') {
        const calendars = await Calendar.getCalendarsAsync();
        console.log('calendars', calendars);
      }
    })();
  }, []);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };
 const [showreservation, setShowreservation] = useState(false);
   const handlereservationPress = () => {
        setShowreservation(true);
  };
  if (showreservation) {
    return <ReservationScreen />;
  }
  return (
    <ScrollView style={styles.container}>
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      
        <View style={styles.container}>
      
  <Text style={styles.heading}>Selectionner une date</Text>
          
          <View style={styles.calendarContainer}>
            <Calendar
              style={styles.calendar}
              theme={{
                calendarBackground: '#fff',
                textSectionTitleColor: '#04AD01',
                selectedDayBackgroundColor: '#FFE2B3',
                selectedDayTextColor: '#FFF2D0',
                todayTextColor: '#198EB6',
                dayTextColor: '#000',
                textDisabledColor: '#C4025F',
                arrowColor: '#198EB6',
                monthTextColor: '#198EB6',
                textDayFontFamily: 'Averia Sans Libre',
                textDayFontWeight: 'bold',
                textMonthFontFamily: 'Averia Sans Libre',
                textMonthFontWeight: 'bold',
                textDayHeaderFontFamily: 'Averia Sans Libre',
                textDayHeaderFontWeight: 'bold',
              }}
              onDayPress={(day) => handleDateSelect(day.dateString)}
              markedDates={selectedDate ? { [selectedDate]: { selected: true } } : {}}
            />
          </View>
          <Text style={styles.heading}>les heures dispo:</Text>
          <ScrollView horizontal style={styles.timeSlotContainer}>
            {slots.map((item, index) => (
              <TouchableOpacity
                
                key={index}
                style={[
                  styles.timeSlot,
                  { borderColor: index === selectedSlot ? '#198EB6' : 'rgba(217, 217, 217, 0.3)' ,
                  backgroundColor: index === selectedSlot ? '#198EB6' : 'rgba(217, 217, 217, 0.3)',},
                ]}
                onPress={() => setSelectedSlot(index)}
              >
                <Text
                  style={{
                    color: index === selectedSlot ? '#fff' : '#000',
                    fontFamily: 'Averia Sans Libre',
                    fontWeight: 'bold',
                  }}
                >
                  {item.slot}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Text style={styles.heading}>Nom de patient:</Text>
          <TextInput
            style={[
              styles.nameInput,
              { backgroundColor: isNameFocused ? '#FFE2B3' : '#FFF' },
            ]}
            placeholder={'Enter your full name'}
            onFocus={handleNameFocus}
            onBlur={handleNameBlur}
            value={name}
            onChangeText={setName}
          />
          <Text style={styles.heading}>L age</Text>
          <TextInput
            style={[
              styles.nameInput,
              { backgroundColor: isAgeFocused ? '#FFE2B3' : '#FFF' },
            ]}
            placeholder={'Enter your age'}
            onFocus={handleAgeFocus}
            onBlur={handleAgeBlur}
            value={age}
            onChangeText={setAge}
          />
          <Text style={styles.heading}>selectionner le sexe</Text>
          <View style={styles.genderView}>
            <TouchableOpacity
              style={[
                styles.gender,
                { backgroundColor: selectedGender === 0 ? '#94D9F0' : '#FFF' },
              ]}
              onPress={() => setSelectedGender(0)}
            >
              <Ionicons
                style={{ width: 24, height: 24, tintColor: selectedGender === 0 ? '#FFF' : '#000' }}
                name="male-sharp"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.gender,
                { backgroundColor: selectedGender === 1 ? '#FF99CA' : '#FFF' },
              ]}
              onPress={() => setSelectedGender(1)}
            >
              <Ionicons
                style={{ width: 24, height: 24, tintColor: selectedGender === 0 ? '#FFF' : '#000' }}
                name="md-female"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.btnView}>
            <CommonBtn
              w={300}
              h={45}
              txt={'Reserver'}
              status={true}
              onPress={handlereservationPress}
            />
            <View style={{ height: 20 }}></View>
            <View style={{ height: 20 }}></View>
          </View>
        </View>
      
    </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default AppointmentScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  heading: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 15,
    marginLeft: 15,
    fontFamily: 'Averia Sans Libre',
  },
  calendarContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    width:300,
  },
  calendar: {
    fontFamily: 'Averia Sans Libre',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  timeSlot: {
    width: '16.5%',
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    margin:12,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  nameInput: {
    borderRadius: 10,
    marginTop: 10,
    width: '94%',
    height: 45,
    borderWidth: 1,
    alignSelf: 'center',
    paddingLeft: 20,
    backgroundColor: '#FFF',
    color: '#858585',
    fontFamily: 'Averia Sans Libre',
  },
  genderView: {
    marginTop: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  gender: {
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnView: { marginTop: 20, alignSelf: 'center', marginBottom: 30 },
});

