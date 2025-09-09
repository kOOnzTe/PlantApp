import { useGetCategoriesQuery, useGetQuestionsQuery } from '../store';

export const useHomeScreenData = () => {
  const questionsQuery = useGetQuestionsQuery();
  const categoriesQuery = useGetCategoriesQuery();

  return {
    questions: {
      data: questionsQuery.data,
      isLoading: questionsQuery.isLoading,
      error: questionsQuery.error,
      isError: questionsQuery.isError,
    },
    categories: {
      data: categoriesQuery.data,
      isLoading: categoriesQuery.isLoading,
      error: categoriesQuery.error,
      isError: categoriesQuery.isError,
    },
    isAnyLoading: questionsQuery.isLoading || categoriesQuery.isLoading,
    hasAnyError: questionsQuery.isError || categoriesQuery.isError,
    isAllLoaded: !questionsQuery.isLoading && !categoriesQuery.isLoading,
  };
};
