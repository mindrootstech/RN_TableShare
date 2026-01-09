import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { spaceLeftRight } from '../../../common/constants';
import { ColorsApp } from '../../../utilities/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Fonts } from '../../../utilities/fonts';
import Images from '../../../assets';
import ButtonCustom from '../../components/buttonCustom';

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
});
