//Example of Splash, Login and Sign Up in React Native

import React from 'react';
import { View,Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../../Constants';
import styles from './style';

const Button = ({ navigation }) => {

  return (
      <TouchableOpacity style={styles.buttonBg} onPress={()=>navigation.navigate('HomeScreen')} >
            <Text style={styles.buttonText}>DONE</Text>
      </TouchableOpacity>
  );
};

export default Button;


