import React, { useState } from 'react';
import { StyleSheet, Text, ImageBackground, View, TextInput, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

function Livefeed({ navigation }) {
  
  const HomeHandler = () => {
    navigation.navigate('Home');
  }
  const GalleryHandler = () => {
    navigation.navigate('Gallery');
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/Livefeed.png')} resizeMode="cover" style={styles.image}>
        <TouchableWithoutFeedback onPress={GalleryHandler}>
            <View style={styles.galleryButton}><Text>   </Text></View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={HomeHandler}>
            <View style={styles.homeButton}><Text>   </Text></View>
        </TouchableWithoutFeedback>
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
homeButton: {
  position: 'absolute',
  top: '94%',
  left: '43%',
  width: '15%',
  height: '5%'
},
galleryButton: {
  position: 'absolute',
  top: '94%',
  left: '16%',
  width: '15%',
  height: '5%'
},
})

export default Livefeed