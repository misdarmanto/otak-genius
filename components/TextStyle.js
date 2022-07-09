import React from "react";
import { Text } from "react-native";

const TextTitle = ({ children, style }) => {
  return (
    <Text style={[{ fontSize: 30, fontWeight: "bold", color: "#FFF" }, style]}>
      {children}
    </Text>
  );
};


export default TextTitle;