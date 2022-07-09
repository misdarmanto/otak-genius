import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { GrayColor } from "../../global/Color";
import TextTitle from "../TextStyle";
import { generateQuesstion } from "../../functions/generateQuestions";

const LEVEL_5 = () => {
  const randomNumber = Math.floor(Math.random() * 2) + 1;
  const { question, randomXYZ } = generateQuesstion();
  const element = [];
  let correctAnswer = question[randomXYZ[2]];
  const solution = [];

  if (randomNumber === 1) {
    element.push(
      <View key={1}>
        <TextTitle style={{ color: GrayColor }}>
          {randomXYZ[0]} + {randomXYZ[0]} ={" "}
          {question[randomXYZ[0]] + question[randomXYZ[0]]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor }}>
          {randomXYZ[1]} - {randomXYZ[0]} ={" "}
          {question[randomXYZ[1]] - question[randomXYZ[0]]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor }}>
          {randomXYZ[1]} <Text style={{ fontSize: 22 }}>x</Text> {randomXYZ[0]}{" "}
          = ?
        </TextTitle>
      </View>
    );

    solution.push(
      <View key={1}>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {randomXYZ[0]} = {question[randomXYZ[0]]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {randomXYZ[1]} = {question[randomXYZ[1]]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {randomXYZ[0]} <Text style={{ fontSize: 20 }}>x</Text> {randomXYZ[1]}{" "}
          = {question[randomXYZ[0]] * question[randomXYZ[1]]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          correct answer: {question[randomXYZ[1]] * question[randomXYZ[0]]}
        </TextTitle>
      </View>
    );
    correctAnswer = question[randomXYZ[1]] * question[randomXYZ[0]]
  } else {
    element.push(
      <View key={1}>
        <TextTitle style={{ color: GrayColor }}>
          {randomXYZ[0]} <Text style={{ fontSize: 22 }}>x</Text> {randomXYZ[0]} ={" "}
          {question[randomXYZ[0]] * question[randomXYZ[0]]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor }}>
          {randomXYZ[1]} - {randomXYZ[0]} ={" "}
          {question[randomXYZ[1]] - question[randomXYZ[0]]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor }}>
          {randomXYZ[1]} <Text style={{ fontSize: 22 }}>+</Text> {randomXYZ[0]}{" "}
          = ?
        </TextTitle>
      </View>
    );

    solution.push(
      <View key={1}>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {randomXYZ[0]} = {question[randomXYZ[0]]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {randomXYZ[1]} = {question[randomXYZ[1]]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {randomXYZ[0]} + {randomXYZ[1]}{" "}
          = {question[randomXYZ[0]] + question[randomXYZ[1]]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          correct answer: {question[randomXYZ[1]] + question[randomXYZ[0]]}
        </TextTitle>
      </View>
    );
    correctAnswer = question[randomXYZ[1]] + question[randomXYZ[0]]
  }

  return { element, correctAnswer, solution };
};


export default LEVEL_5