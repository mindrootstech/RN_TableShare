import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';

import Images from '../assets';
import { TranslationKeys } from '../i18n/language';
import { ColorsApp } from '../utilities/colors';
import { Fonts } from '../utilities/fonts';
import BaseView from './components/baseView';
import { selectUserOptions } from '../redux/reducers/authSlice';
import AppNavigation from '../navigation/AppNavigation';
import AuthNavigation from '../navigation/AuthNavigation';

const Welcome = () => {
  const { t } = useTranslation();
  const { authToken, showDashboard } = useSelector(selectUserOptions);
  const [showSplash, setShowSplash] = useState<boolean>(true);

  console.log('authToken', authToken);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!showSplash) {
    if (authToken && showDashboard === true) {
      return <AppNavigation />;
    }
    return <AuthNavigation />;
  }

  return (
    <BaseView showHeader={false} contentContainerStyle={styles.container}>
      <Image source={Images.pngThemeIcon} style={styles.imgLogo} />
      <Text style={styles.txtName}>{t(TranslationKeys.APP_NAME)}</Text>
    </BaseView>
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
