import * as React from "react";
import Svg, { G, Path, Line, Polygon } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */
const BeneficiosTabIcon = ({isFocused, ...props}: any) => (
  <Svg
    width="20px"
    height="20px"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 0h48v48H0z" fill="none" />
    <G id="Shopicon">
      <Path d="M12,44h4c0-4.411,3.589-8,8-8v-4c-4.411,0-8-3.589-8-8h-4c0,4.411-3.589,8-8,8v4C8.411,36,12,39.589,12,44z M14,30.627 c0.888,1.336,2.037,2.484,3.373,3.373c-1.336,0.889-2.485,2.037-3.373,3.373c-0.888-1.336-2.037-2.484-3.373-3.373 C11.963,33.111,13.112,31.963,14,30.627z" />
      <Polygon points="39.999,32 35.999,32 35.999,36 32,36 32,40 35.999,40 35.999,44 39.999,44 39.999,40 44,40 44,36 39.999,36  " />
      <Path d="M36,4h-4c0,4.411-3.589,8-8,8v4c4.411,0,8,3.589,8,8h4c0-4.411,3.589-8,8-8v-4C39.589,12,36,8.411,36,4z M34,17.373 c-0.888-1.336-2.037-2.484-3.373-3.373c1.336-0.889,2.485-2.037,3.373-3.373c0.888,1.336,2.037,2.484,3.373,3.373 C36.037,14.889,34.888,16.037,34,17.373z" />
      <Polygon points="8.001,16 12.001,16 12.001,12 16,12 16,8 12.001,8 12.001,4 8.001,4 8.001,8 4,8 4,12 8.001,12  " />
    </G>
  </Svg>
);
export default BeneficiosTabIcon;
