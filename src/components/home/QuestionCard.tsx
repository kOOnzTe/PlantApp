import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { QuestionCardProps } from '../../types/ui.types';

const QuestionCard: React.FC<QuestionCardProps> = ({ item, onPress }) => {
  const handlePress = () => {
    onPress?.(item);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <ImageBackground
        source={{ uri: item.image_uri }}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.text}>
            <Text style={styles.title}>{item.subtitle + ': '}</Text>
            <Text style={styles.subtitle}>{item.title}</Text>
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 240,
    height: 164,
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 10,
  },
  background: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    height: 64,
    marginTop: 'auto',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
    marginBottom: 2,
  },
  title: {
    fontFamily: 'Rubik-Medium',
  },
  subtitle: {
    fontFamily: 'Rubik-Regular',
  },
});

export default QuestionCard;
