import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import type { SelectableButtonProps } from '../../types/ui.types';

const SelectableButton: React.FC<SelectableButtonProps> = ({
  isSelected,
  mainText,
  subText,
  onPress,
  badgeText,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, isSelected && styles.selectedContainer]}
      onPress={onPress}
    >
      {badgeText && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badgeText}</Text>
        </View>
      )}
      <View style={styles.content}>
        <View style={styles.radioContainer}>
          <View style={[styles.radioOuter, isSelected && styles.radioSelected]}>
            {isSelected && <View style={styles.radioInner} />}
          </View>
        </View>
        <View>
          <Text style={styles.mainText}>{mainText}</Text>
          <Text style={styles.subText}>{subText}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: '#FFFFFF4D',
    marginBottom: 15,
  },
  selectedContainer: {
    backgroundColor: 'transparent',
    borderColor: '#28AF6E',
    borderWidth: 2,
  },
  badge: {
    position: 'absolute',
    right: 0,
    backgroundColor: '#28AF6E',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 0,
  },
  badgeText: {
    fontSize: 12,
    fontFamily: 'Rubik-Medium',
    color: '#FFFFFF',
    lineHeight: 18,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
  },
  radioContainer: {
    paddingRight: 18,
  },
  radioOuter: {
    width: 24,
    height: 24,
    borderRadius: 24,
    left: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  radioSelected: {
    borderWidth: 8,
    borderColor: '#28AF6E',
  },
  radioInner: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  mainText: {
    fontSize: 16,
    fontFamily: 'Rubik-Medium',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  subText: {
    fontSize: 14,
    fontFamily: 'Rubik-Regular',
    color: '#ffffff',
    opacity: 0.7,
  },
});

export default SelectableButton;
