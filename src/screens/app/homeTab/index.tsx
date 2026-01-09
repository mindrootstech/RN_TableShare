import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Images from '../../../assets';
import {
  arrLocalVendors,
  arrPopularProducts,
  arrStoresNearYou,
  HEIGHT_SCREEN,
  spaceLeftRight,
} from '../../../common/constants';
import { ColorsApp } from '../../../utilities/colors';
import { Fonts } from '../../../utilities/fonts';
import GradientView from '../../components/gradientView';
import SearchBarCustom from '../../components/searchBarCustom';
import ItemLocalStore from './components/itemLocalStore';
import ItemPopularProduct from './components/itemPopularProduct';
import ItemStoresNearYou from './components/itemStoresNearYou';

const HomeTab = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerMain}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}
        >
          <View style={styles.containerUser}>
            <Image source={Images.pngDummy} style={styles.imgUser} />
            <View style={styles.containerUserInfo}>
              <View>
                <Text style={styles.txtUserName}>John William</Text>
                <Text style={styles.txtUserAddress}>
                  712 Broadway, New York, USA
                </Text>
              </View>
              <Images.svgBell />
            </View>
          </View>

          <SearchBarCustom
            placeholder="Search fresh local products"
            styleContainer={styles.containerSearchBar}
          />

          <View style={styles.containerVendors}>
            <Text style={styles.txtLocalVend}>Local Vendors</Text>
            <FlatList
              contentContainerStyle={styles.contentContainerStyle}
              data={arrLocalVendors}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <ItemLocalStore item={item} />}
              showsVerticalScrollIndicator={false}
            />
          </View>

          <View style={styles.containerStoresNearYou}>
            <Text style={styles.txtStoreNearYou}>Top Stores Near You</Text>
            <FlatList
              contentContainerStyle={styles.containerListNearYou}
              horizontal
              data={arrStoresNearYou}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <ItemStoresNearYou item={item} />}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <GradientView containerStyle={styles.containerGradient}>
            <View style={styles.containerPopularProd}>
              <View style={styles.containerSeeAllProducts}>
                <Text style={styles.txtPopularProd}>Popular Products</Text>
                <Pressable>
                  <Text style={styles.txtSeeAll}>See All</Text>
                </Pressable>
              </View>
              <FlatList
                contentContainerStyle={styles.containerListPopularProducts}
                horizontal
                data={arrPopularProducts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <ItemPopularProduct
                    item={item}
                    containerStyle={styles.containerItemListProducts}
                  />
                )}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </GradientView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorsApp.theme,
  },
  containerMain: {
    flex: 1,
    paddingTop: 20,
  },
  scrollView: {
    paddingBottom: 50,
    flexGrow: 1,
  },
  containerUser: {
    paddingHorizontal: spaceLeftRight,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  imgUser: {
    width: 36,
    height: 37,
    borderRadius: 30,
  },
  containerUserInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtUserName: {
    ...Fonts.fontNotoSansSemiBold14,
  },
  txtUserAddress: {
    marginTop: 2,
    ...Fonts.fontNotoSansLight10,
    color: ColorsApp.grey,
  },
  containerSearchBar: {
    marginTop: 19,
    marginHorizontal: spaceLeftRight,
  },
  containerVendors: {
    marginHorizontal: spaceLeftRight,
    marginTop: 20,
    height: HEIGHT_SCREEN / 2.98,
  },
  txtLocalVend: {
    ...Fonts.fontNotoSansSemiBold12,
    marginBottom: 10,
  },
  contentContainerStyle: {
    flexGrow: 1,
    gap: 15,
  },
  containerStoresNearYou: {
    marginTop: 20,
    paddingLeft: spaceLeftRight,
    width: '100%',
  },
  txtStoreNearYou: {
    ...Fonts.fontNotoSansSemiBold14,
    marginBottom: 15,
  },
  containerListNearYou: {
    flexGrow: 1,
    gap: 18,
  },
  containerGradient: {
    marginTop: 12,
    width: '100%',
  },
  containerPopularProd: {
    marginTop: 21,
    paddingHorizontal: spaceLeftRight,
  },
  containerSeeAllProducts: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtPopularProd: {
    ...Fonts.fontNotoSansSemiBold14,
  },
  txtSeeAll: {
    ...Fonts.fontNotoSansLight10,
  },
  containerListPopularProducts: {
    gap: 15,
    marginTop: 15,
  },
  containerItemListProducts: {
    marginBottom: 80,
  },
});
