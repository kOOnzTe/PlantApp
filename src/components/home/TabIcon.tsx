import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { getTabIconSource } from '../../utils/assets.utils';
import { TabIconProps } from '../../types/ui.types';

const TabIcon: React.FC<TabIconProps> = ({ iconName, focused }) => (
  <Image
    source={getTabIconSource(iconName)}
    style={[
      styles.tabIcon,
      focused ? styles.tabIconFocused : styles.tabIconUnfocused,
    ]}
  />
);

const styles = StyleSheet.create({
  tabIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  tabIconFocused: {
    tintColor: '#28AF6E',
  },
  tabIconUnfocused: {
    tintColor: '#ABABAB',
  },
});

export default TabIcon;
