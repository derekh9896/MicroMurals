import React, { useState } from 'react';
import { StyleSheet, Text, ImageBackground, View, TextInput, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';


function HomeScreen({ navigation }) {
  
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/HomeScreen.png')} resizeMode="cover" style={styles.image}>
        <View style={styles.profileContainer}>
          <Text>{ navigation.getParam('username') }</Text>
        </View>
      </ImageBackground>
      
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
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
})

export default HomeScreen