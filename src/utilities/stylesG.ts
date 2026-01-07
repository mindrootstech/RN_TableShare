import { Platform, StyleSheet } from 'react-native';
import { ColorsApp } from './colors';

const isIOS = Platform.OS === 'ios';

export const StylesG = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorsApp.theme,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadowStyle: isIOS
    ? {
        shadowColor: '#00000070',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      }
    : {
        elevation: 8,
      },
});
