// import React from 'react';
// import {
//   View,
//   TouchableOpacity,
//   Text,
//   Platform,
//   Dimensions,
//   StyleSheet,
// } from 'react-native';
// import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import TabBarBackground from './tabBarBackground';
// import { ColorsApp } from '../../utilities/colors';
// import Images from '../../assets';
// import { Fonts } from '../../utilities/fonts';
// import { StylesG } from '../../utilities/stylesG';

// const GREEN = ColorsApp.green;
// const GRAY = ColorsApp.grey;
// const BASE_WIDTH = 375;
// const BASE_HEIGHT = Platform.OS === 'ios' ? 812 : 800;

// const getIcon = (name: string) => {
//   switch (name) {
//     case 'Home':
//       return Images.svgHutOutline;
//     case 'Products':
//       return Images.svgBasketOutline;
//     case 'Stores':
//       return Images.svgStoreOutline;
//     case 'Profile':
//       return Images.svgPersonOutline;
//     default:
//       return null;
//   }
// };

// const getIconFocused = (name: string) => {
//   switch (name) {
//     case 'Home':
//       return Images.svgHut;
//     case 'Products':
//       return Images.svgBasket;
//     case 'Stores':
//       return Images.svgStore;
//     case 'Profile':
//       return Images.svgPerson;
//     default:
//       return null;
//   }
// };

// export default function CustomTabBar({ state, navigation }: BottomTabBarProps) {
//   const insets = useSafeAreaInsets();
//   const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

//   // Responsive scaling for width and height
//   const widthScale = screenWidth / BASE_WIDTH;
//   const heightScale = screenHeight / BASE_HEIGHT;
//   const scale = Math.min(widthScale, heightScale); // Prevent over-scaling

//   const isIOS = Platform.OS === 'ios';
//   const iconSize = 24 * scale;
//   const cartSize = 64 * scale;
//   const cartGap = 32 * scale;
//   // const rowHeight = 80 * scale;
//   const centerBottom = (isIOS ? 48 : 55) * scale;
//   // const activeIndicatorTop = -18 * scale;
//   const activeIndicatorTop = scale + insets.bottom - 55;
//   const labelMarginTop = 6 * scale;
//   const tabHeight = isIOS ? 90 * scale : 75 * scale;

//   return (
//     <View style={[styles.wrapper, { paddingBottom: insets.bottom }]}>
//       {/* Curved SVG background */}
//       <View style={StylesG.shadowStyle}>
//         <TabBarBackground />
//       </View>
//       {/* Tabs Row */}
//       <View
//         style={[
//           styles.row,
//           {
//             bottom: 2 * scale,
//             paddingHorizontal: 15 * scale,
//             height: tabHeight,
//             paddingBottom: Math.max(insets.bottom * 0.5, 0),
//           },
//         ]}
//       >
//         {state.routes.map((route, index) => {
//           const isFocused = state.index === index;
//           const isCart = route.name === 'Cart';
//           const Icon = getIcon(route.name);
//           const IconFocused = getIconFocused(route.name) as any;

//           const onPress = () => navigation.navigate(route.name as never);

//           // Reserve exact space for floating Cart button
//           if (isCart) {
//             return (
//               <View key={route.key} style={{ width: cartSize + cartGap }} />
//             );
//           }

//           return (
//             <TouchableOpacity
//               key={route.key}
//               onPress={onPress}
//               style={styles.tab}
//               activeOpacity={0.8}
//             >
//               {/* Active indicator */}
//               {isFocused && (
//                 <View
//                   style={[
//                     styles.activeIndicator,
//                     {
//                       top: activeIndicatorTop,
//                       width: 32 * scale,
//                       height: 2 * scale,
//                       borderRadius: 2 * scale,
//                     },
//                   ]}
//                 />
//               )}

//               {/* SVG ICON */}
//               {Icon &&
//                 (!isFocused ? (
//                   <Icon width={iconSize} height={iconSize} />
//                 ) : (
//                   <IconFocused width={iconSize} height={iconSize} />
//                 ))}

