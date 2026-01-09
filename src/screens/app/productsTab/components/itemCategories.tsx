import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { ColorsApp } from '../../../../utilities/colors';
import { Fonts } from '../../../../utilities/fonts';
import { IArrCategoriesBar } from '../../../../modelTypeScript';

type Props = {
  item: IArrCategoriesBar;
  isSelected: boolean;
  onPress: () => void;
};

const ItemCategories = ({ item, isSelected, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, isSelected && styles.selectedContainer]}
    >
      <Text style={[styles.txtName, isSelected && styles.selectedName]}>
        {item.name}
      </Text>
    </Pressable>
  );
};

export default ItemCategories;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 45,
  },
  selectedContainer: {
    backgroundColor: ColorsApp.green,
  },
  txtName: {
    ...Fonts.fontNotoSansLight10,
  },
  selectedName: {
    ...Fonts.fontNotoSansSemiBold10,
    color: ColorsApp.white,
  },
});
