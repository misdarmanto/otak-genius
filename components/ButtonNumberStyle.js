import React, { useState } from "react";
import { StyleSheet, Pressable } from "react-native";
import { mainColor } from "../global/Color";
import { heightDimensions, widthDimensions } from "../global/Dimensions";

function ButtonNumberStyle({ children, onPress }) {
  const [btnPress, setBtnPress] = useState(false);

  return (
    <Pressable style={styles.btnFirstLayer}>
      <Pressable
        onPress={onPress}
        onPressIn={() => setBtnPress(true)}
        onPressOut={() => setBtnPress(false)}
        style={[
          styles.btnSecondLayer,
          {
            height: btnPress ? heightDimensions(8.8) : heightDimensions(8),
            width: btnPress ? widthDimensions(16) : widthDimensions(15),
          },
        ]}
      >
        {children}
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btnFirstLayer: {
    height: heightDimensions(8.8),
    width: widthDimensions(16),
    marginTop: heightDimensions(0.8),
    backgroundColor: "#F4F4F4",
    borderRadius: 10,
    marginHorizontal: widthDimensions(1),
  },
  btnSecondLayer: {
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: heightDimensions(8),
    width: widthDimensions(15),
    backgroundColor: mainColor,
    borderRadius: 10,
  },
});

export default ButtonNumberStyle;
