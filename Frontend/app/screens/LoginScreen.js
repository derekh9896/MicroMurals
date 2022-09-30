import React from 'react';
import { SafeAreaView, StyleSheet, Text, ImageBackground, View, Image, TextInput } from 'react-native';





function LoginScreen(props) {
  const [text, onChangeText] = React.useState("Username");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <SafeAreaView
      style={styles.background}
    >
      <Text style = {styles.welcomeText}>Welcome Back!</Text>
      <View style = {styles.loginContainer}>
        <Text style = {styles.loginText}>LOGIN</Text>
        <TextInput
          style = {styles.input}
          onChangeText={onChangeText}
          value={null}
          placeholder={"Username"}
        />
        <TextInput
          style = {styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder={"Password"}
        />
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  background: {
      flex: 1,
      backgroundColor: '#262626',
      justifyContent: 'flex-start',
      alignItems: 'center',
  },
  welcomeText: {
    marginTop: '35%',
    fontSize:40,
    color: '#CCCCCC',
    fontWeight: 'bold',
  },
  loginContainer: {
    borderRadius: 25,
    backgroundColor: '#CCCCCC',
    width: '80%',
    height: '40%',
    top: '6%',
    alignItems: 'flex-start',
  },
  loginText: {
    fontSize: 27,
    left: 40,
    top: 23,
    position: 'absolute',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    top: 60,
    left: 28,
  },
})

export default LoginScreen;