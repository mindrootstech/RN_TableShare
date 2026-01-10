import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IArrMyProducts } from '../StoreAdded';
import { ColorsApp } from '../../../../utilities/colors';
import { Fonts } from '../../../../utilities/fonts';
import ButtonCustom from '../../../components/buttonCustom';
import Images from '../../../../assets';
import { StylesG } from '../../../../utilities/stylesG';

type Props = {
  item: IArrMyProducts;
  width: number;
};

const ItemMyProducts = ({ item, width }: Props) => {
  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.containerImg}>
        <Image
          source={item.image}
          style={styles.imgProduct}
          resizeMode="contain"
        />
      </View>
      <View style={styles.containerProductDetails}>
        <Text style={styles.txtProductName}>{item.name}</Text>
        <Text style={styles.txtProductDesc}>{item.description}</Text>
        <View style={styles.containerUnitPrice}>
          <Text style={styles.txtPrice}>${item.price}.00</Text>
          <Text style={styles.txtUnit}>{item.unit}</Text>
        </View>
      </View>
      <View style={styles.containerBtns}>
        <ButtonCustom
          title="Edit"
          style={styles.btnEdit}
          styleTitle={styles.btnTitle}
        />
        <Pressable style={[styles.btnReciptAndDelete, StylesG.shadowStyle]}>
          <Images.svgRecipt />
        </Pressable>
        <Pressable style={[styles.btnReciptAndDelete, StylesG.shadowStyle]}>
          <Images.svgDelete />
        </Pressable>
      </View>
    </View>
  );
};

export default ItemMyProducts;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    width: 160,
    backgroundColor: ColorsApp.white,
  },
  containerImg: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 144,
    height: 112,
    borderRadius: 5,
    backgroundColor: ColorsApp.aliceBlue,
  },
  imgProduct: {
    height: 86,
    width: 86,
  },
  containerProductDetails: {},
  txtProductName: {
    marginTop: 3,
    ...Fonts.fontNotoSansSemiBold10,
  },
  txtProductDesc: {
    marginTop: 5,
    ...Fonts.fontNotoSansRegular8,
  },
  containerUnitPrice: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtPrice: {
    ...Fonts.fontNotoSansSemiBold10,
    color: ColorsApp.green,
  },
  txtUnit: {
    ...Fonts.fontNotoSansLight10,
  },
  containerBtns: {
    marginTop: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnEdit: {
    marginHorizontal: 0,
    width: 72,
    height: 32,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: ColorsApp.green,
  },
  btnTitle: {
    ...Fonts.fontNotoSansSemiBold10,
    color: ColorsApp.green,
  },
  btnReciptAndDelete: {
    height: 30,
    width: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.2,
    borderColor: ColorsApp.green50,
  },
});
