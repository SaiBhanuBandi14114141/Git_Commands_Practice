import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {Styles} from '../styles/onboarding.styles';
import EN from '../../i18n/en.json';
const OnboardingScreen = ({navigation}: {navigation: any}) => {
  return (
    <View>
      <ImageBackground
        style={Styles.backGroundImage}
        source={require('../../../assets/images/cardImage.jpeg')}>
        <View style={Styles.outerViewStyles}>
          <Text style={Styles.mainText}>{EN.onBoarding.mainText}</Text>
          <Text style={Styles.subText}>{EN.onBoarding.subText}</Text>
        </View>
        <View>
          <TouchableOpacity
            style={Styles.touchableButton}
            onPress={() => navigation.navigate('welcome')}>
            <Text style={Styles.touchableText}>{EN.onBoarding.buttonText}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default OnboardingScreen;
