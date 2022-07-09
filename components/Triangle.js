import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { GrayColor, mainColor } from "../global/Color";
import { heightDimensions, widthDimensions } from "../global/Dimensions";


export default function Triangle({ C1, C2, C3 }) {
  return (
    <View style={styles.container}>
      <Text style={{ color: GrayColor }}>{C1}</Text>
      <View style={styles.triangle} />
      <View style={styles.bottomContainer}>
        <Text style={{ color: GrayColor }}>{C2}</Text>
        <Text style={{ color: GrayColor }}>{C3}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: widthDimensions(2)
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: widthDimensions(8),
    borderRightWidth: widthDimensions(8),
    borderBottomWidth: widthDimensions(12),
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: mainColor,
  },
  bottomContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: widthDimensions(25),
  },
});
