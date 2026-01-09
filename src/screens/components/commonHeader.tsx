import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import Images from '../../assets';
import { ColorsApp } from '../../utilities/colors';
import { Fonts } from '../../utilities/fonts';
import { activeOpacityTouchable } from '../../common/constants';

export type CommonHeaderProps = {
  title?: string;
  showRightIcon?: boolean;
  showLeftIcon?: boolean;
  onPressLeft?: () => void;
  onPressRight?: () => void;
  leftIcon?: any;
  rightIcon?: any;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  stylesRightIcon?: any;
  containerRightIcon?: any;
  disableLeftIcon?: boolean;
};
export default function CommonHeader({
  title,
  showRightIcon,
  showLeftIcon = true,
  onPressLeft,
  onPressRight,
  leftIcon,
  rightIcon,
  containerStyle,
  titleStyle,
  stylesRightIcon,
  containerRightIcon,
  disableLeftIcon,
}: CommonHeaderProps) {
  const navigation = useNavigation();
  const onPressBack = () => {
    if (onPressLeft) {
      onPressLeft();
      return;
    }
    navigation.goBack();
  };
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.containerSide}>
        {showLeftIcon && (
          <TouchableOpacity
            disabled={disableLeftIcon}
            style={styles.containerBackIcon}
            onPress={onPressBack}
            activeOpacity={activeOpacityTouchable}
          >
            <Image
              resizeMode="contain"
              style={styles.iconStyle}
              source={leftIcon || Images.pngBackIcon}
            />
          </TouchableOpacity>
        )}
      </View>

      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <View style={styles.containerSide}>
        {showRightIcon ? (
          <TouchableOpacity
            style={containerRightIcon}
            onPress={onPressRight}
            activeOpacity={activeOpacityTouchable}
          >
            <Image
              style={[styles.iconStyle, stylesRightIcon]}
              source={rightIcon || Images.pngCart}
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.iconStyle} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerSide: {
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBackIcon: {
    height: 36,
    width: 36,
    borderRadius: 25,
    backgroundColor: ColorsApp.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    width: 6,
    height: 12,
  },
  title: {
    ...Fonts.fontNotoSansSemiBold14,
    color: ColorsApp.txtDescColor,
  },
});
