import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import OnBoarding from '../screens/auth/onboarding';
import { ColorsApp } from '../utilities/colors';
import Login from '../screens/auth/login';
import SignUp from '../screens/auth/signUp';
import { useSelector } from 'react-redux';
import { authSelector } from '../redux/slices/authSlice';

export type AuthStackRoots = {
  Login: undefined;
  SignUp: undefined;
  OnBoarding: undefined;
};

const Stack = createStackNavigator<AuthStackRoots>();

const AuthNavigation = () => {
  const { isOnBoarding } = useSelector(authSelector);
  return (
    <Stack.Navigator
      initialRouteName={isOnBoarding ? 'OnBoarding' : 'Login'}
      screenOptions={{
        headerBackAllowFontScaling: false,
        headerTitleAllowFontScaling: false,
        gestureEnabled: true,
        headerShown: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: ColorsApp.theme,
          shadowColor: 'transparent',
          elevation: 0,
        },
        headerTintColor: ColorsApp.white,
      }}
    >
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
