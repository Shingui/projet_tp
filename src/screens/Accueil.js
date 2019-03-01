'use strict';
 
import React, { Component } from 'react'
 
import {
    AppRegistry,
    StyleSheet,
    View,
    Text
    
} from 'react-native';
import { RawButton } from 'react-native-gesture-handler';
 
class Accueil extends Component {
  
 
  render() {
    return (
      
        <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to hjgjhgjReact Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        
        
      </View>

      
    );
  };
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    }, 
  }) ;
  
AppRegistry.registerComponent('Accueil', () => Accueil);
 
module.exports = Accueil;
