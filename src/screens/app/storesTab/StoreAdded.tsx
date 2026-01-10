import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ITEM_WIDTH, spaceLeftRight } from '../../../common/constants';
import { ColorsApp } from '../../../utilities/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Fonts } from '../../../utilities/fonts';
import Images from '../../../assets';
import ButtonCustom from '../../components/buttonCustom';
import ItemMyProducts from './components/itemMyProducts';

// Product interface
export interface IArrMyProducts {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  image: any;
}

// Products array
export const arrMyProducts: IArrMyProducts[] = [
  {
    id: '1',
    name: 'Fresh Red Apples',
    description: 'Fresh, naturally grown organic apples packed with crisp',
    price: 18.0,
    unit: '/lb',
    image: require('../../../assets/png/pngCarrots.png'), // update path as needed
  },
  {
    id: '2',
    name: 'Fresh Organic Carrots',
    description: 'Crunchy organic carrots, perfect for snacking',
    price: 40.0,
    unit: '/bunch',
    image: require('../../../assets/png/pngCupCakes.png'), // update path as needed
  },
];

const StoreAdded = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <View style={styles.containerStoreInfo}>
        <Text style={[styles.txtStore, { paddingTop: top }]}>Stores</Text>
        <View style={styles.containerLogo}>
          <Image
            source={Images.pngFarm}
            style={styles.imgLogo}
            resizeMode="contain"
          />
          <View style={styles.containerCameraIcon}>
            <Image source={Images.pngCamera} style={styles.imgCamera} />
          </View>
        </View>
        <View style={styles.containerApproval}>
          <Text style={styles.txtApproval}>Approval Pending</Text>
        </View>
        <Text style={styles.txtStoreName}>Fresh Farm market</Text>
        <View style={styles.containerAddress}>
          <Images.svgLocationPinWhite />
          <Text style={styles.txtAddress}>Brooklyn ,112011</Text>
        </View>
        <View style={styles.containerBtns}>
          <ButtonCustom
            title="Edit store"
            icon={<Images.svgEdit />}
            style={styles.btnEditStore}
            styleTitle={styles.btnTitleEditStore}
          />
          <ButtonCustom
            title="View Public store"
            icon={<Images.svgEyeOpen />}
            style={styles.btnEditStore}
            styleTitle={styles.btnTitleEditStore}
          />
        </View>
      </View>
      <View style={styles.containerMain}>
        <View style={styles.containerAppPending}>
          <View style={styles.containerPending}>
            <Images.svgExclamation />
            <Text style={styles.txtApplication}>Application pending</Text>
          </View>
          <Text style={styles.txtApplicationDesc}>
            your application is being reviewed. you can add products now, but
            they won’t be visible to customers until approved.
          </Text>
        </View>

        <View style={styles.containerMyOrder}>
          <View style={styles.containerOrder}>
            <View style={styles.containerIconShopping}>
              <Images.svgShoppingBag />
            </View>
            <View>
              <Text style={styles.txtMyOrder}>My Orders</Text>
              <Text style={styles.txtManageCustomer}>
                Manage Customer orders and pickup
              </Text>
            </View>
          </View>
          <Image source={Images.pngRightArrow} style={styles.imgRightArrow} />
        </View>

        <View style={styles.containerMyProducts}>
          <View style={styles.containerMyProductsTitle}>
            <Text style={styles.txtMyProducts}>My Products (2)</Text>
            <ButtonCustom
              title="Add Products"
              icon={<Images.svgPlusIcon />}
              style={styles.btnAddProduct}
              styleIcon={styles.btnIcon}
              styleTitle={styles.btnTitleAddProd}
            />
          </View>
        </View>

        <FlatList
          numColumns={2}
          data={arrMyProducts}
          renderItem={({ item }) => (
            <ItemMyProducts item={item} width={ITEM_WIDTH} />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
    </View>
  );
};

