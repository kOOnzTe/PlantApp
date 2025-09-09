import type { CompositeScreenProps } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  OnboardingStack: undefined;
  MainTabs: undefined;
  Paywall: undefined;
};

export type OnboardingStackParamList = {
  Welcome: undefined;
  OnboardingSlides: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Diagnose: undefined;
  Scan: undefined;
  Garden: undefined;
  Profile: undefined;
};

export type OnboardingStackScreenProps<
  Screen extends keyof OnboardingStackParamList,
> = CompositeScreenProps<
  StackScreenProps<OnboardingStackParamList, Screen>,
  StackScreenProps<RootStackParamList>
>;

export interface WelcomeScreenProps
  extends OnboardingStackScreenProps<'Welcome'> {}

export interface OnboardingSlidesScreenProps
  extends OnboardingStackScreenProps<'OnboardingSlides'> {}

export interface PaywallScreenProps
  extends StackScreenProps<RootStackParamList, 'Paywall'> {}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
