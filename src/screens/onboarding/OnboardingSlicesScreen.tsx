import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
  Animated,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import type { OnboardingSlidesScreenProps } from '../../types/navigation.types';
import { PrimaryButton } from '../../components';

const { width, height } = Dimensions.get('window');

const OnboardingSlidesScreen: React.FC<OnboardingSlidesScreenProps> = ({
  navigation,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;

  const handleContinue = () => {
    if (currentSlide === 0) {
      Animated.timing(translateX, {
        toValue: -width,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setCurrentSlide(1);
      });
    } else {
      navigation.getParent()?.navigate('Paywall');
    }
  };

  const renderSlideFirst = () => (
    <View style={styles.container}>
      <Image
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
          style={styles.mainImage1}
          resizeMode="contain"
        />
      </View>
    </View>
  );

  const renderSlideSecond = () => (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/onboarding/onboardingBackgroundImage.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={[styles.headerSection]}>
        <Image
          source={require('../../assets/images/onboarding/onboardingTwoTitleImage.png')}
          style={styles.titleImage}
          resizeMode="contain"
        />
      </View>
      <View style={[styles.imageSection]}>
        <Image
          source={require('../../assets/images/onboarding/onboardingTwoBackgroundImage.png')}
          style={styles.backgroundImageBehindMain}
          resizeMode="cover"
        />
        <Image
          source={require('../../assets/images/onboarding/onboardingTwoImage.png')}
          style={styles.mainImage2}
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

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Animated.View
        style={[
          styles.slidesWrapper,
          {
            transform: [{ translateX }],
          },
        ]}
      >
        <View style={styles.slide}>{renderSlideFirst()}</View>
        <View style={styles.slide}>{renderSlideSecond()}</View>
      </Animated.View>

      <View style={styles.bottomSection}>
        <PrimaryButton title="Continue" onPress={handleContinue} />
        <View style={styles.pageIndicators}>
          <View
            style={[
              styles.indicator,
              currentSlide === 0
                ? styles.activeIndicator
                : styles.inactiveIndicator,
            ]}
          />
          <View
            style={[
              styles.indicator,
              currentSlide === 1
                ? styles.activeIndicator
                : styles.inactiveIndicator,
            ]}
          />
          <View style={[styles.indicator, styles.inactiveIndicator]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slidesWrapper: {
    flex: 1,
    flexDirection: 'row',
    width: width * 2, // two slides side by side
  },
  slide: {
    width: width,
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
    // transform: [{ rotate: '-73.6deg' }],
  },
  headerSection: {
    marginTop: height * 0.07,
    marginHorizontal: 32,
  },
  titleImage: {
    height: 90,
    // maxWidth: 320,
  },
  imageSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImage1: {
    height: height * 0.85,
    width: '105%',
  },
  mainImage2: {
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
  bottomSection: {
    marginHorizontal: 32,
    marginBottom: height * 0.07,
  },
  pageIndicators: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    bottom: height * -0.02,
  },
  indicator: {
    width: 6,
    height: 6,
    borderRadius: 4,
  },
  activeIndicator: {
    backgroundColor: '#13231B',
    width: 10,
    height: 10,
    borderRadius: 6,
  },
  inactiveIndicator: {
    backgroundColor: '#13231B',
    opacity: 0.25,
  },
});

export default OnboardingSlidesScreen;
