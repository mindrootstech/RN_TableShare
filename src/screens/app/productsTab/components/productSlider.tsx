import React, { useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { WIDTH_SCREEN } from '../../../../common/constants';
import { IArrProduct } from '../../../../modelTypeScript';

const ITEM_WIDTH = WIDTH_SCREEN;

const ProductSlider = ({ data }: { data: IArrProduct[] }) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const renderItem = ({
    item,
    index,
  }: {
    item: IArrProduct;
    index: number;
  }) => {
    const inputRange = [
      (index - 1) * ITEM_WIDTH,
      index * ITEM_WIDTH,
      (index + 1) * ITEM_WIDTH,
    ];

    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.85, 1, 0.85],
      extrapolate: 'clamp',
    });

    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.5, 1, 0.5],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.slide}>
        <Animated.Image
          source={item.image}
          style={[
            styles.image,
            {
              transform: [{ scale }],
              opacity,
            },
          ]}
        />
      </View>
    );
  };

  return (
    <View>
      {/* IMAGE SLIDER */}
      <Animated.FlatList
        data={data}
        horizontal
        pagingEnabled
        snapToInterval={ITEM_WIDTH}
        snapToAlignment="center"
        decelerationRate="fast"
        bounces={false} // 🔥 FIX #1
        overScrollMode="never" // 🔥 FIX #1 (Android)
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
      />

      {/* ANIMATED DOTS */}
      <View style={styles.dotsContainer}>
        {data.map((_, index) => {
          const inputRange = [
            (index - 1) * ITEM_WIDTH,
            index * ITEM_WIDTH,
            (index + 1) * ITEM_WIDTH,
          ];

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [1, 1.4, 1],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.4, 1, 0.4],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              style={[
                styles.dot,
                {
                  transform: [{ scale }],
                  opacity,
                },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

export default ProductSlider;
const styles = StyleSheet.create({
  slide: {
    width: ITEM_WIDTH,
    justifyContent: 'center',
    alignItems: 'center', // ✅ ensures center
    paddingVertical: 30,
  },

  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },

  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4CAF50',
    marginHorizontal: 6,
  },
});
