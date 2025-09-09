import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainTabParamList } from '../types/navigation.types';
import { TabIcon, ScanIcon } from '../components/home';
import HomeScreen from '../screens/home/HomeScreen';
import DiagnoseScreen from '../screens/home/DiagnoseScreen';
import ScanScreen from '../screens/home/ScanScreen';
import GardenScreen from '../screens/home/GardenScreen';
import ProfileScreen from '../screens/home/ProfileScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

const renderHomeIcon = ({ focused }: { focused: boolean }) => (
  <TabIcon iconName="homeIcon" focused={focused} />
);
const renderDiagnoseIcon = ({ focused }: { focused: boolean }) => (
  <TabIcon iconName="diagnoseIcon" focused={focused} />
);
const renderGardenIcon = ({ focused }: { focused: boolean }) => (
  <TabIcon iconName="gardenIcon" focused={focused} />
);
const renderProfileIcon = ({ focused }: { focused: boolean }) => (
  <TabIcon iconName="profileIcon" focused={focused} />
);

const renderScanIcon = ({ focused }: { focused: boolean }) => (
  <ScanIcon focused={focused} />
);

const MainTabNavigator: React.FC = () => {
  return (
    <SafeAreaProvider>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#28AF6E',
          tabBarInactiveTintColor: '#ABABAB',
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: renderHomeIcon,
          }}
        />
        <Tab.Screen
          name="Diagnose"
          component={DiagnoseScreen}
          options={{
            tabBarLabel: 'Diagnose',
            tabBarIcon: renderDiagnoseIcon,
          }}
        />
        <Tab.Screen
          name="Scan"
          component={ScanScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: renderScanIcon,
          }}
        />
        <Tab.Screen
          name="Garden"
          component={GardenScreen}
          options={{
            tabBarLabel: 'My Garden',
            tabBarIcon: renderGardenIcon,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: renderProfileIcon,
          }}
        />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFFFFF',
    marginBottom: 6,
  },
  tabBarLabel: {
    fontSize: 12,
    fontFamily: 'Rubik-Medium',
    marginTop: 3,
  },
});

export default MainTabNavigator;
