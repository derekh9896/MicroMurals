import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Login from './app/screens/Login';
import * as React from 'react';
import Navigator from './app/Routes/homeStack'

const App = () => {
  return (
    <Navigator />
    );
};

export default App;

