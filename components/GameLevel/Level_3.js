import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { GrayColor } from "../../global/Color";
import TextTitle from "../TextStyle";
import { generateQuesstion } from "../../functions/generateQuestions";

const LEVEL_3 = () => {
  const { question, randomXYZ } = generateQuesstion();
  const element = [];
  let solution = [];
  const randomValue = Math.floor(Math.random() * 2) + 1;
  let correctAnswer = 0;

  if (randomValue === 1) {
    solution.push(
      <View key={1}>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {question[randomXYZ[0]]} + {question[randomXYZ[1]]} ={" "}
          {question[randomXYZ[0]] + question[randomXYZ[1]]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {question[randomXYZ[1]]} + {question[randomXYZ[2]]} ={" "}
          {question[randomXYZ[1]] + question[randomXYZ[2]]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {question[randomXYZ[2]]} + {question[randomXYZ[0]]} ={" "}
          {question[randomXYZ[2]] + question[randomXYZ[0]]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          correct answer : {question[randomXYZ[2]] + question[randomXYZ[0]]}
        </TextTitle>
      </View>
    );
    correctAnswer = question[randomXYZ[2]] + question[randomXYZ[0]];
    element.push(
      <View key={1}>
        <TextTitle style={{ color: GrayColor }}>
          {question[randomXYZ[0]]}, {question[randomXYZ[1]]} ={" "}
          {question[randomXYZ[0]] + question[randomXYZ[1]]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor }}>
          {question[randomXYZ[1]]}, {question[randomXYZ[2]]} ={" "}
          {question[randomXYZ[1]] + question[randomXYZ[2]]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor }}>
          {question[randomXYZ[2]]}, {question[randomXYZ[0]]} = ?
        </TextTitle>
      </View>
    );
  } else {
    solution.push(
      <View key={1}>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {question[randomXYZ[0]]} x {question[randomXYZ[1]]} ={" "}
          {question[randomXYZ[0]] * question[randomXYZ[1]]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {question[randomXYZ[1]]} x {question[randomXYZ[2]]} ={" "}
          {question[randomXYZ[1]] * question[randomXYZ[2]]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {question[randomXYZ[2]]} x {question[randomXYZ[0]]} ={" "}
          {question[randomXYZ[2]] * question[randomXYZ[0]]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          correct answer : {question[randomXYZ[2]] * question[randomXYZ[0]]}
        </TextTitle>
      </View>
    );

    correctAnswer = question[randomXYZ[2]] * question[randomXYZ[0]];
    element.push(
      <View key={1}>
        <TextTitle style={{ color: GrayColor }}>
          {question[randomXYZ[0]]}, {question[randomXYZ[1]]} ={" "}
          {question[randomXYZ[0]] * question[randomXYZ[1]]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor }}>
          {question[randomXYZ[1]]}, {question[randomXYZ[2]]} ={" "}
          {question[randomXYZ[1]] * question[randomXYZ[2]]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor }}>
          {question[randomXYZ[2]]}, {question[randomXYZ[0]]} = ?
        </TextTitle>
      </View>
    );
  }

  return { element, correctAnswer, solution };
};

export default LEVEL_3;
