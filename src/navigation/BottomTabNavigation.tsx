import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from '../screens/components/customTabBar';

import ProductsTab from '../screens/app/productsTab';
import HomeTab from '../screens/app/homeTab';
import CartTab from '../screens/app/cartTab';
import StoresTab from '../screens/app/storesTab';
import ProfileTab from '../screens/app/profileTab';

const Tab = createBottomTabNavigator();

export default function BottomTabsNavigation() {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Products" component={ProductsTab} />
      <Tab.Screen name="Cart" component={CartTab} />
      <Tab.Screen name="Stores" component={StoresTab} />
      <Tab.Screen name="Profile" component={ProfileTab} />
    </Tab.Navigator>
  );
}
