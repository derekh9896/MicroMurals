import React from 'react';
import { SafeAreaView, StyleSheet, Text, ImageBackground, View, Image } from 'react-native';

function WelcomeScreen(props) {
    return (
        <View
            style={styles.background}
        >
            <Image style={styles.logo} source={require('../assets/MicroMuralLogo-removed.png')}/>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#e0d6bf',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loginButton: {
        width: '100%',
        height: 75,
        backgroundColor: '#fc5c65',
    },
    logo: {
        width: '58%',
        height: '22%',
        position: 'absolute',
        top: 75,
    },
    registerButton: {
        width: '100%',
        height: 75,
        backgroundColor: '#4ecdc4',
    },
})

export default WelcomeScreen;