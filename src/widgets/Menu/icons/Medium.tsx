import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="-75 -50 1150 1150" {...props}>
      <path d="M500,10C229.4,10,10,229.4,10,500c0,270.6,219.4,490,490,490c270.6,0,490-219.4,490-490C990,229.4,770.6,10,500,10z M788.7,332.9h-15.2c-16.8,0-30.4,13.6-30.4,30.4v265.9c0,16.8,13.6,30.4,30.4,30.4h15.2v68.4H579.8v-68.4h41.8V359.9L519,727.9h-79.8l-102.6-368v299.6h41.8v68.4H203.7v-68.4h15.2c16.8,0,30.4-13.6,30.4-30.4V363.3c0-16.8-13.6-30.4-30.4-30.4h-15.2v-68.4H424l72.2,269.7l72.2-269.7h220.3L788.7,332.9L788.7,332.9z"/>
    </Svg>
  );
};

export default Icon;
