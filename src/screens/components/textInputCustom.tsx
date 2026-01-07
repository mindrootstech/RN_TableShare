import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { ColorsApp } from '../../utilities/colors';
import { Fonts } from '../../utilities/fonts';

interface ICustomTextInputProps extends TextInputProps {
  label?: string;
  value: string;
  onChangeText: (_text: string) => void;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
  error?: string;
}

const TextInputCustom: React.FC<ICustomTextInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType = 'default',
  returnKeyType,
  containerStyle,
  inputStyle,
  labelStyle,
  error,
  ...rest
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label ? <Text style={[styles.label, labelStyle]}>{label}</Text> : null}
      <TextInput
        style={[styles.input, inputStyle, error ? styles.errorBorder : null]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={ColorsApp.txtDescColor}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        // autoComplete=""
        autoCorrect={false}
        spellCheck={false}
        returnKeyType={returnKeyType}
        {...rest}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

export default TextInputCustom;

const styles = StyleSheet.create({
  container: {},
  label: {
    ...Fonts.fontNotoSansMedium12,
    marginBottom: 7,
  },
  input: {
    ...Fonts.fontNotoSansLight10,
    borderWidth: 0.5,
    borderColor: ColorsApp.grayE9,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 42,
    backgroundColor: ColorsApp.white,
  },
  errorBorder: {
    // borderColor: ColorsApp.red,
  },
  errorText: {
    marginTop: 4,
    // color: ColorsApp.red,
    fontSize: 12,
  },
});
