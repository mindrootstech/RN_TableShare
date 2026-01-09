import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  activeOpacityTouchable,
  arrDietaryPerf,
  spaceLeftRight,
} from '../../../../common/constants';
import { ColorsApp } from '../../../../utilities/colors';
import { Fonts } from '../../../../utilities/fonts';
import ModalCommon from '../../../components/modalCommon';
import ItemDietaryOptions from './itemDietaryOptions';
import Images from '../../../../assets';
import { StylesG } from '../../../../utilities/stylesG';

type Props = {
  isVisible: boolean;
  onPress: () => void;
};

const ModalDietaryPref = ({ isVisible, onPress }: Props) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  return (
    <ModalCommon
      isVisible={isVisible}
      onClose={onPress}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0.6}
      containerModal={styles.containerModal}
    >
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={activeOpacityTouchable}
          style={[styles.btnCross, StylesG.shadowModal]}
          onPress={onPress}
        >
          <Images.svgCrossIcon height={13} width={13} hitSlop={20} />
        </TouchableOpacity>
        <Text style={styles.txtTitle}>Dietary Prefrences</Text>
        <View style={styles.containerPrefrences}>
          {arrDietaryPerf.map((item) => (
            <ItemDietaryOptions
              key={item.id}
              item={item}
              isSelected={item.id === selectedOption}
              onPress={() => setSelectedOption(item.id)}
            />
          ))}
        </View>
      </View>
    </ModalCommon>
  );
};

export default ModalDietaryPref;

const styles = StyleSheet.create({
  containerModal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  container: {
    paddingHorizontal: spaceLeftRight + 3,
    backgroundColor: ColorsApp.theme,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingBottom: 44,
  },
  btnCross: {
    position: 'absolute',
    right: 15,
    top: 15,
    height: 30,
    width: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ColorsApp.white,
  },
  txtTitle: {
    paddingTop: 20,
    alignSelf: 'center',
    ...Fonts.fontNotoSansSemiBold14,
  },
  containerPrefrences: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    paddingVertical: 8,
  },
});
