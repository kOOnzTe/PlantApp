import React, { memo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { CategoryCardProps } from '../../types/ui.types';

const CategoryCard: React.FC<CategoryCardProps> = ({
  item,
  index,
  onPress,
}) => {
  const handlePress = () => {
    onPress?.(item);
  };

  return (
    <TouchableOpacity
      style={[styles.container, index % 2 === 1 && styles.rightCard]}
      onPress={handlePress}
    >
      <ImageBackground
        source={{ uri: item.image.url }}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 152,
    borderRadius: 12,
    backgroundColor: '#F4F6F6',
    borderWidth: 0.5,
    borderColor: '#29BB892E',
    overflow: 'hidden',
    marginBottom: 16,
  },
  rightCard: {
    marginLeft: 12,
  },
  background: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 8,
    left: 8,
    right: 16,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  title: {
    fontFamily: 'Rubik-Medium',
    fontSize: 16,
    lineHeight: 21,
    color: '#13231B',
  },
});

export default memo(CategoryCard);