export default StoreAdded;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerStoreInfo: {
    // justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomLeftRadius: 29,
    borderBottomRightRadius: 29,
    backgroundColor: ColorsApp.green,
  },
  txtStore: {
    marginTop: 10,
    ...Fonts.fontNotoSansSemiBold14,
    color: ColorsApp.theme,
  },
  containerLogo: {
    marginTop: 20,
    height: 60,
    width: 60,
    borderRadius: 35,
    backgroundColor: ColorsApp.theme,
  },
  imgLogo: {
    height: '100%',
    width: '100%',
  },
  containerCameraIcon: {
    position: 'absolute',
    bottom: 1,
    right: -2,
    justifyContent: 'center',
    alignItems: 'center',
    height: 18,
    width: 18,
    borderRadius: 10,
    backgroundColor: ColorsApp.green,
    borderWidth: 1,
    borderColor: ColorsApp.white,
  },
  imgCamera: {
    height: 8,
    width: 8,
  },
  containerApproval: {
    marginTop: 12,
    padding: 5,
    borderRadius: 4,
    backgroundColor: ColorsApp.peach,
  },
  txtApproval: {
    ...Fonts.fontNotoSansRegular8,
    color: ColorsApp.orange9F,
  },
  txtStoreName: {
    marginTop: 3,
    ...Fonts.fontNotoSansSemiBold14,
    color: ColorsApp.white,
  },
  containerAddress: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  txtAddress: {
    ...Fonts.fontNotoSansRegular12,
    color: ColorsApp.white,
  },
  containerBtns: {
    marginTop: 19,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  btnEditStore: {
    marginHorizontal: 0,
    width: 145,
    height: 32,
    alignItems: 'center',
    backgroundColor: ColorsApp.white,
  },
  btnTitleEditStore: {
    ...Fonts.fontNotoSansMedium10,
  },
  containerMain: {
    flex: 1,
    paddingHorizontal: spaceLeftRight,
  },
  containerAppPending: {
    marginTop: 15,
    paddingLeft: 10,
    paddingTop: 5,
    paddingRight: 28,
    paddingBottom: 15,
    marginHorizontal: 4,
    borderRadius: 4,
    borderWidth: 0.4,
    gap: 2,
    borderColor: ColorsApp.orangeFD,
    backgroundColor: ColorsApp.orangeLight,
  },
  containerPending: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  txtApplication: {
    ...Fonts.fontNotoSansMedium8,
    color: ColorsApp.orange9F,
  },
  txtApplicationDesc: {
    ...Fonts.fontNotoSansLight8,
    color: ColorsApp.orangeBurnt,
  },
  containerMyOrder: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingLeft: 12,
    paddingRight: 15,
    backgroundColor: ColorsApp.white,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: ColorsApp.greenLight,
  },
  containerOrder: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  containerIconShopping: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    borderRadius: 6,
    backgroundColor: ColorsApp.greenLight,
  },
  txtMyOrder: {
    ...Fonts.fontNotoSansSemiBold14,
  },
  txtManageCustomer: {
    ...Fonts.fontNotoSansRegular12,
  },
  imgRightArrow: {
    height: 12,
    width: 6,
  },
  containerMyProducts: {},
  containerMyProductsTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtMyProducts: {
    ...Fonts.fontNotoSansSemiBold14,
  },
  btnAddProduct: {
    marginHorizontal: 0,
    paddingHorizontal: 6,
    width: 75,
    height: 21,
  },
  btnIcon: {
    marginRight: 3,
  },
  btnTitleAddProd: {
    ...Fonts.fontNotoSansMedium8,
    color: ColorsApp.theme,
  },
  listContent: {
    marginTop: 15,
    paddingBottom: 150,
  },
  columnWrapper: {
    gap: 25,
    // backgroundColor: 'red',
    // borderWidth: 1,
    marginLeft: 15,
    // justifyContent: 'space-between',
    marginBottom: 15,
  },
});
