// import React from 'react';
// import Svg, { Path } from 'react-native-svg';
// import { Dimensions } from 'react-native';

// const { width } = Dimensions.get('window');

// const TAB_HEIGHT = 75;
// const EXTRA_TOP = 30; // 👈 space for upward curve
// const NOTCH_RADIUS = 38;
// const NOTCH_PEAK = -30;
// const STROKE_WIDTH = 0.5;

// export default function TabBarBackground() {
//   const c = width / 2;

//   return (
//     <Svg
//       width={width}
//       height={TAB_HEIGHT + EXTRA_TOP}
//       viewBox={`0 ${-EXTRA_TOP} ${width} ${TAB_HEIGHT + EXTRA_TOP}`}
//     >
//       {/* 1️⃣ FILL (no stroke) */}
//       <Path
//         d={`
//           M0 20
//           Q0 0 20 0
//           H${c - NOTCH_RADIUS - 18}

//           C${c - NOTCH_RADIUS} 0
//            ${c - NOTCH_RADIUS} ${NOTCH_PEAK}
//            ${c} ${NOTCH_PEAK}

//           C${c + NOTCH_RADIUS} ${NOTCH_PEAK}
//            ${c + NOTCH_RADIUS} 0
//            ${c + NOTCH_RADIUS + 18} 0

//           H${width - 20}
//           Q${width} 0 ${width} 20
//           V${TAB_HEIGHT}
//           H0
//           Z
//         `}
//         fill="#FFFFFF"
//       />

//       {/* 2️⃣ TOP STROKE ONLY */}
//       <Path
//         d={`
//           M0 20
//           Q0 0 20 0
//           H${c - NOTCH_RADIUS - 18}

//           C${c - NOTCH_RADIUS} 0
//            ${c - NOTCH_RADIUS} ${NOTCH_PEAK}
//            ${c} ${NOTCH_PEAK}

//           C${c + NOTCH_RADIUS} ${NOTCH_PEAK}
//            ${c + NOTCH_RADIUS} 0
//            ${c + NOTCH_RADIUS + 18} 0

//           H${width - 20}
//           Q${width} 0 ${width} 20
//         `}
//         fill="none"
//         stroke="#00000040"
//         strokeWidth={STROKE_WIDTH}
//       />
//     </Svg>
//   );
// }

import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

/* -------------------------------------------------- */
/* Responsive scale                                   */
/* -------------------------------------------------- */

const BASE_WIDTH = 375; // iPhone 11 / Figma base
const scale = width / BASE_WIDTH;

/* -------------------------------------------------- */
/* Scaled dimensions                                  */
/* -------------------------------------------------- */

const TAB_HEIGHT = 63 * scale;
const EXTRA_TOP = 32 * scale;

const NOTCH_RADIUS = 34 * scale;
const NOTCH_PEAK = -30 * scale;

const CORNER_RADIUS = 10 * scale;
const NOTCH_SMOOTH = 18 * scale;
const STROKE_WIDTH = 0.9;

export default function TabBarBackground() {
  const c = width / 2;

  return (
    <Svg
      width={width}
      height={TAB_HEIGHT + EXTRA_TOP}
      viewBox={`0 ${-EXTRA_TOP} ${width} ${TAB_HEIGHT + EXTRA_TOP}`}
    >
      {/* 1️⃣ Background fill */}
      <Path
        d={`
          M0 ${CORNER_RADIUS}
          Q0 0 ${CORNER_RADIUS} 0

          H${c - NOTCH_RADIUS - NOTCH_SMOOTH}

          C${c - NOTCH_RADIUS} 0
           ${c - NOTCH_RADIUS} ${NOTCH_PEAK}
           ${c} ${NOTCH_PEAK}

          C${c + NOTCH_RADIUS} ${NOTCH_PEAK}
           ${c + NOTCH_RADIUS} 0
           ${c + NOTCH_RADIUS + NOTCH_SMOOTH} 0

          H${width - CORNER_RADIUS}
          Q${width} 0 ${width} ${CORNER_RADIUS}

          V${TAB_HEIGHT}
          H0
          Z
        `}
        fill="#FFFFFF"
      />

      {/* 2️⃣ Top stroke only */}
      <Path
        d={`
          M0 ${CORNER_RADIUS}
          Q0 0 ${CORNER_RADIUS} 0

          H${c - NOTCH_RADIUS - NOTCH_SMOOTH}

          C${c - NOTCH_RADIUS} 0
           ${c - NOTCH_RADIUS} ${NOTCH_PEAK}
           ${c} ${NOTCH_PEAK}

          C${c + NOTCH_RADIUS} ${NOTCH_PEAK}
           ${c + NOTCH_RADIUS} 0
           ${c + NOTCH_RADIUS + NOTCH_SMOOTH} 0

          H${width - CORNER_RADIUS}
          Q${width} 0 ${width} ${CORNER_RADIUS}
        `}
        fill="none"
        stroke="#00000040"
        strokeWidth={STROKE_WIDTH}
      />
    </Svg>
  );
}
