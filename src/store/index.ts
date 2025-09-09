export { store, persistor } from './store';
export type { RootState, AppDispatch } from './store';
export type { OnboardingState } from '../types/store.types';

export { completeOnboarding, resetOnboarding } from './slices/onboardingSlice';

export { useGetCategoriesQuery, useGetQuestionsQuery } from './api/plantsApi';

export {
  useAppDispatch,
  useAppSelector,
  useIsFirstTime,
} from '../hooks/store.hooks';
