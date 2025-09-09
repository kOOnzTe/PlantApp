import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import type { PrimaryButtonProps } from '../types/ui.types';

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, disabled && styles.disabledContainer]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={[styles.title, disabled && styles.disabledTitle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28AF6E',
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 16,
    alignItems: 'center',
    width: '100%',
    marginBottom: 12,
  },
  disabledContainer: {
    backgroundColor: '#28AF6E',
    shadowOpacity: 0,
    elevation: 0,
  },
  title: {
    fontFamily: 'Rubik-Medium', // TODO: should be SFProText-Bold
    fontSize: 16,
    color: '#FFFFFF',
  },
  disabledTitle: {
    color: 'rgba(255, 255, 255, 0.7)',
  },
});

export default PrimaryButton;
