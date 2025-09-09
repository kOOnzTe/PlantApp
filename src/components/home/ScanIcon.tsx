import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { getTabIconSource } from '../../utils/assets.utils';
import { ScanIconProps } from '../../types/ui.types';

const ScanIcon: React.FC<ScanIconProps> = ({ focused }) => (
  <View
    style={[
      styles.scanButtonContainer,
      focused ? styles.scanButtonFocused : styles.scanButtonUnfocused,
    ]}
  >
    <Image source={getTabIconSource('scanIcon')} style={styles.scanIcon} />
  </View>
);

const styles = StyleSheet.create({
  scanButtonContainer: {
    width: 72,
    height: 72,
    borderWidth: 5,
    borderColor: '#5CC994',
    borderRadius: 39,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },
  scanButtonFocused: {
    backgroundColor: '#5cc994',
  },
  scanButtonUnfocused: {
    backgroundColor: '#28AF6E',
  },
  scanIcon: {
    width: 27,
    height: 27,
    resizeMode: 'contain',
    tintColor: '#FFFFFF',
  },
});

export default ScanIcon;
