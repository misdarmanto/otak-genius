import React, { useState } from "react";

import { StyleSheet, Pressable, Text } from "react-native";
import { heightDimensions, widthDimensions } from "../global/Dimensions";

const Card = ({ value, onPress, disable, bgColor, textColor }) => {
  const [btnPress, setBtnPress] = useState(false);
  return (
    <Pressable style={styles.btnFirstLayer}>
      <Pressable
        disabled={disable}
        onPress={onPress}
        onPressIn={() => setBtnPress(true)}
        onPressOut={() => setBtnPress(false)}
        style={[
          styles.btnSecondLayer,
          {
            height: btnPress ? heightDimensions(13) : heightDimensions(12),
            width: btnPress ? widthDimensions(26) : widthDimensions(25),
          },
          {backgroundColor : bgColor},
        ]}
      >
        <Text style={[styles.title, {color: textColor}]}>{value}</Text>
        <Text style={styles.titleDesc}>Level</Text>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btnFirstLayer: {
    height: heightDimensions(13),
    width: widthDimensions(26),
    marginTop: heightDimensions(0.8),
    backgroundColor: "#E5E5E5",
    borderRadius: 30,
    marginHorizontal: widthDimensions(6),
    marginVertical: heightDimensions(5)
  },
  btnSecondLayer: {
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: widthDimensions(18),
    backgroundColor: "#A172FF",
    borderRadius: 30,
  },
  title: {
    fontSize: 35,
    color: "#FFF",
    fontWeight: "bold",
  },
  titleDesc: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
});

export default Card;
