import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ActivityIndicator,
  PermissionsAndroid,
  NativeModules,
  TouchableOpacity,
  Dimensions,
  Image,
  Platform,
  AppState,
} from 'react-native';

import {openDatabase} from 'react-native-sqlite-storage';
var db = openDatabase({name: 'mynotification.db'});  // name of the database

// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useFocusEffect} from '@react-navigation/native';

// Import Screens
import DashboardScreen from './screens/DashboardScreen';
import LoginScreen from './screens/LoginScreen';
const Stack = createStackNavigator();




const App = () => {

  useEffect(() => {
    console.log("inside useeffect");
    dbtables();       //function being called
  //  // clearing session storage.
  //   // AsyncStorage.getAllKeys()
  //   //   .then(keys => AsyncStorage.multiRemove(keys))
  //   //   .then(
  //   //     () => console.log('success in clearing session storage'),
  //   //     setTimeout(() => {
  //   //       console.log('hello');
  //   //     }, 5000),
  //   //   );
  }, []);

  /*
  Create tables in the sql-lite before start of the application, Plese refer sql-lite for query syntax.
  */
  function dbtables() {
    console.log("into the function");
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='registration'",
        [],
        function (tx, res) {
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS registration', []);
            txn.executeSql(
              `CREATE TABLE IF NOT EXISTS registration(user_id TEXT,user_name  TEXT,password TEXT,account_key TEXT, 
                contact_details TEXT,person_or_app_name TEXT, role_ids TEXT,pub_rooms TEXT,sub_rooms TEXT,status TEXT)`,
              [],
            );
            console.log(' created registration table');
          }
        },
      );
    });

    db.executeSql('INSERT INTO registration (user_id,user_name ,password ,account_key, contact_details ,person_or_app_name , role_ids ,pub_rooms ,sub_rooms ,status) VALUES (?, ?,?,?,?,?,?,?,?,?)', ['value1', 'value2','value3', 'value4', 'value5', 'value6','value7', 'value8','value9', 'value10' ], (resultSet) => {
      console.log('Row inserted!',resultSet);
    }, (error) => {
      console.log("error occoured", error.message)
      // handle the error here
    });

    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='rooms_subscribed'",
        [],
        function (tx, res) {
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS rooms_subscribed', []);
            txn.executeSql(
              `CREATE TABLE IF NOT EXISTS rooms_subscribed(room TEXT,key TEXT,room_type TEXT,role TEXT)`,
              [],
            );
            console.log(' created rooms_subscribed table');
          }
        },
      );
    });

    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='messages'",
        [],
        function (tx, res) {
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS messages', []);
            txn.executeSql(
              `CREATE TABLE IF NOT EXISTS messages(messages TEXT,room TEXT,msgid TEXT,role TEXT)`,
              [],
            );
            console.log(' created messages table');
          }
        },
      );
    }); 
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DashboardScreen"
          component={DashboardScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
