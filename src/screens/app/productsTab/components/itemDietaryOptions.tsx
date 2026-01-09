import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { ColorsApp } from '../../../../utilities/colors';
import { Fonts } from '../../../../utilities/fonts';
import { IArrDietaryPerf } from '../../../../modelTypeScript';

type Props = {
  item: IArrDietaryPerf;
  isSelected: boolean;
  onPress: () => void;
};
const ItemDietaryOptions = ({ item, isSelected, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, isSelected && styles.selectedContainer]}
    >
      <Text style={[styles.txtLabel, isSelected && styles.selectedLabel]}>
        {item.label}
      </Text>
    </Pressable>
  );
};

export default ItemDietaryOptions;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 45,
    backgroundColor: ColorsApp.whiteF5,
  },
  selectedContainer: {
    backgroundColor: ColorsApp.green,
  },
  txtLabel: {
    ...Fonts.fontNotoSansLight10,
  },
  selectedLabel: {
    ...Fonts.fontNotoSansSemiBold10,
    color: ColorsApp.white,
  },
});
