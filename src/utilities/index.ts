import { PixelRatio } from 'react-native';

export const pixelPerfection = (pixel: number) => {
  return (
    PixelRatio.getPixelSizeForLayoutSize(pixel) *
    (PixelRatio.get() < 3 ? 1.2 : 1)
  );
};
