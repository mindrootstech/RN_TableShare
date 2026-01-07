import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {
  HEIGHT_SCREEN,
  spaceLeftRight,
  WIDTH_SCREEN,
} from '../../../../common/constants';
import { TranslationKeys } from '../../../../i18n/language';
import { IArrOnBoardingData } from '../../../../modelTypeScript';
import { ColorsApp } from '../../../../utilities/colors';
import { Fonts } from '../../../../utilities/fonts';
import ButtonCustomOnBoarding from '../../../components/buttonCustomOnBoarding';

type Props = {
  item: IArrOnBoardingData;
  index: number;
  scrollX: SharedValue<number>;
  onPressNext: () => void;
};

const ItemOnboardingList = ({ item, index, scrollX, onPressNext }: Props) => {
  const { t } = useTranslation();
  const inputRange = [
    (index - 1) * WIDTH_SCREEN,
    index * WIDTH_SCREEN,
    (index + 1) * WIDTH_SCREEN,
  ];

  const imageStyle = useAnimatedStyle(() => ({
    opacity: interpolate(scrollX.value, inputRange, [0, 1, 0]),
    transform: [
      {
        translateY: interpolate(
          scrollX.value,
          inputRange,
          [-HEIGHT_SCREEN / 3, 0, -HEIGHT_SCREEN / 3],
          'clamp',
        ),
      },
    ],
  }));

  const textStyle = useAnimatedStyle(() => ({
    opacity: interpolate(scrollX.value, inputRange, [0, 1, 0]),
    transform: [
      {
        translateY: interpolate(scrollX.value, inputRange, [30, 0, 30]),
      },
    ],
  }));

  const buttonNextStyle = useAnimatedStyle(() => ({
    opacity: interpolate(scrollX.value, inputRange, [0, 1, 0], 'clamp'),
    transform: [
      {
        translateY: interpolate(
          scrollX.value,
          inputRange,
          [40, 0, 40],
          'clamp',
        ),
      },
    ],
  }));

  const buttonSkipStyle = useAnimatedStyle(() => ({
    opacity: interpolate(scrollX.value, inputRange, [0, 1, 0], 'clamp'),
    transform: [
      {
        translateY: interpolate(
          scrollX.value,
          inputRange,
          [55, 0, 55],
          'clamp',
        ),
      },
    ],
  }));

  return (
    <View style={{ width: WIDTH_SCREEN }}>
      <Animated.View style={[styles.containerImage, imageStyle]}>
        <Image resizeMode="contain" source={item.image} style={styles.img} />
      </Animated.View>

      <Animated.View style={[styles.containerMain, textStyle]}>
        <Text style={styles.txtTitle}>{item.title}</Text>
        <Text style={styles.txtDesc}>{item.desc}</Text>
      </Animated.View>

      <Animated.View style={buttonNextStyle}>
        <ButtonCustomOnBoarding
          title={t(TranslationKeys.NEXT)}
          style={styles.btnNext}
          onPress={onPressNext}
        />
      </Animated.View>

      {item.id !== 3 && (
        <Animated.View style={buttonSkipStyle}>
          <TouchableOpacity style={styles.btnSkip}>
            <Text style={styles.txtSkip}>{t(TranslationKeys.SKIP)}</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

export default ItemOnboardingList;

const styles = StyleSheet.create({
  containerImage: {
    height: HEIGHT_SCREEN / 1.8,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  containerMain: {
    paddingHorizontal: spaceLeftRight + 3,
    alignItems: 'center',
  },
  txtTitle: {
    marginTop: 65,
    ...Fonts.fontNotoSansSemiBold25,
    color: ColorsApp.green,
  },
  txtDesc: {
    marginTop: 8,
    paddingHorizontal: 20,
    ...Fonts.fontNotoSansRegular16,
    textAlign: 'center',
  },
  btnNext: {
    alignSelf: 'center',
    width: 260,
    marginTop: 44,
  },
  btnSkip: {
    alignSelf: 'center',
    marginTop: 14,
  },
  txtSkip: {
    ...Fonts.fontNotoSansSemiBold14,
    color: ColorsApp.green,
  },
});
