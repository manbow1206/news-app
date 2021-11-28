import React from 'react';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import ArticleScreen from '../screens/ArticleScreen';
import ClipScreen from '../screens/ClipScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
      <Stack.Screen name="Article" component={ArticleScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

const ClipStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Clip" component={ClipScreen} />
    </Stack.Navigator>
  );
};

const scrrenOption = ({ route }) => {
  tabBarIcon: ({ color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = 'home';
    } else if (route.name === 'Clip') {
      iconName = 'bookmark';
    }
    return <FontAwesome name={iconName} size={size} color={color} />;
  };
};

export default AppNavogator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={scrrenOption}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Clip"
          component={ClipStack}
          options={{
            tabBarLabel: 'Clip',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="paperclip"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
