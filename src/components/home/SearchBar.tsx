import React from 'react';
import { View, TextInput, Image, StyleSheet, Platform } from 'react-native';
import { SearchBarProps } from '../../types/ui.types';

const SearchBar: React.FC<SearchBarProps> = ({
  value = '',
  onSearchChange,
  placeholder = 'Search for plants',
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Image
          source={require('../../assets/images/home/searchIcon.png')}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder={placeholder}
          placeholderTextColor="#AFAFAF"
          value={value}
          onChangeText={onSearchChange || (() => {})}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default SearchBar;
