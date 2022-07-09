import React from "react";
import { View, Text } from "react-native";
import { generateQuesstion } from "../../functions/generateQuestions";
import TextTitle from "../TextStyle";
import { GrayColor } from "../../global/Color";

const LEVEL_2 = () => {
  const { question, randomXYZ } = generateQuesstion();
  const element = [];
  const solution = [];
  let correctAnswer = 0;
  const randomValue = Math.floor(Math.random() * 2) + 1;

  if (randomValue === 1) {
    element.push(
      <View key={1} style={{justifyContent: "center", alignItems: "center"}}>
        <TextTitle style={{ color: GrayColor }}>
          {randomXYZ[0]} <Text style={{ fontSize: 22 }}>x</Text>{" "}
          {question[randomXYZ[1]]} = {question[randomXYZ[0]] * question[randomXYZ[1]]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor }}>   {randomXYZ[0]} = ?</TextTitle>
      </View>
    );
    solution.push(
      <View key={1}>
        <TextTitle style={{ color: GrayColor }}>
          {randomXYZ[0]} = {question[randomXYZ[0]]}
        </TextTitle>
      </View>
    );
    correctAnswer = question[randomXYZ[0]];
  } else {
    element.push(
      <View key={1} style={{justifyContent: "center", alignItems: "center"}}>
        <TextTitle style={{ color: GrayColor }}>
          {randomXYZ[0]} <Text style={{ fontSize: 22 }}>-</Text>{" "}
          {question[randomXYZ[1]]} ={" "}
          {question[randomXYZ[0]] * 9 - question[randomXYZ[1]]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor }}>   {randomXYZ[0]} = ?</TextTitle>
      </View>
    );

    solution.push(
      <View key={1}>
        <TextTitle style={{ color: GrayColor }}>
          {randomXYZ[0]} = {question[randomXYZ[0]] * 9}
        </TextTitle>
      </View>
    );
    correctAnswer = question[randomXYZ[0]] * 9
  }
  return { element, correctAnswer, solution };
};

export default LEVEL_2;
