import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
  Platform,
} from 'react-native';
import { HomeHeaderProps } from '../../types/ui.types';

const HomeHeader: React.FC<HomeHeaderProps> = ({
  greeting,
  searchValue,
  onSearchChange,
  searchPlaceholder = 'Search for plants',
}) => {
  return (
    <ImageBackground
      source={require('../../assets/images/home/headerBackgroundImage.png')}
      style={styles.headerBackground}
      imageStyle={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Hi, plant lover!</Text>
        <Text style={styles.greetingText}>
          {greeting} <Text style={styles.waveEmoji}>👋</Text>
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Image
            source={require('../../assets/images/home/searchIcon.png')}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder={searchPlaceholder}
            placeholderTextColor="#AFAFAF"
            value={searchValue}
            onChangeText={onSearchChange}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  headerBackground: {
    paddingBottom: 18,
  },
  backgroundImage: {
    resizeMode: 'cover',
    top: -36,
  },
  header: {
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
  searchContainer: {
    marginHorizontal: 24,
    opacity: 0.95,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === 'ios' ? 12 : undefined,
    borderWidth: 1,
    borderColor: '#3C3C4340',
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
    tintColor: '#ABABAB',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Rubik-Regular',
    color: '#AFAFAF',
  },
});

export default HomeHeader;
