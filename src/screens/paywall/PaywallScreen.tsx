import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  FlatList,
} from 'react-native';
import type { PaywallScreenProps } from '../../types/navigation.types';
import { useAppDispatch, completeOnboarding } from '../../store';
import { PrimaryButton } from '../../components';
import {
  CloseButton,
  FeatureCard,
  SelectableButton,
} from '../../components/paywall';
import { PAYWALL_FEATURES } from '../../utils/constants.utils';

const { width, height } = Dimensions.get('window');

const PaywallScreen: React.FC<PaywallScreenProps> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  // not-functional yet thus not implemented in redux store
  const [monthlySelected, setMonthlySelected] = useState(true);
  const [yearlySelected, setYearlySelected] = useState(false);

  const handleClose = () => {
    dispatch(completeOnboarding());
    navigation.replace('MainTabs');
  };

  const handleMonthlySelect = () => {
    setMonthlySelected(true);
    setYearlySelected(false);
  };
  const handleYearlySelect = () => {
    setMonthlySelected(false);
    setYearlySelected(true);
  };

  return (
    <View style={styles.backgroundColor}>
      <StatusBar barStyle="light-content" />

      <ImageBackground
        source={require('../../assets/images/paywall/paywallBackgroundImage.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.closeButtonContainer}>
          <CloseButton onPress={handleClose} />
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>
            <Text style={styles.titleHighlight}>PlantApp </Text>Premium
          </Text>
          <Text style={styles.subText}>Access All Features</Text>
        </View>
        <View style={styles.featuresContainer}>
          <FlatList
            horizontal
            data={PAYWALL_FEATURES}
            renderItem={({ item }) => (
              <FeatureCard
                text={item.text}
                subtext={item.subtext}
                icon={item.icon}
              />
            )}
            keyExtractor={item => item.text}
            contentContainerStyle={styles.scrollContent}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ImageBackground>
      <View style={styles.bottomContainer}>
        <View style={styles.selectableButtonContainer}>
          <SelectableButton
            isSelected={monthlySelected}
            mainText="1 Month"
            subText="$2.99/month, auto renewable"
            onPress={handleMonthlySelect}
            badgeText={monthlySelected ? 'Save 50%' : undefined}
          />
          <SelectableButton
            isSelected={yearlySelected}
            mainText="1 Year"
            subText="First 3 days free, then $529.99/year"
            onPress={handleYearlySelect}
            badgeText={yearlySelected ? 'Save 50%' : undefined}
          />
        </View>
        <PrimaryButton title="Try free for 3 days" />
        <Text style={styles.undertext}>
          After the 3-day free trial period you'll be charged ₺274.99 per year
          unless you {'\n'}
          cancel before the trial expires. Yearly Subscription is Auto-Renewable
        </Text>
        <Text style={styles.sublinks}>Terms • Privacy • Restore</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundColor: {
    flex: 1,
    backgroundColor: '#101e17',
  },
  background: {
    width: '100%',
    height: height * 0.63,
  },
  closeButtonContainer: {
    position: 'absolute',
    top: height * 0.08,
    right: 21,
  },
  headerContainer: {
    position: 'absolute',
    top: height * 0.36,
    left: 24,
    right: 24,
  },
  title: {
    fontSize: 30,
    color: '#ffffff',
    fontFamily: 'Rubik-Light',
    marginBottom: 6,
  },
  titleHighlight: {
    fontFamily: 'Rubik-Bold',
  },
  subTitle: {
    fontSize: 17,
    fontFamily: 'Rubik-Light',
    color: '#ffffff',
    opacity: 0.7,
  },
  subText: {
    fontSize: Math.min(17, width * 0.043),
    color: 'rgba(255, 255, 255, 0.7)',
    fontFamily: 'Rubik-Light',
  },
  featuresContainer: {
    position: 'absolute',
    top: height * 0.46,
  },
  scrollContent: {
    marginLeft: 24,
    marginRight: 24,
  },
  bottomContainer: {
    marginHorizontal: 24,
  },
  selectableButtonContainer: {
    marginBottom: 8,
  },
  undertext: {
    fontFamily: 'Rubik-Light',
    fontSize: 9,
    color: '#ffffff',
    opacity: 0.52,
    textAlign: 'center',
    marginBottom: 12,
  },
  sublinks: {
    fontFamily: 'Rubik-Regular',
    fontSize: 11,
    color: '#ffffff',
    opacity: 0.5,
    textAlign: 'center',
  },
});

export default PaywallScreen;
