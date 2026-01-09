import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Images from '../../../assets';
import { spaceLeftRight } from '../../../common/constants';
import { AppStackRoots } from '../../../navigation/AppNavigation';
import { ColorsApp } from '../../../utilities/colors';
import { Fonts } from '../../../utilities/fonts';
import ButtonCustom from '../../components/buttonCustom';
import CommonHeader from '../../components/commonHeader';
import GradientView from '../../components/gradientView';
import StoreAdded from './StoreAdded';

type Props = NativeStackScreenProps<AppStackRoots, 'StoresTab'>;
const StoresTab = ({ navigation }: Props) => {
  const onPressAddStore = () => {
    navigation.navigate('AddNewStore');
  };

  return (
    <GradientView>
      {/* <SafeAreaView style={styles.container}>
        <CommonHeader title="Stores" showLeftIcon={false} />
        <View style={styles.containerMain}>
          <Images.svgStoreIcon />
          <Text style={styles.txtTitle}>Your Store Isn’t Set Up Yet</Text>
          <Text style={styles.txtDesc}>
            Set up your store, add products, and reach your customers online.
          </Text>
          <ButtonCustom
            title="Add New Store"
            style={styles.btnAddStore}
            styleTitle={styles.btnTitle}
            onPress={onPressAddStore}
          />
        </View>
      </SafeAreaView> */}
      <StoreAdded />
    </GradientView>
  );
};

export default StoresTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spaceLeftRight,
  },
  containerMain: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitle: {
    marginTop: 15,
    ...Fonts.fontNotoSansSemiBold14,
  },
  txtDesc: {
    marginTop: 5,
    paddingHorizontal: 54,
    textAlign: 'center',
    ...Fonts.fontNotoSansRegular12,
  },
  btnAddStore: {
    marginTop: 16,
    width: 226,
    height: 40,
    borderRadius: 135,
  },
  btnTitle: {
    ...Fonts.fontNotoSansSemiBold14,
    color: ColorsApp.theme,
  },
});
