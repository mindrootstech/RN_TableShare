import { Image, StyleSheet, Text, View, ViewStyle } from 'react-native';
import Images from '../../../../assets';
import { IPopularProduct } from '../../../../modelTypeScript';
import { ColorsApp } from '../../../../utilities/colors';
import { Fonts } from '../../../../utilities/fonts';
import ButtonCustom from '../../../components/buttonCustom';
import React from 'react';

type Props = {
  item: IPopularProduct;
  containerStyle?: ViewStyle;
};

const ItemPopularProduct = ({ item, containerStyle }: Props) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View>
        <Image
          resizeMode="contain"
          source={item.image}
          style={styles.imgProduct}
        />
        <View style={styles.containerBadge}>
          <Image
            resizeMode="contain"
            source={item.stock}
            style={styles.imgBadge}
          />
        </View>
        <View style={styles.containerProductQuantity}>
          <Text style={styles.txtQuantityProduct}>2 Products</Text>
        </View>
      </View>
      <View style={styles.containerProductInfo}>
        <Text style={styles.txtName}>{item.name}</Text>
        <View style={styles.containerTag}>
          {item.tags.map((tags) => (
            <Text style={styles.txtTagName}>{tags}</Text>
          ))}
        </View>
        <View style={styles.containerLocationShop}>
          <View style={styles.containerShop}>
            {/* <Images.svgShopLocation /> */}
            <View style={styles.containerImgShop}>
              <Image
                source={Images.pngShopLocation}
                style={styles.imgShopIcon}
              />
            </View>
            <View>
              <Text style={styles.txtStoreName}>{item.storeName}</Text>
              <Text style={styles.txtBroadway}>Broadway</Text>
            </View>
          </View>
          <Image
            source={Images.pngBackIcon}
            style={styles.imgArrow}
            tintColor={ColorsApp.green}
          />
        </View>
      </View>
      <View style={styles.containerPrice}>
        <View style={styles.containerUnitPrice}>
          <Text style={styles.txtPrice}>${item.price}.00</Text>
          <Text style={styles.txtUnit}>/lb</Text>
        </View>
        <ButtonCustom
          title="Add to Cart"
          style={styles.btnAddTo}
          styleTitle={styles.btnTitle}
        />
      </View>
    </View>
  );
};

export default ItemPopularProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorsApp.white,
    padding: 8,
    borderRadius: 6,
  },
  imgProduct: {
    height: 112,
    width: 151,
  },
  containerBadge: {
    position: 'absolute',
    top: 5,
    left: 0,
  },
  imgBadge: {
    width: 53,
    height: 13,
  },
  containerProductQuantity: {
    position: 'absolute',
    bottom: 6,
    right: 6,
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1,
    backgroundColor: ColorsApp.green,
  },
  txtQuantityProduct: {
    ...Fonts.fontNotoSansRegular8,
    color: ColorsApp.theme,
  },
  containerProductInfo: {
    marginTop: 10,
  },
  txtName: {
    ...Fonts.fontNotoSansSemiBold10,
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
  containerLocationShop: {
    marginTop: 8,
    width: 151,
    padding: 8,
    borderWidth: 0.5,
    borderColor: ColorsApp.aliceBlue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerShop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  containerImgShop: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 17,
    width: 17,
    borderRadius: 2,
    backgroundColor: ColorsApp.aliceBlue,
  },
  imgShopIcon: {
    height: 10,
    width: 10,
  },
  txtStoreName: {
    ...Fonts.fontNotoSansRegular8,
  },
  txtBroadway: {
    ...Fonts.fontNotoSansLight8,
    color: ColorsApp.grey,
  },
  imgArrow: {
    height: 6,
    width: 6,
  },
  containerPrice: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerUnitPrice: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtPrice: {
    ...Fonts.fontNotoSansSemiBold10,
  },
  txtUnit: {
    ...Fonts.fontNotoSansLight10,
  },
  btnAddTo: {
    marginHorizontal: 0,
    height: 30,
    width: 95,
  },
  btnTitle: {
    ...Fonts.fontNotoSansMedium10,
    color: ColorsApp.theme,
  },
});
