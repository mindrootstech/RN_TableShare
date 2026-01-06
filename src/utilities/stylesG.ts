import { StyleSheet } from 'react-native';
import { ColorsApp } from './colors';

export const StylesG = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorsApp.theme,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
