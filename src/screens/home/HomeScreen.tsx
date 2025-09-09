import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';
import { useHomeScreenData } from '../../hooks/useApiData';
import { getTimeBasedGreeting } from '../../utils/greetings.utils';
import {
  HomeHeader,
  PremiumBanner,
  QuestionCard,
  CategoryCard,
} from '../../components';
import type { Category, Question } from '../../types/api.types';

const HomeScreen: React.FC = () => {
  const { questions, categories } = useHomeScreenData();

  const greeting = getTimeBasedGreeting();

  // TODO: navigate to question details
  const handleQuestionPress = (question: Question) => {
    console.log('Question pressed:', question.title);
  };
  // TODO: navigate to category details
  const handleCategoryPress = (category: Category) => {
    console.log('Category pressed:', category.title);
  };
  // TODO: navigate to premium/paywall
  const handlePremiumPress = () => {
    console.log('Premium banner pressed');
  };
  // TODO: implement search functionality, debounce etc
  const handleSearchChange = (text: string) => {
    console.log('Search query:', text);
  };

  const renderQuestionItem = ({ item }: { item: Question }) => (
    <QuestionCard item={item} onPress={handleQuestionPress} />
  );
  const renderCategoryItem = ({
    item,
    index,
  }: {
    item: Category;
    index: number;
  }) => (
    <CategoryCard item={item} index={index} onPress={handleCategoryPress} />
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <HomeHeader greeting={greeting} onSearchChange={handleSearchChange} />
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <PremiumBanner onPress={handlePremiumPress} />
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Get Started</Text>
            {questions.isLoading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="small" color="#28AF6E" />
              </View>
            ) : questions.error ? (
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
          <View style={styles.categoriesSection}>
            {categories.isLoading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="small" color="#28AF6E" />
              </View>
            ) : categories.error ? (
              <Text style={styles.errorText}>Failed to load categories</Text>
            ) : (
              <FlashList
                data={categories.data?.data || []}
                renderItem={renderCategoryItem}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
              />
            )}
          </View>
        </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    marginTop: 6,
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
  horizontalListContent: {
    paddingLeft: 24,
  },
  categoriesSection: {
    marginHorizontal: 24,
    marginTop: 8,
  },
});

export default HomeScreen;
