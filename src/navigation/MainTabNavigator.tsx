import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainTabParamList } from '../types/navigation.types';
import { getTabIconSource } from '../utils/assets.utils';
import HomeScreen from '../screens/home/HomeScreen';
import DiagnoseScreen from '../screens/home/DiagnoseScreen';
import ScanScreen from '../screens/home/ScanScreen';
import GardenScreen from '../screens/home/GardenScreen';
import ProfileScreen from '../screens/home/ProfileScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

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
          tabBarBackground: () => <View style={styles.tabBarBackground} />,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) => (
              <Image
                source={getTabIconSource('homeIcon')}
                style={[
                  styles.tabIcon,
                  { tintColor: focused ? '#28AF6E' : '#ABABAB' },
                ]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Diagnose"
          component={DiagnoseScreen}
          options={{
            tabBarLabel: 'Diagnose',
            tabBarIcon: ({ focused }) => (
              <Image
                source={getTabIconSource('diagnoseIcon')}
                style={[
                  styles.tabIcon,
                  { tintColor: focused ? '#28AF6E' : '#ABABAB' },
                ]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Scan"
          component={ScanScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ focused }) => (
              <View
                style={[
                  styles.scanButtonContainer,
                  { backgroundColor: focused ? '#5cc994' : '#28AF6E' },
                ]}
              >
                <Image
                  source={getTabIconSource('scanIcon')}
                  style={[styles.scanIcon, { tintColor: '#FFFFFF' }]}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Garden"
          component={GardenScreen}
          options={{
            tabBarLabel: 'My Garden',
            tabBarIcon: ({ focused }) => (
              <Image
                source={getTabIconSource('gardenIcon')}
                style={[
                  styles.tabIcon,
                  { tintColor: focused ? '#28AF6E' : '#ABABAB' },
                ]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ focused }) => (
              <Image
                source={getTabIconSource('profileIcon')}
                style={[
                  styles.tabIcon,
                  { tintColor: focused ? '#28AF6E' : '#ABABAB' },
                ]}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFFFFF',
    // borderTopWidth: 0,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    height: 90,
    // paddingBottom: 20,
    paddingTop: 10,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginBottom: 3,
  },
  tabBarBackground: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  tabBarLabel: {
    fontSize: 12,
    fontFamily: 'Rubik-Medium',
    marginTop: 3,
  },
  tabIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  scanButtonContainer: {
    width: 78,
    height: 78,
    backgroundColor: '#28AF6E',
    borderWidth: 5,
    borderColor: '#5cc994',
    borderRadius: 39,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#28AF6E',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  scanIcon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
});

export default MainTabNavigator;
