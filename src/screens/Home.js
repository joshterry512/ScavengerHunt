import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';
import SQLite from 'react-native-sqlite-storage';
import {useSelector, useDispatch} from 'react-redux';
import {setName, setAge} from '../redux/actions';
import CustomButton from '../utils/CustomButton';
import {useNavigation} from '@react-navigation/native';

// const db = SQLite.openDatabase(
//   {
//     name: 'MainDB',
//     location: 'default',
//   },
//   () => {},
//   error => {
//     console.log(error);
//   },
// );

export default function Home({navigation}) {
  const {name, age} = useSelector(state => state.userReducer);
  // const dispatch = useDispatch();
  // const getData = () => {
  //   try {
  //     db.transaction(tx => {
  //       tx.executeSql('SELECT Name, Age FROM Users', [], (tx, results) => {
  //         var len = results.rows.length;
  //         if (len > 0) {
  //           var userName = results.rows.item(0).Name;
  //           var userAge = results.rows.item(0).Age;
  //           dispatch(setName(userName));
  //           dispatch(setAge(userAge));
  //         }
  //       });
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <View style={styles.body}>
      <Text style={[GlobalStyle.CustomFont, styles.text]}>
        Welcome {name} !
      </Text>
      <Image
        source={require('C:\\Users\\Terry\\WebstormProjects\\ScavengerHunt\\assets\\BlankPfp.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <CustomButton
        title="Timer"
        color="#0080ff"
        onPressFunction={() => navigation.navigate('Timer')}
      />
      <CustomButton
        title="Start Scavenger Hunt"
        color="#0080ff"
        onPressFunction={() => {
          navigation.navigate('Hunt');
        }}
      />
      <CustomButton
        title="Create New Task"
        color="#0080ff"
        onPressFunction={() => navigation.navigate('Task')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    margin: 10,
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 130,
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#cccccc',
    borderRadius: 5,
    margin: 7,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    margin: 10,
  },
  subtitle: {
    fontSize: 20,
    margin: 10,
    color: '#999999',
  },
  image: {
    width: 250,
    height: 250,
    margin: 10,
    display: 'flex',
  },
});
