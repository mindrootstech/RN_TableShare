import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HighlightedText, { Highlight } from 'react-native-highlighter';
import { SafeAreaView } from 'react-native-safe-area-context';

import Images from '../../../assets';
import {
  activeOpacityTouchable,
  spaceLeftRight,
} from '../../../common/constants';
import { TranslationKeys } from '../../../i18n/language';
import { AuthStackRoots } from '../../../navigation/AuthNavigation';
import { ColorsApp } from '../../../utilities/colors';
import { Fonts } from '../../../utilities/fonts';
import ButtonCustom from '../../components/buttonCustom';
import TextInputCustom from '../../components/textInputCustom';
import ModalForgotPass from './components/modalForgotPass';

type Props = NativeStackScreenProps<AuthStackRoots, 'Login'>;
const Login = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const textHighlight = `Don’t have an account? Register Now`;
  const mainKeywords = new Highlight({
    keywords: ['Register Now'],
    style: {
      ...Fonts.fontNotoSansSemiBold12,
      color: ColorsApp.green,
    },
    onPress: () => navigation.navigate('SignUp'),
  });

  const onChangeTextEmail = (text: string) => {
    setEmail(text);
  };

  const onChangeTextPassword = (text: string) => {
    setPassword(text);
  };

  const onPressModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <ImageBackground source={Images.pngBgImage} style={styles.imgBG}>
      <SafeAreaView style={styles.container}>
        <View style={styles.containerHeading}>
          <Image
            resizeMode="contain"
            source={Images.pngThemeIcon}
            style={styles.imgLogo}
          />
          <Text style={styles.txtTitle}>{t(TranslationKeys.APP_NAME)}</Text>
        </View>

        <View style={styles.containerMain}>
          <Text style={styles.txtSubTitle}>
            {t(TranslationKeys.WELCOME_BACK)}
          </Text>
          <Text style={styles.txtDesc}>
            {t(TranslationKeys.SIGN_IN_TO_MANAGE)}
          </Text>
          <View style={styles.containerTxtInput}>
            <TextInputCustom
              label={t(TranslationKeys.EMAIL)}
              placeholder={t(TranslationKeys.ENTER_YOUR_EMAIL_ADD)}
              value={email}
              onChangeText={(text) => onChangeTextEmail(text)}
            />
            <TextInputCustom
              label={t(TranslationKeys.PASSWORD)}
              placeholder={t(TranslationKeys.ENTER_YOUR_PASS)}
              value={password}
              onChangeText={(text) => onChangeTextPassword(text)}
            />
          </View>
          <TouchableOpacity
            activeOpacity={activeOpacityTouchable}
            style={styles.btnForgotPass}
            onPress={onPressModal}
          >
            <Text style={styles.txtForgotPass}>
              {t(TranslationKeys.FORGOT_PASS)}
            </Text>
          </TouchableOpacity>
        </View>

        <ButtonCustom title={t(TranslationKeys.LOGIN)} />
        <HighlightedText
          highlights={[mainKeywords]}
          style={styles.containerRegisterNow}
        >
          {textHighlight}
        </HighlightedText>

        <ModalForgotPass isVisible={isModalVisible} onPress={onPressModal} />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  imgBG: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: spaceLeftRight,
  },
  containerHeading: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  imgLogo: {
    width: 45,
    height: 47,
  },
  txtTitle: {
    ...Fonts.fontNotoSansSemiBold24,
    color: ColorsApp.green,
  },
  containerMain: {
    flex: 0.9,
    marginTop: 59,
  },
  txtSubTitle: {
    textAlign: 'center',
    ...Fonts.fontNotoSansSemiBold18,
    color: ColorsApp.green,
  },
  txtDesc: {
    marginTop: 7,
    paddingHorizontal: 37,
    textAlign: 'center',
    ...Fonts.fontNotoSansRegular12,
    color: ColorsApp.black17,
  },
  containerTxtInput: {
    marginTop: 40,
    gap: 15,
  },
  btnForgotPass: {
    marginTop: 10,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtForgotPass: {
    ...Fonts.fontNotoSansMedium12,
    color: ColorsApp.green,
  },
  containerRegisterNow: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    ...Fonts.fontNotoSansRegular12,
  },
});
