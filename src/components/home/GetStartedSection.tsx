import React, { memo, useCallback } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import QuestionCard from './QuestionCard';
import type { Question } from '../../types/api.types';
import { GetStartedSectionProps } from '../../types/ui.types';
import PremiumBanner from './PremiumBanner';

const GetStartedSection: React.FC<GetStartedSectionProps> = ({
  questions,
  onPremiumPress,
  onQuestionPress,
}) => {
  const renderQuestionItem = useCallback(
    ({ item }: { item: Question }) => (
      <QuestionCard item={item} onPress={onQuestionPress} />
    ),
    [onQuestionPress],
  );

  return (
    <>
      <PremiumBanner onPress={onPremiumPress} />

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Get Started</Text>
        {questions.isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="small" color="#28AF6E" />
          </View>
        ) : questions.isError ? (
          <Text style={styles.errorText}>Failed to load questions</Text>
        ) : (
          <FlashList
            data={questions.data || []}
            renderItem={renderQuestionItem}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalListContent}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Rubik-Medium',
    color: '#13231B',
    marginBottom: 16,
    marginHorizontal: 24,
  },
  loadingContainer: {
    paddingVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 14,
    fontFamily: 'Rubik-Regular',
    color: '#FF6B6B',
    textAlign: 'center',
    paddingVertical: 20,
  },
  horizontalListContent: {
    paddingLeft: 24,
  },
});

export default memo(GetStartedSection);
