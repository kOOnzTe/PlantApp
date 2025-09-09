import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import type { CloseButtonProps } from '../../types/ui.types';

const CloseButton: React.FC<CloseButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={require('../../assets/images/paywall/closeButtonIcon.png')}
        style={styles.closeIcon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  closeIcon: {
    width: 24,
    height: 24,
  },
});

export default CloseButton;
