import * as React from "react";
import Svg, { Polyline } from "react-native-svg";

const ArrowNav = (props: any) => (
  <Svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 40 40"
    xmlSpace="preserve"
    {...props}
  >
    <Polyline
      style={{
        fill: "none",
        stroke: "#1723D3",
        strokeWidth: 3,
        strokeMiterlimit: 10,
      }}
      points="19.75,27 8.75,16 19.75,5 "
    />
  </Svg>
);
export default ArrowNav;
