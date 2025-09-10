import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
  ImageBackground,
} from 'react-native';
import type { WelcomeScreenProps } from '../../types/navigation.types';
import { PrimaryButton } from '../../components';

const { height } = Dimensions.get('window');

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate('OnboardingSlides');
  };

  return (
    <ImageBackground
      source={require('../../assets/images/onboarding/onboardingBackgroundImage.png')}
      style={styles.backgroundImage}
      // resizeMode="cover"
    >
      <StatusBar barStyle="dark-content" />

      <View style={styles.headerSection}>
        <Text style={styles.title}>
          Welcome to <Text style={styles.titleHighlight}>PlantApp</Text>
        </Text>
        <Text style={styles.subtitle}>
          Identify more than 3000+ plants and{'\n'}88% accuracy.
        </Text>
      </View>
      <View style={styles.imageSection}>
        <Image
          source={require('../../assets/images/onboarding/getStartedImage.png')}
          resizeMode="contain"
          style={styles.getStartedImage}
        />
      </View>
      <View style={styles.bottomSection}>
        <PrimaryButton title="Get Started" onPress={handleGetStarted} />
        <Text style={styles.termsText}>
          By tapping next, you are agreeing to PlantID{'\n'}
          <Text style={styles.linkText}>Terms of Use</Text> &{' '}
          <Text style={styles.linkText}>Privacy Policy</Text>.
        </Text>
      </View>
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
  headerSection: {
    marginTop: height * 0.08,
    marginBottom: height * 0.05,
    marginHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Rubik-Regular',
    color: '#13231B',
    marginBottom: 6,
    letterSpacing: 0.07,
  },
  titleHighlight: {
    fontSize: 28,
    fontFamily: 'Rubik-Bold',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Rubik-Regular',
    textAlign: 'left',
    color: '#13231B',
    opacity: 0.7,
    lineHeight: 22,
    letterSpacing: 0.07,
  },
  imageSection: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  getStartedImage: {
    width: '110%',
    height: '110%',
  },
  bottomSection: {
    marginHorizontal: 24,
    marginBottom: height * 0.05,
  },
  termsText: {
    fontSize: 11,
    fontFamily: 'Rubik-Regular',
    color: '#597165',
    opacity: 0.7,
    textAlign: 'center',
    lineHeight: 15,
  },
  linkText: {
    textDecorationLine: 'underline',
  },
});

export default WelcomeScreen;
