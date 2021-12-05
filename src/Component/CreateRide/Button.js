//Example of Splash, Login and Sign Up in React Native

import React from 'react';
import { View,Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../../Constants';
import styles from './style';

const Button = ( navigation ) => {

  return (
      <TouchableOpacity style={styles.buttonBg} >
            <Text style={styles.buttonText}>Save and Send Request </Text>
      </TouchableOpacity>
  );
};

export default Button;


