import React, { useState } from 'react';
import { StyleSheet, Text, ImageBackground, View, TextInput, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';



function Login({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function loginHandler() {
    if (email == "CornelliGEM" && password == "password") {
      navigation.navigate('Home', {username: 'CornelliGEM', email: 'JohnDoe@gmail.com'});
    }
    else if (email == "iGEMRocks" && password == "agoodpassword") {
      navigation.navigate('Home', {username: 'iGEMRocks', email: 'iGEMRocks@gmail.com'})
    }
    else if (navigation.getParam('username') != null && email == navigation.getParam('username') && password == navigation.getParam('password')) {
      navigation.navigate('Home', {username: navigation.getParam('username'), email: navigation.getParam('email')})
    }
  }

  const registerHandler = () => {
    navigation.navigate('Register');
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/LoginScreen.png')} resizeMode="cover" style={styles.image}>
          <View style={styles.loginContainer}>
              <TextInput
              style = {styles.inputUser}
              onChangeText={(email) => setEmail(email)}
              placeholder={"Username"}
              placeholderTextColor="#a9a9a9"
            />
            <TextInput
              style = {styles.inputPass}
              onChangeText={(password) => setPassword(password)}
              placeholder={"Password"}
              placeholderTextColor="#a9a9a9"
              secureTextEntry={true}
            />
          </View>
      </ImageBackground>
      <TouchableWithoutFeedback onPress={loginHandler}>
        <View style={styles.loginButton}><Text>  </Text></View>
      </TouchableWithoutFeedback>
      <TouchableOpacity onPress={registerHandler}>
        <View style={styles.registerButton}><Text style={styles.registerStyle}>Register</Text></View>
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
      flex: 1
  },
  image: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  loginContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  inputUser: {
      position: 'absolute',
      left: -75,
      top: -77,
      fontSize: 30,
      width: 190,
      maxWidth: 190,
  },
  inputPass: {
    position: 'absolute',
    left: -75,
    top: 29,
    fontSize: 30,
    width: 190,
    maxWidth: 190,
  },
  loginButton: {
    position: 'absolute',
    bottom: '21.2%',
    left: '16%',
    height: 60,
    width: 270,
    color: '#CCCCCC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButton: {
    position: 'absolute',
    bottom: 160,
    left: '41%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerStyle: {
    color: '#BC4325',
    fontSize: 18,
  }
})

export default Login;