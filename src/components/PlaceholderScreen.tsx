import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { PlaceholderScreenProps } from '../types/ui.types';

const PlaceholderScreen: React.FC<PlaceholderScreenProps> = ({
  title,
  subtitle,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 32,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Rubik-Bold',
    color: '#2D3748',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Rubik-Regular',
    color: '#718096',
    textAlign: 'center',
  },
});

export default PlaceholderScreen;
