import React, { useState } from 'react';
import { StyleSheet, Text, ImageBackground, View, TextInput, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

function MyDesigns({ navigation }) {
  
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/AddDesign.png')} resizeMode="cover" style={styles.image}>

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
})

export default MyDesigns