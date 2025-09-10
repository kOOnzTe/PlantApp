import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Animated,
} from 'react-native';
import type { OnboardingSlidesScreenProps } from '../../types/navigation.types';
import { PrimaryButton } from '../../components';
import OnboardingFirstSlide from './OnboardingFirstSlide';
import OnboardingSecondSlide from './OnboardingSecondSlide';

const { width, height } = Dimensions.get('window');

const OnboardingSlidesScreen: React.FC<OnboardingSlidesScreenProps> = ({
  navigation,
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
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
      navigation.navigate('Paywall');
    }
  };

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
        <View style={styles.slide}>
          <OnboardingFirstSlide />
        </View>
        <View style={styles.slide}>
          <OnboardingSecondSlide />
        </View>
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
  bottomSection: {
    marginHorizontal: 24,
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
