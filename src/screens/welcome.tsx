import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StyleSheet, Text } from 'react-native';
import Images from '../assets';
import { TranslationKeys } from '../i18n/language';
import { ColorsApp } from '../utilities/colors';
import { Fonts } from '../utilities/fonts';
import BaseView from './components/baseView';
import AppNavigation from '../navigation/AppNavigation';
import AuthNavigation from '../navigation/AuthNavigation';
import { useSelector } from 'react-redux';
import { authSelector, loadAuthData } from '../redux/slices/authSlice';
import { useAppDispatch } from '../redux/reduxStore';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type MainStackRoots = {
  AuthNavigation: undefined;
  AppNavigation: undefined;
  SplashScreen: undefined;
};

type Props = NativeStackScreenProps<MainStackRoots, 'SplashScreen'>;

const SplashScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const { authToken, isLoggedIn } = useSelector(authSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadAuthData());
    const timer = setTimeout(() => {
      if (authToken && isLoggedIn) {
        navigation.replace('AppNavigation');
      } else {
        navigation.replace('AuthNavigation');
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <BaseView showHeader={false} contentContainerStyle={styles.container}>
      <Image source={Images.pngThemeIcon} style={styles.imgLogo} />
      <Text style={styles.txtName}>{t(TranslationKeys.APP_NAME)}</Text>
    </BaseView>
  );
};

const Welcome = () => {
  const MainStack = createStackNavigator<MainStackRoots>();
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{ headerShown: false, animation: 'reveal_from_bottom' }}
        initialRouteName={'SplashScreen'}
      >
        <MainStack.Screen name="SplashScreen" component={SplashScreen} />
        <MainStack.Screen name="AuthNavigation" component={AuthNavigation} />
        <MainStack.Screen name="AppNavigation" component={AppNavigation} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  imgLogo: {
    height: 47,
    width: 45,
  },
  txtName: {
    ...Fonts.fontNotoSansSemiBold24,
    color: ColorsApp.green,
  },
});
