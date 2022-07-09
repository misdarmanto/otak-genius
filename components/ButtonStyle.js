import React, { useState } from "react";
import {  StyleSheet, Pressable } from "react-native";
import { mainColor } from "../global/Color";
import { heightDimensions, widthDimensions } from "../global/Dimensions";

const ButtonStyle = ({ children, onPress, width, style, disabled }) => {
  const [btnPress, setBtnPress] = useState(false);
  return (
    <Pressable style={[styles.btnFirstLayer, { width: width + 5 }]}>
      <Pressable
        disabled={disabled}
        onPress={onPress}
        onPressIn={() => setBtnPress(true)}
        onPressOut={() => setBtnPress(false)}
        style={[
          styles.btnSecondLayer,
          {
            height: btnPress ? heightDimensions(8.8) : heightDimensions(8),
            width: btnPress ? width + 5 : width,
          },
          style
        ]}
      >
        {children}
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnFirstLayer: {
    height: heightDimensions(8.8),
    marginTop: heightDimensions(0.8),
    backgroundColor: "#F4F4F4",
    borderRadius: 10,
    marginHorizontal: widthDimensions(1),
  },
  btnSecondLayer: {
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: heightDimensions(7),
    backgroundColor: mainColor,
    borderRadius: 10,
    paddingHorizontal: widthDimensions(3),
  },
});

export default ButtonStyle;
