import React from "react";
import * as Progress from "react-native-progress";
import { heightDimensions, widthDimensions } from "../global/Dimensions";
import { mainColor, Secondary } from "../global/Color";

const ProgressStyle = ({progressValue}) => {

  return (
    <Progress.Bar
      progress={progressValue}
      width={widthDimensions(45)}
      height={heightDimensions(2.2)}
      color={mainColor}
      style={{backgroundColor: Secondary}}
      borderColor ={"#FFF"}
      borderRadius={10}
    />
  );
};

export default ProgressStyle;
