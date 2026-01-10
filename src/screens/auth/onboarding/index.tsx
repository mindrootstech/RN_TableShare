import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  arrOnBoardingData,
  HEIGHT_SCREEN,
  WIDTH_SCREEN,
} from '../../../common/constants';
import { AuthStackRoots } from '../../../navigation/AuthNavigation';
// import { useAppDispatch } from '../../../redux/reduxStore';
import { ColorsApp } from '../../../utilities/colors';
import ItemOnboardingList from './component/itemOnboardingList';
import ItemProgessDots from './component/itemProgessDots';

type Props = NativeStackScreenProps<AuthStackRoots, 'OnBoarding'>;

const OnBoarding = ({ navigation }: Props) => {
  // const dispatch = useAppDispatch();
  const scrollX = useSharedValue(0);
  const flatListRef = useRef<Animated.FlatList<any>>(null);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const onPressNext = () => {
    const nextIndex = Math.round(scrollX.value / WIDTH_SCREEN) + 1;
    if (nextIndex < arrOnBoardingData.length) {
      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
    } else {
      navigation.navigate('Login');
      // console.log('hhh');
      // dispatch(
      //   loginUser({
      //     isLoggedIn: true,
      //     authToken: 'signin',
      //     isOnBoarding: true,
      //   }),
      // );
    }
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        data={arrOnBoardingData}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => (
          <ItemOnboardingList
            item={item}
            index={index}
            scrollX={scrollX}
            onPressNext={onPressNext}
          />
        )}
      />

      <View style={styles.containerProgressDots}>
        {arrOnBoardingData.map((_, index) => (
          <ItemProgessDots key={index} index={index} scrollX={scrollX} />
        ))}
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorsApp.theme,
  },
  containerProgressDots: {
    position: 'absolute',
    top: HEIGHT_SCREEN / 1.8 + 24,
    alignSelf: 'center',
    flexDirection: 'row',
  },
});
