import React, { memo } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

interface CategoriesEmptyStateProps {
  isLoading: boolean;
  error: boolean;
}

const CategoriesEmptyState: React.FC<CategoriesEmptyStateProps> = ({
  isLoading,
  error,
}) => {
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="small" color="#28AF6E" />
      </View>
    );
  }

  if (error) {
    return <Text style={styles.errorText}>Failed to load categories</Text>;
  }

  return null;
};

const styles = StyleSheet.create({
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
});

export default memo(CategoriesEmptyState);
