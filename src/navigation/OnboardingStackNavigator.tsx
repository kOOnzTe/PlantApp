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
        cardStyle: { backgroundColor: '#FFFFFF' },
        gestureEnabled: false, // disable back gesture
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          cardStyleInterpolator: ({ current, layouts }) => ({
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          }),
        }}
      />
      <Stack.Screen
        name="OnboardingSlides"
        component={OnboardingSlidesScreen}
        options={{
          cardStyleInterpolator: ({ current, layouts }) => ({
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          }),
        }}
      />
    </Stack.Navigator>
  );
};

export default OnboardingStackNavigator;
