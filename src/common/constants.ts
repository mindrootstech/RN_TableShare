import { Dimensions } from 'react-native';
import {
  IArrCategoriesBar,
  IArrDietaryPerf,
  IArrOnBoardingData,
  IArrProduct,
  IArrSignUpFields,
  IArrStoresNearYou,
  IPopularProduct,
  IStoreItem,
} from '../modelTypeScript';
import { TranslationKeys } from '../i18n/language';
import Images from '../assets';

export const spaceHorizontalAuth = 30;
export const spaceLeftRight = 20;
export const authCodeExpire = 'Unauthenticated.';
export const activeOpacityTouchable = 0.8;
export const HEIGHT_SCREEN = Dimensions.get('screen').height;
export const WIDTH_SCREEN = Dimensions.get('screen').width;
const HORIZONTAL_PADDING = spaceLeftRight;
const COLUMN_GAP = 15;
export const ITEM_WIDTH =
  (WIDTH_SCREEN - HORIZONTAL_PADDING * 2 - COLUMN_GAP) / 2 - 20;

export const arrOnBoardingData: IArrOnBoardingData[] = [
  {
    id: 1,
    image: require('../assets/png/pngOnBoarding2.png'),
    title: TranslationKeys.FRESH_FROM_LOCAL,
    desc: TranslationKeys.CONNECT_DIRECTLY_WITH_FARMERS,
  },
  {
    id: 2,
    image: require('../assets/png/pngOnBoarding1.png'),
    title: TranslationKeys.GROW_YOUR_FARM_BUSINESS,
    desc: TranslationKeys.CREATE_YOUR_ONLINE_PRESENCE,
  },
  {
    id: 3,
    image: require('../assets/png/pngOnBoarding2.png'),
    title: TranslationKeys.BUY_LOCAL_SELL_LOCAL,
    desc: TranslationKeys.FARMERS_SELL_DIRECTLY_TO_CUSTOMERS_NEARBY,
  },
];

export const arrSignUpFields: IArrSignUpFields[] = [
  {
    key: 'firstName',
    label: TranslationKeys.FIRST_NAME,
    placeholder: TranslationKeys.ENTER_YOUR_FIRST_NAME,
  },
  {
    key: 'lastName',
    label: TranslationKeys.LAST_NAME,
    placeholder: TranslationKeys.ENTER_YOUR_LAST_NAME,
  },
  {
    key: 'email',
    label: TranslationKeys.EMAIL_SIGNUP,
    placeholder: TranslationKeys.ENTER_YOUR_EMAIL,
    keyboardType: 'email-address',
  },
  {
    key: 'phone',
    label: TranslationKeys.PHONE_NUMBER,
    placeholder: TranslationKeys.ENTER_YOUR_PHONE_NUMBER,
    keyboardType: 'phone-pad',
  },
  {
    key: 'password',
    label: TranslationKeys.PASSWORD_SIGNUP,
    placeholder: TranslationKeys.ENTER_PASSWORD,
    secureTextEntry: true,
  },
  {
    key: 'confirmPassword',
    label: TranslationKeys.CONFIRM_PASSWORD,
    placeholder: TranslationKeys.ENTER_YOUR_PASSWROD,
    secureTextEntry: true,
  },
];

export const arrLocalVendors: IStoreItem[] = [
  {
    id: '1',
    name: 'Fresh Farm Market',
    location: 'Brooklyn, 11201',
    logo: Images.pngFarm,
    productsCount: 2,
  },
  {
    id: '2',
    name: 'Sunrise Bakery',
    location: 'Brooklyn, 11201',
    logo: Images.pngSunriseBak,
    productsCount: 4,
  },
  {
    id: '3',
    name: 'Ocean Fresh',
    location: 'Brooklyn, 11201',
    logo: Images.pngOceanFish,
    productsCount: 4,
  },
  {
    id: '1',
    name: 'Fresh Farm Market',
    location: 'Brooklyn, 11201',
    logo: Images.pngFarm,
    productsCount: 2,
  },
  {
    id: '2',
    name: 'Sunrise Bakery',
    location: 'Brooklyn, 11201',
    logo: Images.pngSunriseBak,
    productsCount: 4,
  },
  {
    id: '3',
    name: 'Ocean Fresh',
    location: 'Brooklyn, 11201',
    logo: Images.pngOceanFish,
    productsCount: 4,
  },
  {
    id: '1',
    name: 'Fresh Farm Market',
    location: 'Brooklyn, 11201',
    logo: Images.pngFarm,
    productsCount: 2,
  },
  {
    id: '2',
    name: 'Sunrise Bakery',
    location: 'Brooklyn, 11201',
    logo: Images.pngSunriseBak,
    productsCount: 4,
  },
  {
    id: '3',
    name: 'Ocean Fresh',
    location: 'Brooklyn, 11201',
    logo: Images.pngOceanFish,
    productsCount: 4,
  },
];

export const arrStoresNearYou: IArrStoresNearYou[] = [
  {
    id: '1',
    name: 'Fresh Farm',
    logo: Images.pngFarm,
  },
  {
    id: '2',
    name: 'Green Valle',
    logo: Images.pngSunriseBak,
  },
  {
    id: '3',
    name: 'Sunrise Bake',
    logo: Images.pngOceanFish,
  },
  {
    id: '1',
    name: 'Fresh Farm',
    logo: Images.pngFarm,
  },
  {
    id: '2',
    name: 'Green Valle',
    logo: Images.pngSunriseBak,
  },
  {
    id: '3',
    name: 'Sunrise Bake',
    logo: Images.pngOceanFish,
  },
  {
    id: '1',
    name: 'Fresh Farm',
    logo: Images.pngFarm,
  },
  {
    id: '2',
    name: 'Green Valle',
    logo: Images.pngSunriseBak,
  },
  {
    id: '3',
    name: 'Sunrise Bake',
    logo: Images.pngOceanFish,
  },
  {
    id: '1',
    name: 'Fresh Farm',
    logo: Images.pngFarm,
  },
  {
    id: '2',
    name: 'Green Valle',
    logo: Images.pngSunriseBak,
  },
  {
    id: '3',
    name: 'Sunrise Bake',
    logo: Images.pngOceanFish,
  },
];

