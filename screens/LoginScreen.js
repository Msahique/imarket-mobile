import React, {useState, createRef, useEffect} from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import BaseTextField from './BaseTextField';

const LoginScreen = ({navigation}) => {
  const [phno, setphno] = useState('');
  const [password, setpassword] = useState('');

  async function handleSubmitPress() {
    console.log('phno===>' + phno);
    console.log('password==>' + password);

    if (!phno || !password) {
      alert('Please fill all the fields');
      return;
    }
    navigation.navigate('DashboardScreen');
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#253C" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
        <Text>
          Login with your company provided USERID and password to access your
          portal
        </Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={[styles.footer]}>
        <Text style={styles.text_footer}>Username</Text>
        <View>
          <BaseTextField
            placeholder={'Username'}
            onChangeText={val => setphno(val)}
          />
        </View>
        <Text style={styles.text_footer}>Password</Text>
        <View>
          <BaseTextField
            placeholder="Enter Password"
            onChangeText={val => setpassword(val)}
          />
        </View>

        <TouchableOpacity>
          <Text style={{color: '#009387', marginTop: 15}}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <View style={[styles.button, {padding: 10}]}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              handleSubmitPress();
            }}>
            <LinearGradient colors={['#253C', '#253C']} style={styles.signIn}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                LOGIN
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: 'row',
            padding: 10,
          }}>
          <FontAwesome name="twitter" color="#1DA1F2" size={20} />
          <FontAwesome name="facebook" color="#4267B2" size={20} />
          <FontAwesome name="envelope" color="#EA4335" size={20} />
        </View>
      </Animatable.View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#253C',
  },
  logo: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#000000',
    height: 60,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: '#000',
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
