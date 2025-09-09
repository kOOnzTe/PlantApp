import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

const OnboardingSecondSlide: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/onboarding/onboardingBackgroundImage.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={styles.headerSection}>
        <Image
          source={require('../../assets/images/onboarding/onboardingTwoTitleImage.png')}
          style={styles.titleImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.imageSection}>
        <Image
          source={require('../../assets/images/onboarding/onboardingTwoBackgroundImage.png')}
          style={styles.backgroundImageBehindMain}
          resizeMode="cover"
        />
        <Image
          source={require('../../assets/images/onboarding/onboardingTwoImage.png')}
          style={styles.mainImage}
          resizeMode="contain"
        />
      </View>
      <Image
        source={require('../../assets/images/onboarding/artworkImage.png')}
        style={styles.artworkImage}
        resizeMode="contain"
      />
      <LinearGradient
        colors={[
          'rgba(255, 255, 255, 0)',
          'rgba(255, 255, 255, 0.4)',
          'rgba(255, 255, 255, 0.6)',
        ]}
        style={styles.shadowOverlay}
      />
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
  backgroundImageBehindMain: {
    position: 'absolute',
    bottom: '35%',
    height: '65%',
    width: '100%',
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
    width: width * 0.7,
    height: height * 0.75,
    zIndex: 2,
  },
  artworkImage: {
    position: 'absolute',
    top: height * 0.17,
    right: 0,
    zIndex: 2,
  },
  shadowOverlay: {
    position: 'absolute',
    height: '20%',
    width: '100%',
    bottom: '0%',
    zIndex: 2,
  },
});

export default OnboardingSecondSlide;
