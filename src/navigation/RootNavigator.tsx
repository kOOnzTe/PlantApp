import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation.types';
import { useIsFirstTime } from '../hooks';
import OnboardingStackNavigator from './OnboardingStackNavigator';
import PaywallScreen from '../screens/paywall/PaywallScreen';
// import MainTabNavigator from './MainTabNavigator'; // TODO: add

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  const isFirstTime = useIsFirstTime();

  const initialRouteName: keyof RootStackParamList = isFirstTime
    ? 'OnboardingStack'
    : 'MainTabs';

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#FFFFFF' },
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        name="OnboardingStack"
        component={OnboardingStackNavigator}
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
        name="Paywall"
        component={PaywallScreen}
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
      {/* <Stack.Screen
        name="MainTabs"
        component={MainTabNavigator}
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
      /> */}
    </Stack.Navigator>
  );
};

export default RootNavigator;
