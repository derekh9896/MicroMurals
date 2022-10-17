import React, { useState } from 'react';
import { StyleSheet, Text, ImageBackground, View, TextInput, TouchableWithoutFeedback } from 'react-native';


function Signup({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = () => {
    if (name != '' && email != '' && password != '') {
      navigation.navigate('Home', {username: name, email: email})
    }
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/SignupScreen.png')} resizeMode="cover" style={styles.image}>
          <View style={styles.registerContainer}>
            <TextInput
              style = {styles.inputName}
              onChangeText={(name) => setName(name)}
              placeholder={"Name"}
              placeholderTextColor="#a9a9a9"
            />
              <TextInput
              style = {styles.inputUser}
              onChangeText={(email) => setEmail(email)}
              placeholder={"Email"}
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
        <View style={styles.signupButton}><Text>  </Text></View>
      </TouchableWithoutFeedback>
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
  registerContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
  },
  inputName: {
    position: 'absolute',
    left: '-27%',
    top: '42%',
    fontSize: 30,
    width: 190,
    maxWidth: 190,
  },
  inputUser: {
      position: 'absolute',
      left: '-27%',
      top: '51.8%',
      fontSize: 30,
      width: 190,
      maxWidth: 190,
  },
  inputPass: {
    position: 'absolute',
    left: '-27%',
    top: '61.4%',
    fontSize: 30,
    width: 190,
    maxWidth: 190,
},
  signupButton: {
    position: 'absolute',
    bottom: '18%',
    left: '17%',
    height: 60,
    width: 270,
    color: '#CCCCCC',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Signup;