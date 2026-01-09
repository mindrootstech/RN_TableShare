import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import Images from '../../assets';
import { ColorsApp } from '../../utilities/colors';
import { Fonts } from '../../utilities/fonts';

type Props = {
  value?: string;
  placeholder?: string;
  /** Called immediately on typing */
  onChangeText?: (_text: string) => void;
  /** Called AFTER debounce delay */
  onDebouncedChange?: (_text: string) => void;
  debounceDelay?: number;
  showRightIcon?: boolean;
  onRightPress?: () => void;
  styleContainer?: ViewStyle;
  styleInput?: TextStyle;
};

const SearchBarCustom: React.FC<Props> = ({
  value = '',
  placeholder = 'Search',
  onChangeText,
  onDebouncedChange,
  debounceDelay = 400,
  showRightIcon = false,
  onRightPress,
  styleContainer,
  styleInput,
}) => {
  const [text, setText] = useState(value);

  /** keep local state in sync if parent updates value */
  useEffect(() => {
    setText(value);
  }, [value]);

  /** debounce effect */
  useEffect(() => {
    if (!onDebouncedChange) {
      return;
    }

    const handler = setTimeout(() => {
      onDebouncedChange(text);
    }, debounceDelay);

    return () => clearTimeout(handler);
  }, [text, debounceDelay, onDebouncedChange]);

  const handleChange = (val: string) => {
    setText(val);
    onChangeText?.(val); // instant callback
  };

  return (
    <View style={[styles.container, styleContainer]}>
      {/* Left Search Icon */}
      <Images.svgSearchIcon />

      {/* Input */}
      <TextInput
        value={text}
        placeholder={placeholder}
        placeholderTextColor={ColorsApp.grey}
        onChangeText={handleChange}
        style={[styles.input, styleInput]}
      />

      {/* Optional Right Icon */}
      {showRightIcon && (
        <TouchableOpacity
          onPress={onRightPress}
          hitSlop={10}
          activeOpacity={0.7}
        >
          <Images.svgFilterSliders />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBarCustom;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ColorsApp.aliceBlue,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 33,
    gap: 5,
  },

  input: {
    flex: 1,
    ...Fonts.fontNotoSansLight10,
    color: ColorsApp.grey,
    paddingVertical: 0,
  },
});
