import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  arrCategoriesBar,
  arrPopularProducts,
  spaceLeftRight,
  WIDTH_SCREEN,
} from '../../../common/constants';
import { Fonts } from '../../../utilities/fonts';
import GradientView from '../../components/gradientView';
import SearchBarCustom from '../../components/searchBarCustom';
import ItemCategories from './components/itemCategories';
import ItemProducts from './components/itemProducts';
import ModalDietaryPref from './components/modalDietaryPref';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackRoots } from '../../../navigation/AppNavigation';

type Props = NativeStackScreenProps<AppStackRoots, 'ProductsTab'>;
const ProductsTab = ({ navigation }: Props) => {
  const [selectedId, setSelectedId] = useState<string>('1');
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const HORIZONTAL_PADDING = spaceLeftRight;
  const COLUMN_GAP = 15;
  const ITEM_WIDTH =
    (WIDTH_SCREEN - HORIZONTAL_PADDING * 2 - COLUMN_GAP) / 2 - 20;

  const onPressFilterIcon = () => {
    setIsModalVisible(true);
  };

  const onPressModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const onPressProduct = () => {
    navigation.navigate('DetailPage');
  };

  return (
    <GradientView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.txtProducts}>Products</Text>
        <SearchBarCustom
          placeholder="Search fresh local products"
          showRightIcon={true}
          onRightPress={onPressFilterIcon}
        />

        <View>
          <FlatList
            data={arrCategoriesBar}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ItemCategories
                item={item}
                isSelected={item.id === selectedId}
                onPress={() => setSelectedId(item.id)}
              />
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.containerCategories}
          />
        </View>

        <FlatList
          numColumns={2}
          data={arrPopularProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ItemProducts
              item={item}
              onPressProduct={onPressProduct}
              width={ITEM_WIDTH}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          columnWrapperStyle={styles.columnWrapper}
        />

        <ModalDietaryPref isVisible={isModalVisible} onPress={onPressModal} />
      </SafeAreaView>
    </GradientView>
  );
};

export default ProductsTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spaceLeftRight,
  },
  txtProducts: {
    marginVertical: 20,
    alignSelf: 'center',
    ...Fonts.fontNotoSansSemiBold14,
  },
  containerCategories: {
    flexGrow: 1,
    gap: 12,
    marginVertical: 15,
  },
  listContent: {
    paddingBottom: 120,
  },
  columnWrapper: {
    gap: 25,
    marginLeft: 15,
    // justifyContent: 'space-between',
    marginBottom: 15,
  },
});
