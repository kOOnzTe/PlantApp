import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { OnboardingStackParamList } from '../types/navigation.types';
import WelcomeScreen from '../screens/onboarding/WelcomeScreen';
import OnboardingSlidesScreen from '../screens/onboarding/OnboardingSlidesScreen';

const Stack = createStackNavigator<OnboardingStackParamList>();

const OnboardingStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen
        name="OnboardingSlides"
        component={OnboardingSlidesScreen}
      />
    </Stack.Navigator>
  );
};

export default OnboardingStackNavigator;
