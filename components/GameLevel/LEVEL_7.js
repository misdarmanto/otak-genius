import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { GrayColor } from "../../global/Color";
import TextTitle from "../TextStyle";
import { generateQuesstion } from "../../functions/generateQuestions";

const LEVEL_7 = () => {
  const { question, randomXYZ } = generateQuesstion();
  const element = [];
  let solution = [];

  const randomValue = Math.floor(Math.random() * 4);
  const multiplayValue = Math.floor(Math.random() * 10) + 1;
  let correctAnswer = 0;

  // a + b + c
  if (randomValue === 0) {
    solution.push(
      <View key={1}>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {question[randomXYZ[0]]} + {question[randomXYZ[1]]} + {multiplayValue}{" "}
          = {question[randomXYZ[0]] + question[randomXYZ[1]] + multiplayValue}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {question[randomXYZ[1]]} + {question[randomXYZ[2]]} + {multiplayValue}{" "}
          = {question[randomXYZ[1]] + question[randomXYZ[2]] + multiplayValue}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {question[randomXYZ[2]]} + {question[randomXYZ[0]]} + {multiplayValue}{" "}
          = {question[randomXYZ[2]] + question[randomXYZ[0]] + multiplayValue}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          correct answer :{" "}
          {question[randomXYZ[2]] + question[randomXYZ[0]] + multiplayValue}
        </TextTitle>
      </View>
    );
    correctAnswer =
      question[randomXYZ[2]] + question[randomXYZ[0]] + multiplayValue;
    element.push(
      <View key={1}>
        <TextTitle style={{ color: GrayColor }}>
          {question[randomXYZ[0]]}, {question[randomXYZ[1]]}, x ={" "}
          {question[randomXYZ[0]] + question[randomXYZ[1]] + multiplayValue}
        </TextTitle>
        <TextTitle style={{ color: GrayColor }}>
          {question[randomXYZ[1]]}, {question[randomXYZ[2]]}, x ={" "}
          {question[randomXYZ[1]] + question[randomXYZ[2]] + multiplayValue}
        </TextTitle>
        <TextTitle style={{ color: GrayColor }}>
          {question[randomXYZ[2]]}, {question[randomXYZ[0]]}, x = ?
        </TextTitle>
      </View>
    );
  } else if (randomValue === 1) {
    // a * b * c
    solution.push(
      <View key={1}>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {question[randomXYZ[0]]} x {question[randomXYZ[1]]} x {multiplayValue}{" "}
          = {question[randomXYZ[0]] * question[randomXYZ[1]] * multiplayValue}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {question[randomXYZ[1]]} x {question[randomXYZ[2]]} x {multiplayValue}{" "}
          = {question[randomXYZ[1]] * question[randomXYZ[2]] * multiplayValue}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {question[randomXYZ[2]]} x {question[randomXYZ[0]]} x {multiplayValue}{" "}
          = {question[randomXYZ[2]] * question[randomXYZ[0]] * multiplayValue}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          correct answer :{" "}
          {question[randomXYZ[2]] * question[randomXYZ[0]] * multiplayValue}
        </TextTitle>
      </View>
    );
    correctAnswer =
      question[randomXYZ[2]] * question[randomXYZ[0]] * multiplayValue;
    element.push(
      <View key={1}>
        <TextTitle style={{ color: GrayColor }}>
          {question[randomXYZ[0]]}, {question[randomXYZ[1]]}, x ={" "}
          {question[randomXYZ[0]] * question[randomXYZ[1]] * multiplayValue}
        </TextTitle>
        <TextTitle style={{ color: GrayColor }}>
          {question[randomXYZ[1]]}, {question[randomXYZ[2]]}, x ={" "}
          {question[randomXYZ[1]] * question[randomXYZ[2]] * multiplayValue}
        </TextTitle>
        <TextTitle style={{ color: GrayColor }}>
          {question[randomXYZ[2]]}, {question[randomXYZ[0]]}, x = ?
        </TextTitle>
      </View>
    );
  } else if (randomValue === 2) {
    // a * b + c
    solution.push(
      <View key={1}>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
         ( {question[randomXYZ[0]]} x {question[randomXYZ[1]]} ) + {multiplayValue}{" "}
          = {question[randomXYZ[0]] * question[randomXYZ[1]] + multiplayValue}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
         ( {question[randomXYZ[1]]} x {question[randomXYZ[2]]} ) + {multiplayValue}{" "}
          = {question[randomXYZ[1]] * question[randomXYZ[2]] + multiplayValue}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
         ( {question[randomXYZ[2]]} x {question[randomXYZ[0]]} ) + {multiplayValue}{" "}
          = {question[randomXYZ[2]] * question[randomXYZ[0]] + multiplayValue}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          correct answer :{" "}
          {question[randomXYZ[2]] * question[randomXYZ[0]] + multiplayValue}
        </TextTitle>
      </View>
    );
    correctAnswer =
      question[randomXYZ[2]] * question[randomXYZ[0]] + multiplayValue;
    element.push(
      <View key={1}>
        <TextTitle style={{ color: GrayColor }}>
          {question[randomXYZ[0]]}, {question[randomXYZ[1]]}, x ={" "}
          {question[randomXYZ[0]] * question[randomXYZ[1]] + multiplayValue}
        </TextTitle>
        <TextTitle style={{ color: GrayColor }}>
          {question[randomXYZ[1]]}, {question[randomXYZ[2]]}, x ={" "}
          {question[randomXYZ[1]] * question[randomXYZ[2]] + multiplayValue}
        </TextTitle>
        <TextTitle style={{ color: GrayColor }}>
          {question[randomXYZ[2]]}, {question[randomXYZ[0]]}, x = ?
        </TextTitle>
      </View>
    );
  } else {
    //   a + (b * c)

    solution.push(
      <View key={1}>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {question[randomXYZ[0]]} + ( {question[randomXYZ[1]]} x {multiplayValue} ){" "}
          = {question[randomXYZ[0]] + question[randomXYZ[1]] * multiplayValue}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {question[randomXYZ[1]]} + ( {question[randomXYZ[2]]} x {multiplayValue} ){" "}
          = {question[randomXYZ[1]] + question[randomXYZ[2]] * multiplayValue}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {question[randomXYZ[2]]} + ( {question[randomXYZ[0]]} x {multiplayValue} ){" "}
          = {question[randomXYZ[2]] + question[randomXYZ[0]] * multiplayValue}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          correct answer :{" "}
          {question[randomXYZ[2]] + question[randomXYZ[0]] * multiplayValue}
        </TextTitle>
      </View>
    );
    correctAnswer =
      question[randomXYZ[2]] + question[randomXYZ[0]] * multiplayValue;
    element.push(
      <View key={1}>
        <TextTitle style={{ color: GrayColor }}>
          {question[randomXYZ[0]]}, {question[randomXYZ[1]]}, x ={" "}
          {question[randomXYZ[0]] + question[randomXYZ[1]] * multiplayValue}
        </TextTitle>
        <TextTitle style={{ color: GrayColor }}>
          {question[randomXYZ[1]]}, {question[randomXYZ[2]]}, x ={" "}
          {question[randomXYZ[1]] + question[randomXYZ[2]] * multiplayValue}
        </TextTitle>
        <TextTitle style={{ color: GrayColor }}>
          {question[randomXYZ[2]]}, {question[randomXYZ[0]]}, x = ?
        </TextTitle>
      </View>
    );
  }

  return { element, correctAnswer, solution };
};


export default LEVEL_7