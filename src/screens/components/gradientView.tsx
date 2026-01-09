// import React from 'react';
// import { StyleSheet, ViewStyle } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

// type GradientViewProps = {
//   children?: React.ReactNode;
//   styleContainer?: ViewStyle;
// };

// const GradientView: React.FC<GradientViewProps> = ({
//   children,
//   styleContainer,
// }) => {
//   return (
//     <LinearGradient
//       colors={['#FFFBEC', '#FFFFFF', '#F1FDF5']}
//       locations={[0, 0.5, 1]} // smooth center dominance
//       start={{ x: 0, y: 0 }} // top-left
//       end={{ x: 1, y: 1 }} // bottom-right
//       style={[styles.container, styleContainer]}
//     >
//       {children}
//     </LinearGradient>
//   );
// };

// export default GradientView;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type GradientViewProps = {
  children?: React.ReactNode;
  containerStyle?: ViewStyle;
  colors?: string[];
  locations?: number[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
};

const GradientView: React.FC<GradientViewProps> = ({
  children,
  containerStyle,
  colors = ['#FFFBEC', '#FFFFFF', '#F1FDF5'],
  locations = [0, 0.45, 1],
  start = { x: 0, y: 0 },
  end = { x: 1, y: 1 },
}) => {
  return (
    <LinearGradient
      colors={colors}
      locations={locations}
      start={start}
      end={end}
      style={[styles.container, containerStyle]}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
