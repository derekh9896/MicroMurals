import React, { useState } from 'react';
import { StyleSheet, Text, ImageBackground, View, TextInput, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';


function HomeScreen({ navigation }) {
  
  const myDesignsHandler = () => {
    navigation.navigate('MyDesigns');
  }
  const addDesignHandler = () => {
    navigation.navigate('AddDesign');
  }
  const GalleryHandler = () => {
    navigation.navigate('Gallery');
  }
  const LivefeedHandler = () => {
    navigation.navigate('Livefeed');
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/HomeScreen2.png')} resizeMode="cover" style={styles.image}>
        <View style={styles.profileContainer}>
          <Text style={styles.usernameStyle}>{ navigation.getParam('username') }</Text>
        </View>
        <TouchableWithoutFeedback onPress={myDesignsHandler}>
            <View style={styles.myDesignsButton}><Text>   </Text></View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={addDesignHandler}>
            <View style={styles.addDesignButton}><Text>   </Text></View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={GalleryHandler}>
            <View style={styles.galleryButton}><Text>   </Text></View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={LivefeedHandler}>
            <View style={styles.livefeedButton}><Text>   </Text></View>
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
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '60%',
    flex: 1,
  },
  usernameStyle: {
    fontSize: 30,
    fontWeight: '600',
    position: 'absolute',
    top: '54%'
  },
  myDesignsButton: {
    position: 'absolute',
    top: '72%',
    width: '100%',
    height: '5%'
  },
  addDesignButton: {
    position: 'absolute',
    top: '81%',
    width: '100%',
    height: '5%'
  },
  galleryButton: {
    position: 'absolute',
    top: '94%',
    left: '16%',
    width: '15%',
    height: '5%'
  },
  livefeedButton: {
    position: 'absolute',
    top: '94%',
    left: '70%',
    width: '15%',
    height: '5%'
  }
})

export default HomeScreen