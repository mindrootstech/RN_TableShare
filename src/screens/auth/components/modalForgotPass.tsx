import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Images from '../../../assets';
import { activeOpacityTouchable } from '../../../common/constants';
import { TranslationKeys } from '../../../i18n/language';
import { ColorsApp } from '../../../utilities/colors';
import { Fonts } from '../../../utilities/fonts';
import { StylesG } from '../../../utilities/stylesG';
import ButtonCustom from '../../components/buttonCustom';
import TextInputCustom from '../../components/textInputCustom';

type Props = {
  isVisible: boolean;
  onPress: () => void;
};

const ModalForgotPass = ({ isVisible, onPress }: Props) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState<string>('');

  const onChangeTextEmail = (text: string) => {
    setEmail(text);
  };

  return (
    <Modal visible={isVisible} transparent animationType="slide">
      <View style={styles.container}>
        <View style={[styles.containerMain, StylesG.shadowStyle]}>
          <TouchableOpacity
            hitSlop={30}
            activeOpacity={activeOpacityTouchable}
            style={styles.btnCross}
            onPress={onPress}
          >
            <Images.svgCrossIcon />
          </TouchableOpacity>
          <Text style={styles.txtTitle}>
            {t(TranslationKeys.FORGOT_PASSWORD)}
          </Text>
          <Text style={styles.txtDesc}>
            {t(TranslationKeys.ENTER_YOUR_EMAIL_TO_RECE)}
          </Text>
          <View style={styles.containerTxtInput}>
            <TextInputCustom
              label={t(TranslationKeys.EMAIL)}
              placeholder={t(TranslationKeys.ENTER_YOUR_EMAIL_ADD)}
              value={email}
              onChangeText={text => onChangeTextEmail(text)}
            />
            <ButtonCustom
              title={t(TranslationKeys.RESET_PASSWORD)}
              style={styles.btnResetPass}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalForgotPass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorsApp.blur,
  },
  containerMain: {
    position: 'absolute',
    bottom: 0,
    paddingVertical: 23,
    paddingHorizontal: 20,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: ColorsApp.white,
  },
  btnCross: {
    position: 'absolute',
    right: 12,
    top: 12,
    height: 30,
    width: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ColorsApp.white,
    shadowColor: '#00001A',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
  },
  txtTitle: {
    ...Fonts.fontNotoSansSemiBold14,
  },
  txtDesc: {
    marginTop: 7,
    ...Fonts.fontNotoSansRegular12,
  },
  containerTxtInput: {
    marginTop: 20,
    gap: 31,
  },
  btnResetPass: {
    marginBottom: 10,
  },
});
