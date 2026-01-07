import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import 'react-native-gesture-handler';
import BottomTabsNavigation from './BottomTabNavigation';

type AppStackRoots = {
  BottomTabsNavigation: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<AppStackRoots>();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackAllowFontScaling: false,
        headerTitleAllowFontScaling: false,
        gestureEnabled: false,
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="BottomTabsNavigation"
        component={BottomTabsNavigation}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
