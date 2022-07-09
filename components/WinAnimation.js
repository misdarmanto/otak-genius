import React, { useState } from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import { Entypo } from "@expo/vector-icons";
import { GrayColor } from "../global/Color"
import { heightDimensions, widthDimensions } from "../global/Dimensions";

function WinAnimation() {
  const [displayAnimation, setDisplayAnimation] = useState(true);
  setTimeout(() => setDisplayAnimation(false), 1000)
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
      }}
    >
      {displayAnimation ? (
        <LottieView
          style={{ width: widthDimensions(50), height: heightDimensions(50) }}
          source={require("../assets/lottie/winner.json")}
          autoPlay
          loop={true}
        />
      ) : (
        <LottieView
        style={{ width: widthDimensions(30), height: heightDimensions(30) }}
        source={require("../assets/lottie/coorwctThumb.json")}
        autoPlay
        loop={true}
      />
      )}
    </View>
  );
}

export default WinAnimation;
