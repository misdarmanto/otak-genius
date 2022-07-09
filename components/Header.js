import React, { useState, useEffect, useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import { widthDimensions } from "../global/Dimensions";
import { GrayColor, mainColor } from "../global/Color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import TextTitle from "./TextStyle";
import { ContextApi } from "../functions/Context";

function Headerstyle() {
  const { setShowModal, gameLevelArray } = useContext(ContextApi);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: widthDimensions(90),
      }}
    >
      <TouchableOpacity onPress={() => setShowModal(true)}>
        <MaterialCommunityIcons
          name="dots-vertical"
          size={40}
          color={GrayColor}
        />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Ionicons name="flash" size={35} color={mainColor} />
        <TextTitle style={{ color: GrayColor, fontSize: 16 }}>
          Level: {  gameLevelArray[gameLevelArray.length - 1]}
        </TextTitle>
      </View>
    </View>
  );
}

export default Headerstyle;
