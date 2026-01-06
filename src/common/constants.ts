import { Dimensions } from 'react-native';
import { IArrOnBoardingData } from '../modelTypeScript';

export const spaceHorizontalAuth = 30;
export const spaceLeftRight = 20;
export const authCodeExpire = 'Unauthenticated.';
export const activeOpacityTouchable = 0.8;
export const HEIGHT_SCREEN = Dimensions.get('screen').height;
export const WIDTH_SCREEN = Dimensions.get('screen').width;

export const arrOnBoardingData: IArrOnBoardingData[] = [
  {
    id: 1,
    image: require('../assets/png/pngOnBoarding2.png'),
    title: 'Fresh from Local Farmers',
    desc: 'Connect directly with farmers and local vendors near you. Order online and pick up directly from the source.',
  },
  {
    id: 2,
    image: require('../assets/png/pngOnBoarding1.png'),
    title: 'Grow Your Farm Business',
    desc: 'Create your online presence as a local farmer. List products and reach customers nearby.',
  },
  {
    id: 3,
    image: require('../assets/png/pngOnBoarding2.png'),
    title: 'Buy Local, Sell Local',
    desc: 'Farmers sell directly to customers nearby. Order online and collect straight from the vendor.',
  },
];
