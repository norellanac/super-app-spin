import * as React from "react";
import Svg, { Rect } from "react-native-svg";
const HomeIcon = (props: any) => (
  <Svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="15px"
    height="15px"
    viewBox="0 0 64 64"
    enableBackground="new 0 0 64 64"
    xmlSpace="preserve"
    {...props}
  >
    <Rect
      x={1}
      y={1}
      fill="none"
      stroke="#000000"
      strokeWidth={2}
      strokeMiterlimit={10}
      width={27}
      height={27}
    />
    <Rect
      x={36}
      y={1}
      fill="none"
      stroke="#000000"
      strokeWidth={2}
      strokeMiterlimit={10}
      width={27}
      height={27}
    />
    <Rect
      x={1}
      y={36}
      fill="none"
      stroke="#000000"
      strokeWidth={2}
      strokeMiterlimit={10}
      width={27}
      height={27}
    />
    <Rect
      x={36}
      y={36}
      fill="none"
      stroke="#000000"
      strokeWidth={2}
      strokeMiterlimit={10}
      width={27}
      height={27}
    />
  </Svg>
);
export default HomeIcon;