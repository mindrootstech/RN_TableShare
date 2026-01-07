import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import OnBoarding from '../screens/auth/onboarding';
import { ColorsApp } from '../utilities/colors';
import Login from '../screens/auth/login';
import SignUp from '../screens/auth/signUp';

export type AuthStackRoots = {
  Login: undefined;
  SignUp: undefined;
  OnBoarding: undefined;
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
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
