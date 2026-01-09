import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { IPopularProduct } from '../../../../modelTypeScript';
import { ColorsApp } from '../../../../utilities/colors';
import { Fonts } from '../../../../utilities/fonts';
import ButtonCustom from '../../../components/buttonCustom';

type Props = {
  item: IPopularProduct;
  onPressProduct: () => void;
  width: number;
};

const ItemProducts = ({ item, width, onPressProduct }: Props) => {
  return (
    <Pressable onPress={onPressProduct} style={[styles.container, { width }]}>
      <View style={styles.containerImg}>
        <Image
          resizeMode="contain"
          source={item.image}
          style={styles.imgProduct}
        />
      </View>
      <Text style={styles.txtProductName}>{item.name}</Text>
      <Text style={styles.txtStoreName}>{item.storeName}</Text>
      <View style={styles.containerTag}>
        {item.tags.map((tags) => (
          <Text style={styles.txtTagName}>{tags}</Text>
        ))}
      </View>
      <View style={styles.containerAddToCart}>
        <View style={styles.containerPrice}>
          <Text style={styles.txtPrice}>${item.price}.00</Text>
          <Text style={styles.txtQuantity}>/lb</Text>
        </View>
        <ButtonCustom
          title="Add to Cart"
          style={styles.btnAddTo}
          styleTitle={styles.btnTitle}
        />
      </View>
    </Pressable>
  );
};

export default ItemProducts;

const styles = StyleSheet.create({
  // container: {
  //   padding: 10,
  //   marginRight: 15,
  //   marginLeft: 12,
  //   borderRadius: 6,
  //   backgroundColor: ColorsApp.white,
  // },
  // containerImg: {
  //   height: 112,
  //   width: 144,
  //   borderRadius: 5,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: ColorsApp.theme,
  // },
  // imgProduct: {
  //   height: 100,
  //   width: 128,
  //   borderRadius: 5,
  // },
  container: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: ColorsApp.white,
  },
  containerImg: {
    height: 112,
    width: '100%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ColorsApp.theme,
  },
  imgProduct: {
    height: 100,
    width: '90%',
    resizeMode: 'contain',
  },
  txtProductName: {
    ...Fonts.fontNotoSansSemiBold10,
  },
  txtStoreName: {
    marginTop: 3,
    ...Fonts.fontNotoSansLight8,
  },
  containerTag: {
    width: 144,
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 4,
  },
  txtTagName: {
    padding: 4,
    ...Fonts.fontNotoSansRegular8,
  },
  containerAddToCart: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerPrice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtPrice: {
    ...Fonts.fontNotoSansSemiBold10,
  },
  txtQuantity: {
    ...Fonts.fontNotoSansLight10,
  },
  btnAddTo: {
    marginHorizontal: 0,
    height: 26,
    width: 78,
  },
  btnTitle: {
    ...Fonts.fontNotoSansSemiBold10,
    color: ColorsApp.theme,
  },
});
