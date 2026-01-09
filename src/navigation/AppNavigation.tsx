import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import 'react-native-gesture-handler';
import BottomTabsNavigation from './BottomTabNavigation';
import ProductsTab from '../screens/app/productsTab';
import DetailPage from '../screens/app/productsTab/detailPage';
import StoresTab from '../screens/app/storesTab';
import AddNewStore from '../screens/app/storesTab/addNewStore';

export type AppStackRoots = {
  BottomTabsNavigation: undefined;
  Home: undefined;
  ProductsTab: undefined;
  DetailPage: undefined;
  StoresTab: undefined;
  AddNewStore: undefined;
};

const Stack = createStackNavigator<AppStackRoots>();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackAllowFontScaling: false,
        headerTitleAllowFontScaling: false,
        gestureEnabled: false,
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="BottomTabsNavigation"
        component={BottomTabsNavigation}
      />
      <Stack.Screen name="ProductsTab" component={ProductsTab} />
      <Stack.Screen name="DetailPage" component={DetailPage} />
      <Stack.Screen name="StoresTab" component={StoresTab} />
      <Stack.Screen name="AddNewStore" component={AddNewStore} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
