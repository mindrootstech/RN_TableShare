import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Images from '../../../../assets';
import { activeOpacityTouchable } from '../../../../common/constants';
import { TranslationKeys } from '../../../../i18n/language';
import { StylesG } from '../../../../utilities/stylesG';
import ButtonCustom from '../../../components/buttonCustom';
import ModalCommon from '../../../components/modalCommon';
import TextInputCustom from '../../../components/textInputCustom';
import { ColorsApp } from '../../../../utilities/colors';
import { Fonts } from '../../../../utilities/fonts';

type Props = {
  isVisible: boolean;
  onPress: () => void;
};

const ModalForgotPass = ({ isVisible, onPress }: Props) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  return (
    <ModalCommon
      isVisible={isVisible}
      onClose={onPress}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0.6}
      containerModal={styles.containerModal}
    >
      <View style={[styles.containerMain, StylesG.shadowStyle]}>
        <TouchableOpacity
          activeOpacity={activeOpacityTouchable}
          style={[styles.btnCross, StylesG.shadowModal]}
          onPress={onPress}
        >
          <Images.svgCrossIcon height={13} width={13} hitSlop={20} />
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
            onChangeText={setEmail}
          />
          <ButtonCustom
            title={t(TranslationKeys.RESET_PASSWORD)}
            style={styles.btnResetPass}
          />
        </View>
      </View>
    </ModalCommon>
  );
};

export default ModalForgotPass;

const styles = StyleSheet.create({
  containerModal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  containerMain: {
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
