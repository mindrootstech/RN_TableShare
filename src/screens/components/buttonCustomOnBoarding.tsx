import React, { PropsWithChildren } from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { ColorsApp } from '../../utilities/colors';
import { Fonts } from '../../utilities/fonts';
// import TriggerHaptic from '../../utilities/triggerHaptic';
import { LinearGradient } from 'react-native-linear-gradient';

type IPropsButtonGlobal = PropsWithChildren<{
  title?: string;
  style?: ViewStyle;
  styleTitle?: TextStyle;
  disabled?: boolean;
  showIndicator?: boolean;
  onPress?: () => void;
  image?: any;
  activeOpacity?: number;
}>;

const ButtonCustomOnBoarding = ({
  title,
  style,
  styleTitle,
  disabled,
  onPress,
  image,
  activeOpacity = 0.8,
}: IPropsButtonGlobal) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={[styles.buttonContainer, style]}
      disabled={disabled}
      onPress={() => {
        // TriggerHaptic();
        onPress && onPress();
      }}
    >
      <LinearGradient
        colors={[ColorsApp.greenDark, ColorsApp.greenDark, ColorsApp.green]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.containerLinearGradient}
      >
        <View style={styles.txtContainer}>
          {image ? image : null}
          <Text allowFontScaling={false} style={[styles.title, styleTitle]}>
            {title}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ButtonCustomOnBoarding;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: ColorsApp.white,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 30,
    height: 62,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    borderColor: ColorsApp.borderColor,
  },
  containerLinearGradient: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    height: 52,
  },
  txtContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    textAlign: 'center',
    ...Fonts.fontNotoSansSemiBold16,
    color: ColorsApp.white,
    height: '100%',
    width: '100%',
  },
});
