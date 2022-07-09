import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";

 function NoInternetAnimation() {
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
        style={{ width: 200, height: 200 }}
        source={require("../assets/lottie/8719-t-rex.json")}
        autoPlay
        loop={true}
      />
    </View>
  );
}

export default NoInternetAnimation
