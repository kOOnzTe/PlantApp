import React, { useState, useCallback } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';
import { useHomeScreenData } from '../../hooks/useApiData';
import { getTimeBasedGreeting } from '../../utils/greetings.utils';
import {
  HomeHeader,
  CategoryCard,
  GetStartedSection,
  CategoriesEmptyState,
} from '../../components';
import type { Category, Question } from '../../types/api.types';

const HomeScreen: React.FC = () => {
  const { questions, categories } = useHomeScreenData();
  const [searchValue, setSearchValue] = useState<string>('');

  const greeting = getTimeBasedGreeting();

  // TODO: navigate to question details
  const handleQuestionPress = useCallback((question: Question) => {
    console.log('Question pressed:', question.title);
  }, []);
  // TODO: navigate to category details
  const handleCategoryPress = useCallback((category: Category) => {
    console.log('Category pressed:', category.title);
  }, []);
  // TODO: navigate to premium/paywall
  const handlePremiumPress = useCallback(() => {
    console.log('Premium banner pressed');
  }, []);

  // TODO: implement search functionality, debounce etc
  const handleSearchChange = useCallback((text: string) => {
    setSearchValue(text);
    console.log('Search query:', text);
  }, []);

  // TODO: isAnyLoading -global loading screen- and hasAnyError -global error screen- (from useApiData) screens could be added here

  const renderCategoryItem = useCallback(
    ({ item, index }: { item: Category; index: number }) => (
      <CategoryCard item={item} index={index} onPress={handleCategoryPress} />
    ),
    [handleCategoryPress],
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <HomeHeader
          greeting={greeting}
          searchValue={searchValue}
          onSearchChange={handleSearchChange}
        />
        <View style={styles.mainContent}>
          {categories.data?.data && categories.data.data.length > 0 ? (
            <FlashList
              data={categories.data.data}
              renderItem={renderCategoryItem}
              keyExtractor={item => item.id.toString()}
              numColumns={2}
              ListHeaderComponent={
                <GetStartedSection
                  questions={questions}
                  onPremiumPress={handlePremiumPress}
                  onQuestionPress={handleQuestionPress}
                />
              }
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.mainListContent}
              ListHeaderComponentStyle={styles.listHeader}
            />
          ) : (
            <FlashList
              data={[]}
              renderItem={() => null}
              keyExtractor={() => 'empty'}
              ListHeaderComponent={
                <GetStartedSection
                  questions={questions}
                  onPremiumPress={handlePremiumPress}
                  onQuestionPress={handleQuestionPress}
                />
              }
              ListEmptyComponent={
                <View style={styles.categoriesSection}>
                  <CategoriesEmptyState
                    isLoading={categories.isLoading}
                    error={categories.isError}
                  />
                </View>
              }
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFAFA',
  },
  safeArea: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    marginTop: 6,
  },
  categoriesSection: {
    marginHorizontal: 24,
    marginTop: 8,
  },
  mainListContent: {
    paddingHorizontal: 24,
  },
  listHeader: {
    marginHorizontal: -24,
    marginBottom: 8,
  },
});

export default HomeScreen;
