import React, { useState } from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import { Entypo } from "@expo/vector-icons";
import { GrayColor } from "../global/Color";
import { heightDimensions, widthDimensions } from "../global/Dimensions";

function NextLevelAnimation() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
      }}
    >
      <LottieView
        style={{ width: widthDimensions(50), height: heightDimensions(50) }}
        source={require("../assets/lottie/nextlevelTropi.json")}
        autoPlay
        loop={false}
      />
    </View>
  );
}

export default NextLevelAnimation;
