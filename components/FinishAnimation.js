
import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import { heightDimensions, widthDimensions } from "../global/Dimensions";

function FinishAnimation() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        paddingHorizontal: widthDimensions(2)
      }}
    >
        <LottieView
          style={{ width: widthDimensions(50), height: heightDimensions(60) }}
          source={require("../assets/lottie/trophy-animation.json")}
          autoPlay
          loop={true}
        />
    </View>
  );
}

export default FinishAnimation;
