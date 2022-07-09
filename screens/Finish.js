import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import ButtonStyle from "../components/ButtonStyle";
import TextTitle from "../components/TextStyle";
import LottieView from "lottie-react-native";
import { heightDimensions, widthDimensions } from "../global/Dimensions";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ContextApi } from "../functions/Context";
import { mainColor } from "../global/Color";

export default function Finish() {
  const navigation = useNavigation();
  const { setGameLevel, setGameLevelArray } = useContext(ContextApi);

  const resetGame = () => {
    AsyncStorage.clear();
    setGameLevel(1);
    setGameLevelArray([1]);
  };

  useEffect(() => resetGame(), []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        paddingHorizontal: widthDimensions(2),
      }}
    >
      <TextTitle style={{ color: mainColor }}>Finish</TextTitle>
      <LottieView
        style={{ width: widthDimensions(50), height: heightDimensions(58) }}
        source={require("../assets/lottie/trophy-animation.json")}
        autoPlay
        loop={true}
      />
      <ButtonStyle
        onPress={() => navigation.navigate("Home")}
        width={widthDimensions(50)}
        style={{ justifyContent: "center" }}
      >
        <TextTitle>Home</TextTitle>
      </ButtonStyle>
    </View>
  );
}
