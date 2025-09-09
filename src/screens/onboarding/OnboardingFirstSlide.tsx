import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';

const { height } = Dimensions.get('window');

const OnboardingFirstSlide: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/onboarding/onboardingBackgroundImage.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={styles.headerSection}>
        <Image
          source={require('../../assets/images/onboarding/onboardingOneTitle.png')}
          style={styles.titleImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.imageSection}>
        <Image
          source={require('../../assets/images/onboarding/onboardingOneImage.png')}
          style={styles.mainImage}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.75,
  },
  headerSection: {
    marginTop: height * 0.07,
    marginHorizontal: 24,
  },
  titleImage: {
    height: 90,
  },
  imageSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImage: {
    height: height * 0.85,
    width: '105%',
  },
});

export default OnboardingFirstSlide;
