import React, { useState } from 'react';
import { StyleSheet, Text, ImageBackground, View, TextInput, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';

function AddDesign({ navigation }) {
  
  const backHandler = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/AddDesign.png')} resizeMode="cover" style={styles.image}>
        <TouchableWithoutFeedback onPress={backHandler}>
            <View style={styles.backButton}><Text>  </Text></View>
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
      justifyContent: 'start',
      alignItems: 'start',
      width: '100%',
      height: '100%'
},
backButton: {
  width: '25%',
  height: '10%'
},
})

export default AddDesign