import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  PermissionsAndroid,
  Platform,
} from 'react-native';

import HomeScreen from './HomeScreen';
import   CampaignScreen from './CampaignScreen';
import SettlementScreen from './SettlementScreen';

import {useTheme, useFocusEffect} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabStack() {
  return (
    //!  DECLARING CONTROLLER SCREEN
    <Tab.Navigator initialRouteName="HomeScreen">
      <Tab.Screen
        name="Home"
        tabBarLabel="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Campaign"
        tabBarLabel="Campaign"
        component={CampaignScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="tour" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settlement"
        tabBarLabel="Settlement"
        component={SettlementScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="margin" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const DashboardScreen = ({navigation}) => {
  useFocusEffect(React.useCallback(() => {}, []));

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#253C" barStyle="light-content" />
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="TabStack"
          component={TabStack}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default DashboardScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: '#5f38f9',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});
