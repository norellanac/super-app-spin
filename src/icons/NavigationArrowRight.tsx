import * as React from "react";
import Svg, { Path } from "react-native-svg";

const NavigationArrowRight = (props) => (
  <Svg
    width={props.size || 20} 
    height={props.size || 20}
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path
      style={{
        fill: "#00000050",
      }}
      d="M361.891,242.03L187.347,9.31c-7.714-10.283-22.298-12.365-32.582-4.655 c-10.283,7.713-12.367,22.3-4.655,32.582l164.072,218.758L150.111,474.762c-7.713,10.282-5.627,24.871,4.655,32.582 c4.186,3.14,9.086,4.656,13.945,4.656c7.076,0,14.064-3.215,18.637-9.311l174.544-232.732 C368.097,261.683,368.097,250.304,361.891,242.03z"
    />
  </Svg>
);
export default NavigationArrowRight;
