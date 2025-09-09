import { createSlice } from '@reduxjs/toolkit';
import { OnboardingState } from '../../types/store.types';

const initialState: OnboardingState = {
  isFirstTime: true,
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    completeOnboarding: state => {
      state.isFirstTime = false;
    },
    resetOnboarding: state => {
      state.isFirstTime = true;
    },
  },
});

export const { completeOnboarding, resetOnboarding } = onboardingSlice.actions;

export default onboardingSlice.reducer;
