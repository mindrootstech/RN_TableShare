import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Alert,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HighlightedText, { Highlight } from 'react-native-highlighter';
import { SafeAreaView } from 'react-native-safe-area-context';

import Images from '../../../assets';
import { arrSignUpFields, spaceLeftRight } from '../../../common/constants';
import { TranslationKeys } from '../../../i18n/language';
import { ColorsApp } from '../../../utilities/colors';
import { Fonts } from '../../../utilities/fonts';
import ButtonCustom from '../../components/buttonCustom';
import TextInputCustom from '../../components/textInputCustom';

const SignUp = () => {
  const { t } = useTranslation();
  const [form, setForm] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const textHighlight = `By creating an account you agree to Tableshare terms & Conditions.`;
  const mainKeywords = new Highlight({
    keywords: ['Tableshare terms & Conditions.'],
    style: {
      ...Fonts.fontNotoSansSemiBold12,
      color: ColorsApp.green,
      textDecorationLine: 'underline',
    },
    onPress: keyword => Alert.alert(keyword),
  });

  const onChangeText = (key: string, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  return (
    <ImageBackground source={Images.pngBgImage} style={styles.imgBG}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={styles.scrollContent}
          >
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
                {t(TranslationKeys.SIGN_UP)}
              </Text>
              <Text style={styles.txtDesc}>
                {t(TranslationKeys.REGISTER_YOUR_BUISNESS_AS_A_LOCAL)}
              </Text>
              <View style={styles.containerTxtInput}>
                {arrSignUpFields.map(field => {
                  const isPassword = field.key === 'password';
                  const isConfirmPassword = field.key === 'confirmPassword';

                  return (
                    <TextInputCustom
                      key={field.key}
                      label={field.label}
                      placeholder={field.placeholder}
                      value={form[field.key as keyof typeof form]}
                      onChangeText={text => onChangeText(field.key, text)}
                      keyboardType={field.keyboardType}
                      secureTextEntry={
                        isPassword
                          ? !showPassword
                          : isConfirmPassword
                          ? !showConfirmPassword
                          : field.secureTextEntry
                      }
                    />
                  );
                })}
                <TouchableOpacity
                  style={styles.btnEyeShowPass}
                  onPress={() => {
                    Keyboard.dismiss();
                    setShowPassword(prev => !prev);
                  }}
                >
                  <Images.svgEye />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btnEyeConfirmPass}
                  onPress={() => {
                    Keyboard.dismiss();
                    setShowConfirmPassword(prev => !prev);
                  }}
                >
                  <Images.svgEye />
                </TouchableOpacity>
              </View>

              <HighlightedText
                highlights={[mainKeywords]}
                style={styles.containerTerms}
              >
                {textHighlight}
              </HighlightedText>
              <ButtonCustom
                title={t(TranslationKeys.REGISTER_NOW)}
                style={styles.btnRegisterNow}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  imgBG: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: spaceLeftRight,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  containerHeading: {
    marginTop: 42,
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
    marginTop: 39,
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
    marginTop: 30,
    gap: 15,
  },
  btnEyeShowPass: {
    position: 'absolute',
    bottom: '20%',
    right: 15,
  },
  btnEyeConfirmPass: {
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
  containerTerms: {
    lineHeight: 20,
    paddingRight: 30,
    marginTop: 15,
    ...Fonts.fontNotoSansRegular12,
  },
  btnRegisterNow: {
    marginTop: 48,
  },
});
