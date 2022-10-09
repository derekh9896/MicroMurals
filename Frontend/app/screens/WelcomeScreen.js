import React from 'react';
import { StyleSheet, ImageBackground, View, Button, TouchableOpacity, Image } from 'react-native';

function WelcomeScreen({ navigation }) {
  
  const pressHandler = () => {
    navigation.navigate('Login');
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pressHandler} style={styles.image} activeOpacity='1.0'>
        <Image source={require('../assets/WelcomeScreen.png')} resizeMode="cover" style={styles.image}/>
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
      width: '100%',
      height: '100%'
},
})

export default WelcomeScreen