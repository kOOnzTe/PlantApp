import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WelcomeMessageProps } from '../../types/ui.types';

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ greeting }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Hi, plant lover!</Text>
      <Text style={styles.greetingText}>
        {greeting} <Text style={styles.waveEmoji}>👋</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginVertical: 12,
  },
  welcomeText: {
    fontSize: 16,
    fontFamily: 'Rubik-Regular',
    color: '#13231B',
    marginBottom: 4,
  },
  greetingText: {
    fontSize: 24,
    fontFamily: 'Rubik-Medium',
    color: '#13231B',
  },
  waveEmoji: {
    fontSize: 24,
  },
});

export default WelcomeMessage;
