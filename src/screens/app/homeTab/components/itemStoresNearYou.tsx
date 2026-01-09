import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IArrStoresNearYou } from '../../../../modelTypeScript';
import { Fonts } from '../../../../utilities/fonts';

type Props = {
  item: IArrStoresNearYou;
};

const ItemStoresNearYou = ({ item }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={item.logo} style={styles.imgLogo} />
      <Text numberOfLines={1} style={styles.txtName}>
        {item.name}
      </Text>
    </View>
  );
};

export default ItemStoresNearYou;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    width: 62,
  },
  imgLogo: {
    height: 38,
    width: 38,
    borderRadius: 30,
  },
  txtName: {
    ...Fonts.fontNotoSansRegular10,
  },
});
