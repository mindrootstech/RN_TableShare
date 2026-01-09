import { KeyboardTypeOptions } from 'react-native';

export interface IArrOnBoardingData {
  id: number;
  image: any;
  title: string;
  desc: string;
}

export interface IArrSignUpFields {
  key: string;
  label: string;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
}

export interface IStoreItem {
  id: string;
  name: string;
  location: string;
  logo: any;
  productsCount: number;
}

export interface IArrStoresNearYou {
  id: string;
  name: string;
  logo: any;
}

export interface IPopularProduct {
  id: string;
  name: string;
  image: any;
  price: number;
  unit: string;
  stock: any;
  tags: string[];
  storeName: string;
}

export interface IArrCategoriesBar {
  id: string;
  name: string;
}

export interface IArrDietaryPerf {
  id: string;
  label: string;
}

export interface IArrProduct {
  id: string;
  image: any;
  title: string;
  subtitle: string;
  price: number;
  unit: string;
}
