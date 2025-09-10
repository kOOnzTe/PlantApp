import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

const OnboardingSecondSlide: React.FC = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/onboarding/onboardingBackgroundImage.png')}
      style={styles.backgroundImage}
      // resizeMode="cover"
    >
      <View style={styles.headerSection}>
        <Text style={styles.titleText}>
          Get plant <Text style={styles.titleBold}>care guides</Text>
        </Text>
        <Image
          source={require('../../assets/images/onboarding/brushImage.png')}
          style={styles.brushImage}
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
          'rgba(255, 255, 255, 0.1)',
          'rgba(255, 255, 255, 0.5)',
        ]}
        style={styles.shadowOverlay}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  backgroundImageBehindMain: {
    position: 'absolute',
    bottom: '35%',
    height: '65%',
    width: '100%',
  },
  headerSection: {
    marginTop: height * 0.08,
    marginBottom: height * 0.05,
    marginHorizontal: 24,
  },
  titleText: {
    fontSize: 28,
    fontFamily: 'Rubik-Medium',
    color: '#13231B',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  titleBold: {
    fontFamily: 'Rubik-ExtraBold',
    fontSize: 28,
    color: '#13231B',
  },
  brushImage: {
    position: 'absolute',
    width: 158,
    height: 18,
    right: 62,
    top: 33,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  imageSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImage: {
    width: width * 0.7,
    height: height * 0.75,
    zIndex: 2,
    marginTop: height * 0.02,
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
