import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  SharedValue,
} from 'react-native-reanimated';
import { WIDTH_SCREEN } from '../../../../common/constants';
import { ColorsApp } from '../../../../utilities/colors';

type Props = {
  index: number;
  scrollX: SharedValue<number>;
};

const ItemProgessDots = ({ index, scrollX }: Props) => {
  const animatedStyle = useAnimatedStyle(() => {
    const progress = scrollX.value / WIDTH_SCREEN;

    // Smooth scale bubble
    const scale = interpolate(
      progress,
      [index - 1, index, index + 1],
      [0.9, 1.5, 0.9],
      'clamp',
    );

    // Smooth width expansion
    const width = interpolate(
      progress,
      [index - 1, index, index + 1],
      [10, 16, 10],
      'clamp',
    );

    // Color fades instead of snapping
    const opacity = interpolate(
      progress,
      [index - 0.5, index, index + 0.5],
      [0.4, 1, 0.4],
      'clamp',
    );

    return {
      width,
      opacity,
      transform: [{ scale }],
      backgroundColor: ColorsApp.green,
    };
  });

  return (
    <View style={styles.containerDots}>
      <Animated.View style={[styles.dot, animatedStyle]} />
    </View>
  );
};

export default ItemProgessDots;
const styles = StyleSheet.create({
  containerDots: {
    marginHorizontal: 5,
  },
  dot: {
    height: 10,
    borderRadius: 10,
  },
});
