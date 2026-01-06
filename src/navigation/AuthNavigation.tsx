import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import OnBoarding from '../screens/auth/onboarding';
import { ColorsApp } from '../utilities/colors';

export type AuthStackRoots = {
  InitialScreen: undefined;
};

const Stack = createStackNavigator<AuthStackRoots>();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      //  initialRouteName="Authentication"
      screenOptions={{
        headerBackAllowFontScaling: false,
        headerTitleAllowFontScaling: false,
        gestureEnabled: true,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: ColorsApp.theme,
          shadowColor: 'transparent',
          elevation: 0,
        },
        headerTintColor: '#FFF',
      }}
    >
      <Stack.Screen
        name="InitialScreen"
        component={OnBoarding}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
