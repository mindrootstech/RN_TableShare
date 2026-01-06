import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import 'react-native-gesture-handler';
import Home from '../screens/app/home/home';

export type AppStackRoots = {
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
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
