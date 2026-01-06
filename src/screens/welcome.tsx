import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StyleSheet, Text } from 'react-native';

import Images from '../assets';
import { TranslationKeys } from '../i18n/language';
import { ColorsApp } from '../utilities/colors';
import { Fonts } from '../utilities/fonts';
import BaseView from './components/baseView';

const Welcome = () => {
  const { t } = useTranslation();

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
