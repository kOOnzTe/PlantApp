import { configureStore } from '@reduxjs/toolkit';
import onboardingReducer, {
  completeOnboarding,
  resetOnboarding,
} from '../src/store/slices/onboardingSlice';
import {
  OnboardingState,
  OnboardingSliceTestState,
} from '../src/types/store.types';

type TestStore = ReturnType<typeof configureStore<OnboardingSliceTestState>>;

describe('Onboarding Slice', () => {
  let store: TestStore;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        onboarding: onboardingReducer,
      },
    });
  });

  it('should handle initial state', () => {
    const state = store.getState();
    const expectedInitialState: OnboardingState = {
      isFirstTime: true,
    };

    expect(state.onboarding).toEqual(expectedInitialState);
    expect(state.onboarding.isFirstTime).toBe(true);
  });

  it('should handle completeOnboarding action', () => {
    let state = store.getState();
    expect(state.onboarding.isFirstTime).toBe(true);

    store.dispatch(completeOnboarding());
    state = store.getState();
    expect(state.onboarding.isFirstTime).toBe(false);
  });
  it('should handle resetOnboarding action', () => {
    store.dispatch(completeOnboarding());
    let state = store.getState();
    expect(state.onboarding.isFirstTime).toBe(false);

    store.dispatch(resetOnboarding());
    state = store.getState();
    expect(state.onboarding.isFirstTime).toBe(true);
  });
});