//               {/* LABEL */}
//               <Text
//                 style={[
//                   styles.txtTabName,
//                   {
//                     color: isFocused ? GREEN : GRAY,
//                     marginTop: labelMarginTop,
//                     fontSize: 8 * scale, // Responsive font size
//                   },
//                 ]}
//               >
//                 {route.name}
//               </Text>
//             </TouchableOpacity>
//           );
//         })}
//       </View>

//       {/* Floating Cart Button */}
//       <TouchableOpacity
//         style={[
//           styles.centerButton,
//           {
//             bottom: centerBottom,
//             width: cartSize,
//             height: cartSize,
//             borderRadius: cartSize / 2,
//           },
//         ]}
//         onPress={() => navigation.navigate('Cart' as never)}
//         activeOpacity={0.9}
//       >
//         <Images.svgCart width={30 * scale} height={30 * scale} />
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   wrapper: {
//     position: 'absolute' as const,
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: ColorsApp.theme,
//   },
//   row: {
//     position: 'absolute' as const,
//     width: '100%',
//     flexDirection: 'row' as const,
//     alignItems: 'center' as const,
//     justifyContent: 'space-around' as const,
//   },
//   tab: {
//     flex: 1,
//     alignItems: 'center' as const,
//     position: 'relative' as const,
//   },
//   activeIndicator: {
//     position: 'absolute' as const,
//     backgroundColor: GREEN,
//   },
//   txtTabName: {
//     ...Fonts.fontNotoSansSemiBold8,
//     textAlign: 'center',
//     includeFontPadding: false,
//   },
//   centerButton: {
//     position: 'absolute' as const,
//     alignSelf: 'center' as const,
//     backgroundColor: ColorsApp.green,
//     alignItems: 'center' as const,
//     justifyContent: 'center' as const,
//   },
// });

import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Platform,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import TabBarBackground from './tabBarBackground';
import { ColorsApp } from '../../utilities/colors';
import Images from '../../assets';
import { Fonts } from '../../utilities/fonts';
import { StylesG } from '../../utilities/stylesG';

/* -------------------------------------------------------------------------- */
/*                                  CONSTANTS                                 */
/* -------------------------------------------------------------------------- */

const GREEN = ColorsApp.green;
const GRAY = ColorsApp.grey;

const BASE_WIDTH = 375; // iPhone X / 13 baseline

const TAB_BAR_HEIGHT_IOS = 110;
const TAB_BAR_HEIGHT_ANDROID = 72;

const ACTIVE_INDICATOR_OFFSET = 26;
const CART_ICON_SIZE = 30;

/* -------------------------------------------------------------------------- */
/*                                   ICONS                                    */
/* -------------------------------------------------------------------------- */

const getIcon = (name: string) => {
  switch (name) {
    case 'Home':
      return Images.svgHutOutline;
    case 'Products':
      return Images.svgBasketOutline;
    case 'Stores':
      return Images.svgStoreOutline;
    case 'Profile':
      return Images.svgPersonOutline;
    default:
      return null;
  }
};

const getIconFocused = (name: string) => {
  switch (name) {
    case 'Home':
      return Images.svgHut;
    case 'Products':
      return Images.svgBasket;
    case 'Stores':
      return Images.svgStore;
    case 'Profile':
      return Images.svgPerson;
    default:
      return null;
  }
};

/* -------------------------------------------------------------------------- */
/*                              CUSTOM TAB BAR                                */
/* -------------------------------------------------------------------------- */

export default function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const { width: screenWidth } = Dimensions.get('window');

  /* --------------------------- Horizontal scaling -------------------------- */
  const scale = Math.min(screenWidth / BASE_WIDTH, 1.1);

  /* ------------------------------ Dimensions ------------------------------- */
  const isIOS = Platform.OS === 'ios';
  const TAB_BAR_HEIGHT = isIOS ? TAB_BAR_HEIGHT_IOS : TAB_BAR_HEIGHT_ANDROID;

  const iconSize = 24 * scale;
  const cartSize = 64 * scale;
  const cartGap = 32 * scale;
  const marginTop = 50 * scale;

  /* --------------------------- Fixed positioning --------------------------- */
  const activeIndicatorTop = TAB_BAR_HEIGHT / 100 - ACTIVE_INDICATOR_OFFSET;
  // TAB_BAR_HEIGHT - ACTIVE_INDICATOR_OFFSET - insets.bottom - 30;

  const centerButtonBottom =
    TAB_BAR_HEIGHT / 2 + insets.bottom - cartSize / 2.3;

  /* -------------------------------------------------------------------------- */

  return (
    <View
      style={[
        styles.wrapper,
        {
          height: TAB_BAR_HEIGHT + insets.bottom,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      {/* Curved background */}
      <View style={[StylesG.shadowStyle, styles.containerBackgorundImg]}>
        <TabBarBackground />
      </View>

      {/* Tabs row */}
      <View style={[styles.row, { height: TAB_BAR_HEIGHT }]}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const isCart = route.name === 'Cart';

          if (isCart) {
            return (
              <View key={route.key} style={{ width: cartSize + cartGap }} />
            );
          }

          const Icon = getIcon(route.name);
          const IconFocused = getIconFocused(route.name) as any;

          return (
            <TouchableOpacity
              key={route.key}
              style={[styles.tab, { marginTop: marginTop }]}
              activeOpacity={0.8}
              onPress={() => navigation.navigate(route.name as never)}
            >
              {isFocused && (
                <View
                  style={[
                    styles.activeIndicator,
                    {
                      top: activeIndicatorTop,
                      width: 32,
                    },
                  ]}
                />
              )}

              {Icon &&
                (isFocused ? (
                  <IconFocused width={iconSize} height={iconSize} />
                ) : (
                  <Icon width={iconSize} height={iconSize} />
                ))}

              <Text
                style={[
                  styles.label,
                  {
                    color: isFocused ? GREEN : GRAY,
                    fontSize: 8 * scale,
                  },
                ]}
              >
                {route.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Floating cart button */}
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.navigate('Cart' as never)}
        style={[
          styles.centerButton,
          {
            width: cartSize,
            height: cartSize,
            borderRadius: cartSize / 2,
            bottom: centerButtonBottom,
          },
        ]}
      >
        <Images.svgCart
          width={CART_ICON_SIZE * scale}
          height={CART_ICON_SIZE * scale}
        />
      </TouchableOpacity>
    </View>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   STYLES                                   */
/* -------------------------------------------------------------------------- */

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: ColorsApp.theme,
  },
  containerBackgorundImg: {
    ...StyleSheet.absoluteFill,
    zIndex: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  activeIndicator: {
    position: 'absolute',
    height: 2,
    borderRadius: 2,
    backgroundColor: GREEN,
  },
  label: {
    ...Fonts.fontNotoSansSemiBold8,
    marginTop: 4,
    includeFontPadding: false,
  },
  centerButton: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: GREEN,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
});

// import React, { useRef } from 'react';
// import {
//   View,
//   TouchableOpacity,
//   Text,
//   StyleSheet,
//   Image,
//   Dimensions,
// } from 'react-native';
// import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

// import { ColorsApp } from '../../utilities/colors';
// import Images from '../../assets';
// import { Fonts } from '../../utilities/fonts';

// const { width: SCREEN_WIDTH } = Dimensions.get('window');

// /* -------------------------------------------------- */
// /* Responsive helpers                                 */
// /* -------------------------------------------------- */

// const TAB_BAR_HEIGHT = SCREEN_WIDTH * 0.33; // ~90–100
// const CART_SIZE = SCREEN_WIDTH * 0.18; // ~64–72
// const GREEN = ColorsApp.green;
// const GRAY = ColorsApp.grey;

// /* -------------------------------------------------- */
// /* Icons                                              */
// /* -------------------------------------------------- */

// const getIcon = (name: string) => {
//   switch (name) {
//     case 'Home':
//       return Images.svgHutOutline;
//     case 'Products':
//       return Images.svgBasketOutline;
//     case 'Stores':
//       return Images.svgStoreOutline;
//     case 'Profile':
//       return Images.svgPersonOutline;
//     default:
//       return null;
//   }
// };

// export default function CustomTabBar({ state, navigation }: BottomTabBarProps) {
//   const insets = useSafeAreaInsets();
//   const tabLayouts = useRef<Record<number, any>>({});

//   const onTabLayout = (index: number) => (e: any) => {
//     tabLayouts.current[index] = e.nativeEvent.layout;
//     const activeLayout = tabLayouts.current[state.index];

//     console.log('x', activeLayout.x);
//     console.log('y', activeLayout.y);
//     console.log('width', activeLayout.width);
//     console.log('height', activeLayout.height);
//   };

//   return (
//     <View style={[styles.container, { paddingBottom: insets.bottom }]}>
//       {/* Background Image */}
//       <Image
//         source={Images.pngTabBarBg}
//         style={styles.background}
//         resizeMode="stretch"
//       />

//       {/* Tabs */}
//       <View style={styles.tabsRow}>
//         {state.routes.map((route, index) => {
//           const isFocused = state.index === index;
//           const isCart = route.name === 'Cart';
//           const Icon = getIcon(route.name);

//           if (isCart) {
//             return <View key={route.key} style={{ width: CART_SIZE }} />;
//           }

//           return (
//             <TouchableOpacity
//               onLayout={onTabLayout(index)}
//               key={route.key}
//               style={styles.tab}
//               activeOpacity={0.8}
//               onPress={() => navigation.navigate(route.name as never)}
//             >
//               {isFocused && <View style={styles.activeIndicator} />}

//               {Icon && (
//                 <Icon
//                   width={24}
//                   height={24}
//                   stroke={isFocused ? GREEN : GRAY}
//                 />
//               )}

//               <Text style={[styles.label, { color: isFocused ? GREEN : GRAY }]}>
//                 {route.name}
//               </Text>
//             </TouchableOpacity>
//           );
//         })}
//       </View>

//       {/* Floating Cart Button */}
//       <TouchableOpacity
//         activeOpacity={0.9}
//         style={[
//           styles.cartButton,
//           {
//             bottom: TAB_BAR_HEIGHT - SCREEN_WIDTH * 0.22 + insets.bottom / 2,
//           },
//         ]}
//         onPress={() => navigation.navigate('Cart' as never)}
//       >
//         <Images.svgCart width={30} height={30} />
//       </TouchableOpacity>
//     </View>
//   );
// }

// /* -------------------------------------------------- */
// /* Styles                                             */
// /* -------------------------------------------------- */

// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     bottom: 0,
//     width: '100%',
//     height: TAB_BAR_HEIGHT + CART_SIZE / 2,
//   },

//   background: {
//     position: 'absolute',
//     bottom: 0,
//     width: SCREEN_WIDTH,
//     height: TAB_BAR_HEIGHT,
//   },

//   tabsRow: {
//     position: 'absolute',
//     bottom: 6,
//     height: TAB_BAR_HEIGHT,
//     width: '100%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: SCREEN_WIDTH * 0.03,
//     justifyContent: 'space-between',
//   },

//   tab: {
//     flex: 1,
//     alignItems: 'center',
//     marginTop: 35,
//   },

//   label: {
//     ...Fonts.fontNotoSansSemiBold8,
//     marginTop: 6,
//   },

//   activeIndicator: {
//     position: 'absolute',
//     bottom: SCREEN_WIDTH * 0.12 + 3,
//     width: 26,
//     height: 3,
//     borderRadius: 2,
//     backgroundColor: GREEN,
//   },

//   cartButton: {
//     position: 'absolute',
//     alignSelf: 'center',
//     width: 64,
//     height: 64,
//     borderRadius: 50,
//     backgroundColor: GREEN,
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 12,
//   },
// });
