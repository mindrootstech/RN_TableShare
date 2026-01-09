import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Images from '../../../assets';
import { arrProducts, spaceLeftRight } from '../../../common/constants';
import { ColorsApp } from '../../../utilities/colors';
import { Fonts } from '../../../utilities/fonts';
import ButtonCustom from '../../components/buttonCustom';
import CommonHeader from '../../components/commonHeader';
import GradientView from '../../components/gradientView';
import ProductSlider from './components/productSlider';

interface IArrOptions {
  id: string;
  name: string;
}

const arrOptions: IArrOptions[] = [
  {
    id: '1',
    name: 'Organic',
  },
  {
    id: '1',
    name: 'Local',
  },
];

const DetailPage = () => {
  return (
    <GradientView>
      <SafeAreaView style={styles.container}>
        <CommonHeader
          title="Detail Page"
          showRightIcon={true}
          stylesRightIcon={styles.headerRightIcon}
        />
        <View style={styles.containerProductDetails}>
          <ProductSlider data={arrProducts} />
          <View style={styles.containerProductName}>
            <Text style={styles.txtName}>Fresh Organic Carrots</Text>
            <View style={styles.containerPrice}>
              <Text style={styles.txtPrice}>$40.0 </Text>
              <Text style={styles.txtQuantity}>/ bunch</Text>
            </View>
          </View>
          <Text style={styles.txtShopName}>Fresh Farm products</Text>
          <Text style={styles.txtDesc}>Description</Text>
          <Text style={styles.txtProductDesc}>
            Fresh, crunchy organic carrots grown naturally without chemicals.
            Rich in flavor and perfect for everyday cooking and healthy
            snacking. Handpicked organic carrots grown using sustainable farming
            practices. Crisp, flavorful, and chemical-free—ideal for nutritious
            meals and wholesome snacking.
          </Text>

          <View style={styles.containerOptions}>
            {arrOptions.map((item) => (
              <View style={styles.containerOptionName} key={item.id}>
                <Text style={styles.txtOptionName}>{item.name}</Text>
              </View>
            ))}
          </View>

          <View style={styles.containerStorage}>
            <Text style={styles.txtStorage}>Storage: Refrigerated</Text>
          </View>
          <View style={styles.containerAvailable}>
            <Images.svgTick />
            <Text style={styles.txtAvailable}>25 Available</Text>
          </View>
        </View>
        <ButtonCustom title="Add to cart" />
      </SafeAreaView>
    </GradientView>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spaceLeftRight,
  },
  headerRightIcon: {
    height: 22,
    width: 22,
  },
  containerProductDetails: {
    flex: 0.95,
  },
  containerProductName: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtName: {
    ...Fonts.fontNotoSansSemiBold14,
    color: ColorsApp.green,
  },
  containerPrice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtPrice: {
    ...Fonts.fontNotoSansSemiBold12,
    color: ColorsApp.green,
  },
  txtQuantity: {
    ...Fonts.fontNotoSansLight12,
  },
  txtShopName: {
    marginTop: 6,
    ...Fonts.fontNotoSansRegular12,
    textDecorationLine: 'underline',
  },
  txtDesc: {
    marginTop: 15,
    ...Fonts.fontNotoSansSemiBold12,
  },
  txtProductDesc: {
    marginTop: 6,
    ...Fonts.fontNotoSansRegular10,
  },
  containerOptions: {
    marginTop: 15,
    flexDirection: 'row',
    gap: 10,
  },
  containerOptionName: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderWidth: 0.5,
    borderColor: ColorsApp.black,
    borderRadius: 3,
  },
  txtOptionName: {
    ...Fonts.fontNotoSansRegular10,
  },
  containerStorage: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 130,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: ColorsApp.blueC1D,
    backgroundColor: ColorsApp.blueEFF,
  },
  txtStorage: {
    paddingHorizontal: 11,
    paddingVertical: 10,
    ...Fonts.fontNotoSansRegular10,
    color: ColorsApp.blue1D,
  },
  containerAvailable: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: ColorsApp.green,
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  txtAvailable: {
    ...Fonts.fontNotoSansMedium12,
    color: ColorsApp.green,
  },
});
