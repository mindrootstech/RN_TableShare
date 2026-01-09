import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IStoreItem } from '../../../../modelTypeScript';
import { ColorsApp } from '../../../../utilities/colors';
import { Fonts } from '../../../../utilities/fonts';
import Images from '../../../../assets';
import ButtonCustom from '../../../components/buttonCustom';

type Props = {
  item: IStoreItem;
};

const ItemLocalStore = ({ item }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerShopLogo}>
        <Image source={item.logo} style={styles.imgLogo} />
      </View>
      <View style={styles.containerShopInfo}>
        <View>
          <Text style={styles.txtName}>{item.name}</Text>
          <View style={styles.containerLocation}>
            <Images.svgLocationPin />
            <Text style={styles.txtAddress}>{item.location}</Text>
          </View>
          <ButtonCustom
            title="View Store"
            style={styles.btnViewStore}
            styleTitle={styles.btnTitle}
          />
        </View>
        <Text
          style={styles.txtProductsCount}
        >{`${item.productsCount} Products`}</Text>
      </View>
    </View>
  );
};

export default ItemLocalStore;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 19,
    backgroundColor: ColorsApp.theme,
    borderWidth: 0.5,
    borderColor: ColorsApp.greenLight,
    padding: 13,
    borderRadius: 10,
  },
  containerShopLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 64,
    borderRadius: 7,
    backgroundColor: ColorsApp.greenLight,
  },
  imgLogo: {
    height: 40,
    width: 40,
    borderRadius: 30,
  },
  containerShopInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  txtName: {
    ...Fonts.fontNotoSansSemiBold10,
  },
  containerLocation: {
    marginTop: 5,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  txtAddress: {
    ...Fonts.fontNotoSansRegular8,
  },
  btnViewStore: {
    marginTop: 12,
    width: 74,
    height: 18,
    borderRadius: 34,
    marginHorizontal: 0,
  },
  btnTitle: {
    ...Fonts.fontNotoSansMedium8,
    color: ColorsApp.theme,
  },
  txtProductsCount: {
    ...Fonts.fontNotoSansSemiBold8,
    color: ColorsApp.green,
  },
});
