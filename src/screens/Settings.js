import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button, TextInput, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Settings() {
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const navigation = useNavigation();

  const startTimer = () => {
    const totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60;
    setSeconds(totalSeconds);
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
    setSeconds(0);
  };

  // const showAlert = () => {
  //   Alert.alert(
  //     'Timer Alert',
  //     'Time to start your Scavenger Hunt!',
  //     [
  //       {
  //         text: 'OK',
  //         onPress: () => {
  //           navigation.navigate('Camera');
  //         },
  //       },
  //     ],
  //     {cancelable: false},
  //   );
  // };

  useEffect(() => {
    const showAlert = () => {
      Alert.alert(
        'Timer Alert',
        'Time to start your Scavenger Hunt!',
        [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('Hunt');
            },
          },
        ],
        {cancelable: true},
      );
    };

    let interval;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
      showAlert();
    }

    return () => clearInterval(interval);
  }, [isActive, navigation, seconds]);

  const onClickHandler = () => {};

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Set Timer for Children</Text>

      <TextInput
        style={styles.input}
        placeholder="Hours"
        keyboardType="numeric"
        value={hours}
        onChangeText={text => setHours(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Minutes"
        keyboardType="numeric"
        value={minutes}
        onChangeText={text => setMinutes(text)}
      />

      {isActive ? (
        <Text style={styles.timerText}>
          {Math.floor(seconds / 3600)
            .toString()
            .padStart(2, '0')}
          :
          {Math.floor((seconds % 3600) / 60)
            .toString()
            .padStart(2, '0')}
          :{(seconds % 60).toString().padStart(2, '0')}
        </Text>
      ) : (
        <Text style={styles.text}>Timer Stopped</Text>
      )}

      <View style={styles.buttonContainer}>
        {isActive ? (
          <Button title="Stop Timer" onPress={stopTimer} />
        ) : (
          <Button title="Start Timer" onPress={startTimer} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0080ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
  input: {
    backgroundColor: '#ffffff',
    width: 100,
    padding: 5,
    margin: 10,
  },
  timerText: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    width: 200,
    alignItems: 'center',
  },
});
