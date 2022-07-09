import React from "react";
import { View } from "react-native";
import TextTitle from "../TextStyle";
import { GrayColor } from "../../global/Color";

const LEVEL_6 = () => {
  const listOperator = ["x", "+"];
  const firstNumber = Math.floor(Math.random() * 11) + 1;
  const randomOperator = Math.floor(Math.random() * 2);
  const listNumber = [];
  const element = [];
  const solution = [];
  let correctAnswer = 0;

  while (listNumber.length < 4) {
    const x = Math.floor(Math.random() * 11) + 1;
    listNumber.push(x);
  }

  if (listOperator[randomOperator] === "x") {
    element.push(
      <View key={1}>
        <TextTitle style={{ color: GrayColor, fontSize: 25 }}>
          {listNumber[0]} = {listNumber[0] * firstNumber}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 25 }}>
          {listNumber[1]} = {listNumber[1] * firstNumber}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 25 }}>
          {listNumber[2]} = {listNumber[2] * firstNumber}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 25 }}>
          {listNumber[3]} = ?
        </TextTitle>
      </View>
    );
    solution.push(
      <View key={1}>
        <TextTitle style={{ color: GrayColor, fontSize: 18 }}>
          {listNumber[0]} x {firstNumber} = {listNumber[0] * firstNumber}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 18 }}>
          {listNumber[1]} x {firstNumber} = {listNumber[1] * firstNumber}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 18 }}>
          {listNumber[2]} x {firstNumber} = {listNumber[2] * firstNumber}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 18 }}>
          {listNumber[3]} x {firstNumber} = {listNumber[3] * firstNumber}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 18 }}>
          correct answer : {listNumber[3] * firstNumber}
        </TextTitle>
      </View>
    );
    correctAnswer = listNumber[3] * firstNumber
  } else if (listOperator[randomOperator] === "+") {
    element.push(
      <View key={1}>
        <TextTitle style={{ color: GrayColor, fontSize: 25 }}>
          {listNumber[0]} = {listNumber[0] + firstNumber}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 25 }}>
          {listNumber[1]} = {listNumber[1] + firstNumber}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 25 }}>
          {listNumber[2]} = {listNumber[2] + firstNumber}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 25 }}>
          {listNumber[3]} = ?
        </TextTitle>
      </View>
    );
    solution.push(
      <View key={1}>
        <TextTitle style={{ color: GrayColor, fontSize: 18 }}>
          {listNumber[0]} + {firstNumber} = {listNumber[0] + firstNumber}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 18 }}>
          {listNumber[1]} + {firstNumber} = {listNumber[1] + firstNumber}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 18 }}>
          {listNumber[2]} + {firstNumber} = {listNumber[2] + firstNumber}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 18 }}>
          {listNumber[3]} + {firstNumber} = {listNumber[3] + firstNumber}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 18 }}>
          correct answer : {listNumber[3] + firstNumber}
        </TextTitle>
      </View>
    );
    correctAnswer = listNumber[3] + firstNumber
  }

  return { element, correctAnswer, solution };
};


export default LEVEL_6