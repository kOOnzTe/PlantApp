import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { getIconSource } from '../../utils/assets.utils';
import type { FeatureCardProps } from '../../types/ui.types';

const { width } = Dimensions.get('window');

const FeatureCard: React.FC<FeatureCardProps> = ({ text, subtext, icon }) => {
  const src = getIconSource(icon);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={src} />
      </View>
      <Text style={styles.mainText}>{text}</Text>
      <Text style={styles.subText}>{subtext}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Math.min(width * 0.4, 160),
    alignItems: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 14,
    marginRight: 12,
    padding: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    alignSelf: 'flex-start',
  },
  mainText: {
    fontSize: 20,
    fontFamily: 'Rubik-Medium',
    color: '#FFFFFF',
    textAlign: 'left',
    marginBottom: 4,
  },
  subText: {
    fontFamily: 'Rubik-Regular',
    fontSize: 13,
    color: '#ffffff',
    opacity: 0.7,
    textAlign: 'left',
    lineHeight: 18,
  },
});

export default FeatureCard;
