// Start Splash  Screen 

import React, { useEffect, } from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';
import styles from './style';
import { images } from '../../Constants/';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('CreateRide');
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <ImageBackground
        style={styles.imgBackground}
        resizeMode="cover"
        source={images.SplashScreen}>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SplashScreen;


