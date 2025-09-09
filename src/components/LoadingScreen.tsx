import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const LoadingScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#4CAF50" />
      <Text style={styles.loadingText}>Loading PlantApp...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 32,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    fontFamily: 'Rubik-Medium',
    color: '#2D3748',
    textAlign: 'center',
  },
});

export default LoadingScreen;
