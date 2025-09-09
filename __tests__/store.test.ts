import { configureStore, combineReducers } from '@reduxjs/toolkit';
import onboardingReducer from '../src/store/slices/onboardingSlice';
import { plantsApi } from '../src/store/api/plantsApi';
import type { OnboardingState } from '../src/types/store.types';
type TestRootState = {
  onboarding: OnboardingState;
  plantsApi: ReturnType<typeof plantsApi.reducer>;
};

type TestStore = ReturnType<typeof configureStore<TestRootState>>;

describe('Redux Store', () => {
  let store: TestStore;

  beforeEach(() => {
    // store without persistence
    const rootReducer = combineReducers({
      onboarding: onboardingReducer,
      [plantsApi.reducerPath]: plantsApi.reducer,
    });
    store = configureStore({
      reducer: rootReducer,
      middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(plantsApi.middleware),
    });
  });

  it('should create store with correct initial state', () => {
    const state = store.getState();

    expect(state).toBeDefined();
    expect(state.onboarding).toBeDefined();
    expect(state.onboarding.isFirstTime).toBe(true);
    expect(state.plantsApi).toBeDefined();
  });

  it('should have the expected reducer keys', () => {
    const state = store.getState();
    const expectedKeys = ['onboarding', 'plantsApi'];

    expect(Object.keys(state)).toEqual(expect.arrayContaining(expectedKeys));
    expect(Object.keys(state)).toHaveLength(2);
  });

  it('should properly integrate with RTK Query', () => {
    const state = store.getState();

    expect(state.plantsApi.queries).toEqual({});
    expect(state.plantsApi.mutations).toEqual({});
  });
});
