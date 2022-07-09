import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { widthDimensions, heightDimensions } from "../../global/Dimensions";
import { mainColor, GrayColor } from "../../global/Color";
import Triangle from "../../components/Triangle";

const LEVEL_9 = () => {
  const arr = [];
  for (let i = 0; i < 6; i++) {
    arr.push(Math.floor(Math.random() * 10) + 1);
  }

  const element = [];
  const solution = [];
  let correctAnswer = 0;
  const randomValue = Math.floor(Math.random() * 3);

  if (randomValue === 0) {
    element.push(
      <View key={1}>
        <Triangle C1={arr[0]} C2={arr[1]} C3={arr[0] + arr[1]} />
        <View style={styles.bottomTriangle}>
          <Triangle C1={arr[2]} C2={arr[3]} C3={arr[2] + arr[3]} />
          <Triangle C1={arr[4]} C2={arr[5]} C3={"?"} />
        </View>
      </View>
    );
    solution.push(
      <View key={1}>
        <Triangle C1={arr[0]} C2={arr[1]} C3={`${arr[0]} + ${arr[1]}`} />
        <View style={styles.bottomTriangle}>
          <Triangle C1={arr[2]} C2={arr[3]} C3={`${arr[2]} + ${arr[3]}`} />
          <Triangle C1={arr[4]} C2={arr[5]} C3={`${arr[4]} + ${arr[5]}`} />
        </View>
      </View>
    );
    correctAnswer = arr[4] + arr[5];

  } else if(randomValue === 1) {
    element.push(
      <View key={1}>
        <Triangle C1={"?"} C2={arr[0]} C3={1} />
        <View style={styles.bottomTriangle}>
          <Triangle C1={arr[4] * arr[5]} C2={arr[4]} C3={arr[5]} />
          <Triangle C1={arr[2] * arr[3]} C2={arr[2]} C3={arr[3]} />
        </View>
      </View>
    );
    solution.push(
      <View key={1}>
        <Triangle C1={`${arr[0]} x ${arr[1]}`} C2={arr[0]} C3={arr[1]} />
        <View style={styles.bottomTriangle}>
          <Triangle C1={`${arr[2]} x ${arr[3]}`} C2={arr[2]} C3={arr[3]} />
          <Triangle C1={`${arr[4]} x ${arr[5]}`} C2={arr[4]} C3={arr[5]} />
        </View>
      </View>
    );
    correctAnswer = arr[0] * arr[1];
  } else {
    element.push(
      <View key={1}>
        <Triangle C1={"?"} C2={arr[0]} C3={1} />
        <View style={styles.bottomTriangle}>
          <Triangle C1={(arr[4] + arr[5]) - arr[5]} C2={(arr[4] + arr[5])} C3={arr[5]} />
          <Triangle C1={(arr[2] + arr[3]) - arr[3]} C2={(arr[2] + arr[3])} C3={arr[3]} />
        </View>
      </View>
    );
    solution.push(
      <View key={1}>
        <Triangle C1={`${(arr[0] + arr[1])} - ${arr[1]}`} C2={(arr[0] + arr[1])} C3={arr[1]} />
        <View style={styles.bottomTriangle}>
          <Triangle C1={`${(arr[2] + arr[3])} - ${arr[3]}`} C2={(arr[2] + arr[3])} C3={arr[3]} />
          <Triangle C1={`${arr[4] + arr[5]} - ${arr[5]}`} C2={arr[4] + arr[5]} C3={arr[5]} />
        </View>
      </View>
    );
      

    correctAnswer = arr[0] 
  }

  return { element, solution, correctAnswer };
};

const styles = StyleSheet.create({
  bottomTriangle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: heightDimensions(1),
    paddingHorizontal: widthDimensions(5),
  },
});

export default LEVEL_9;
