import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  Text,
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
        <Text style={styles.titleText}>
          Take a photo to <Text style={styles.titleBold}>identify</Text>
          {'\n'}the plant!
        </Text>
        <Image
          source={require('../../assets/images/onboarding/brushImage.png')}
          style={styles.brushImage}
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
    marginTop: height * 0.08,
    marginBottom: height * 0.05,
    marginHorizontal: 24,
  },
  titleText: {
    fontSize: 28,
    fontFamily: 'Rubik-Medium',
    color: '#13231B',
  },
  titleBold: {
    fontFamily: 'Rubik-ExtraBold',
    fontSize: 28,
    color: '#13231B',
  },
  brushImage: {
    position: 'absolute',
    width: 142,
    height: 14,
    right: 18,
    top: 36,
  },
  imageSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImage: {
    height: height * 0.9,
    width: '105%',
    marginTop: -height * 0.07,
  },
});

export default OnboardingFirstSlide;
