import * as React from "react";
import Svg, { G, Path, Line } from "react-native-svg";
const BeneficiosIcon = (props: any) => (
  <Svg
    id="Icons"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 35 40"
    xmlSpace="preserve"
    {...props}
  >
    <G>
      <Path
        className="st0"
        d="M17.9,9.9c-4.6,0.9-6,2.3-6.9,6.9c-0.9-4.6-2.3-6-6.9-6.9C8.7,9,10.1,7.6,11,3C11.9,7.6,13.3,9,17.9,9.9z"
      />
    </G>
    <G>
      <Path
        className="st0"
        d="M21.8,25c-3.2,0.6-4.1,1.6-4.8,4.8c-0.6-3.2-1.6-4.1-4.8-4.8c3.2-0.6,4.1-1.6,4.8-4.8 C17.6,23.4,18.6,24.4,21.8,25z"
      />
    </G>
    <G>
      <Path
        className="st0"
        d="M29,15c-2.6,0.5-3.4,1.3-3.9,3.9c-0.5-2.6-1.3-3.4-3.9-3.9c2.6-0.5,3.4-1.3,3.9-3.9C25.6,13.7,26.4,14.5,29,15 z"
      />
    </G>
    <Line className="st0" x1={5} y1={23} x2={5} y2={23} />
    <Line className="st0" x1={28} y1={6} x2={28} y2={6} />
  </Svg>
);
export default BeneficiosIcon;
