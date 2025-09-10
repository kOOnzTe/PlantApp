import React, { memo } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { HomeHeaderProps } from '../../types/ui.types';
import WelcomeMessage from './WelcomeMessage';
import SearchBar from './SearchBar';

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
      <WelcomeMessage greeting={greeting} />
      <SearchBar
        value={searchValue}
        onSearchChange={onSearchChange}
        placeholder={searchPlaceholder}
      />
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
});

export default memo(HomeHeader);
