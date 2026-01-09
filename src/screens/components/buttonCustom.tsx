import React, { PropsWithChildren, ReactNode } from 'react';
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

type IPropsButtonGlobal = PropsWithChildren<{
  title?: string;
  style?: ViewStyle;
  styleTitle?: TextStyle;
  disabled?: boolean;
  onPress?: () => void;
  icon?: ReactNode;
  activeOpacity?: number;
}>;

// const ButtonCustom = ({
//   title,
//   style,
//   styleTitle,
//   disabled,
//   onPress,
//   image,
//   activeOpacity = 0.8,
// }: IPropsButtonGlobal) => {
//   return (
//     <TouchableOpacity
//       activeOpacity={activeOpacity}
//       style={[styles.buttonContainer, style]}
//       disabled={disabled}
//       onPress={() => {
//         // TriggerHaptic();
//         onPress && onPress();
//       }}
//     >
//       <View style={styles.containerName}>
//         {image ? image : null}
//         <Text allowFontScaling={false} style={[styles.title, styleTitle]}>
//           {title}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );
// };
const ButtonCustom = ({
  title,
  style,
  styleTitle,
  disabled,
  onPress,
  icon,
  activeOpacity = 0.8,
}: IPropsButtonGlobal) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={[styles.buttonContainer, style]}
      disabled={disabled}
      onPress={onPress}
    >
      <View style={styles.containerContent}>
        {icon && <View style={styles.iconWrapper}>{icon}</View>}
        <Text style={[styles.title, styleTitle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCustom;

// const styles = StyleSheet.create({
//   buttonContainer: {
//     backgroundColor: ColorsApp.green,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row',
//     borderRadius: 30,
//     height: 52,
//     marginHorizontal: 35,
//   },
//   containerName: {
//     width: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
//   title: {
//     textAlign: 'center',
//     ...Fonts.fontNotoSansSemiBold16,
//     color: ColorsApp.white,
//     height: '100%',
//     width: '100%',
//   },
// });

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: ColorsApp.green,
    borderRadius: 30,
    height: 52,
    marginHorizontal: 35,
    justifyContent: 'center',
  },

  containerContent: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconWrapper: {
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    ...Fonts.fontNotoSansSemiBold16,
    color: ColorsApp.white,
  },
});
