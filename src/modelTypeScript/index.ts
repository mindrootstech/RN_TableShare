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
