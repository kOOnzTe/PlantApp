import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { PremiumBannerProps } from '../../types/ui.types';

const PremiumBanner: React.FC<PremiumBannerProps> = ({
  onPress,
  title = 'FREE Premium Available',
  subtitle = 'Tap to upgrade your account!',
  notificationCount = 1,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Image
          source={require('../../assets/images/home/mailIcon.png')}
          style={styles.icon}
        />
        {notificationCount > 0 && (
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>{notificationCount}</Text>
          </View>
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View>
        <Image
          source={require('../../assets/images/home/arrowIcon.png')}
          style={styles.arrowIcon}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#24201A',
    padding: 12,
    borderRadius: 12,
    marginHorizontal: 24,
    marginTop: 16,
    marginBottom: 24,
  },
  icon: {
    width: 48,
    height: 48,
    tintColor: '#F0D399',
    marginTop: 1,
    marginLeft: 3,
    marginRight: -3,
    marginBottom: -3,
  },
  notificationBadge: {
    position: 'absolute',
    top: 2,
    right: -2,
    backgroundColor: 'red',
    borderRadius: 9,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    color: '#E5C990',
    fontSize: 16,
    fontFamily: 'Rubik-Bold', // TODO: should be SFProText-Bold
    lineHeight: 21,
    marginBottom: 2,
  },
  subtitle: {
    color: '#E4B046',
    fontFamily: 'Rubik-Regular', // TODO: should be SFProText-Semibold
    fontSize: 14,
    lineHeight: 16,
  },
  arrowIcon: {
    width: 24,
    height: 24,
    tintColor: '#D0B070',
  },
});

export default PremiumBanner;