export const arrPopularProducts: IPopularProduct[] = [
  {
    id: '1',
    name: 'Fresh Red Onions',
    image: Images.pngOnion,
    price: 18.0,
    unit: 'lb',
    stock: Images.pngInStock,
    tags: ['Organic', 'Local', 'Refrigerated'],
    storeName: 'Fresh Farm Market',
  },
  {
    id: '2',
    name: 'Fresh Coriander',
    image: Images.pngCarrots,
    price: 18.0,
    unit: 'lb',
    stock: Images.pngOutOfStock,
    tags: ['Organic', 'Local'],
    storeName: 'Fresh Farm Market',
  },
  {
    id: '3',
    name: 'Green Apples',
    image: Images.pngCupCakes,
    price: 22.0,
    unit: 'lb',
    stock: Images.pngInStock,
    tags: ['Organic', 'Imported'],
    storeName: 'Green Valley',
  },
  {
    id: '4',
    name: 'Fresh Tomatoes',
    image: Images.pngCarrots,
    price: 14.0,
    unit: 'lb',
    stock: Images.pngInStock,
    tags: ['Local'],
    storeName: 'Sunrise Bakery',
  },
  {
    id: '2',
    name: 'Fresh Coriander',
    image: Images.pngCarrots,
    price: 18.0,
    unit: 'lb',
    stock: Images.pngOutOfStock,
    tags: ['Organic', 'Local'],
    storeName: 'Fresh Farm Market',
  },
  {
    id: '3',
    name: 'Green Apples',
    image: Images.pngCupCakes,
    price: 22.0,
    unit: 'lb',
    stock: Images.pngInStock,
    tags: ['Organic', 'Imported'],
    storeName: 'Green Valley',
  },
  {
    id: '4',
    name: 'Fresh Tomatoes',
    image: Images.pngCarrots,
    price: 14.0,
    unit: 'lb',
    stock: Images.pngInStock,
    tags: ['Local'],
    storeName: 'Sunrise Bakery',
  },
  {
    id: '2',
    name: 'Fresh Coriander',
    image: Images.pngCarrots,
    price: 18.0,
    unit: 'lb',
    stock: Images.pngOutOfStock,
    tags: ['Organic', 'Local'],
    storeName: 'Fresh Farm Market',
  },
  {
    id: '3',
    name: 'Green Apples',
    image: Images.pngCupCakes,
    price: 22.0,
    unit: 'lb',
    stock: Images.pngInStock,
    tags: ['Organic', 'Imported'],
    storeName: 'Green Valley',
  },
  {
    id: '4',
    name: 'Fresh Tomatoes',
    image: Images.pngCarrots,
    price: 14.0,
    unit: 'lb',
    stock: Images.pngInStock,
    tags: ['Local'],
    storeName: 'Sunrise Bakery',
  },
  {
    id: '2',
    name: 'Fresh Coriander',
    image: Images.pngCarrots,
    price: 18.0,
    unit: 'lb',
    stock: Images.pngOutOfStock,
    tags: ['Organic', 'Local'],
    storeName: 'Fresh Farm Market',
  },
  {
    id: '3',
    name: 'Green Apples',
    image: Images.pngCupCakes,
    price: 22.0,
    unit: 'lb',
    stock: Images.pngInStock,
    tags: ['Organic', 'Imported'],
    storeName: 'Green Valley',
  },
  {
    id: '4',
    name: 'Fresh Tomatoes',
    image: Images.pngCarrots,
    price: 14.0,
    unit: 'lb',
    stock: Images.pngInStock,
    tags: ['Local'],
    storeName: 'Sunrise Bakery',
  },
];

export const arrCategoriesBar: IArrCategoriesBar[] = [
  {
    id: '1',
    name: 'All Categories',
  },
  {
    id: '2',
    name: 'Vegetables',
  },
  {
    id: '3',
    name: 'Fruits',
  },
  {
    id: '4',
    name: 'Bakery',
  },
  {
    id: '5',
    name: 'Seafood',
  },
];

export const arrDietaryPerf: IArrDietaryPerf[] = [
  {
    id: '1',
    label: 'Vegan',
  },
  {
    id: '2',
    label: 'Vegetarian',
  },
  {
    id: '3',
    label: 'Gluten-free',
  },
  {
    id: '4',
    label: 'Dairy-free',
  },
  {
    id: '5',
    label: 'Nut-free',
  },
  {
    id: '6',
    label: 'Paleo',
  },
  {
    id: '7',
    label: 'Organic',
  },
];

export const arrProducts: IArrProduct[] = [
  {
    id: '1',
    image: require('../assets/png/pngCupCakes.png'),
    title: 'Fresh Organic Carrots',
    subtitle: 'Fresh Farm products',
    price: 40,
    unit: 'bunch',
  },
  {
    id: '2',
    image: require('../assets/png/pngCarrots.png'),
    title: 'Organic Tomatoes',
    subtitle: 'Farm Fresh',
    price: 30,
    unit: 'kg',
  },
  {
    id: '3',
    image: require('../assets/png/pngCupCakes.png'),
    title: 'Organic Tomatoes',
    subtitle: 'Farm Fresh',
    price: 30,
    unit: 'kg',
  },
];
