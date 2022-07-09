import React from "react";
import { View } from "react-native";
import TextTitle from "../TextStyle";
import { GrayColor } from "../../global/Color";
import { widthDimensions } from "../../global/Dimensions";

const generate = () => {
  const questionNumber = [];
  const firstNumber = Math.floor(Math.random() * 11) + 1;
  const secondNumber = Math.floor(Math.random() * 5) + 1;
  let temp = firstNumber;
  let operator = "";
  questionNumber.push(firstNumber);
  while (questionNumber.length < 6) {
    if (firstNumber % 2 === 0) {
      operator = "x";
      temp *= secondNumber;
    } else {
      operator = "+";
      temp += secondNumber;
    }
    questionNumber.push(temp);
  }
  return { questionNumber, firstNumber, secondNumber, operator };
};

const LEVEL_4 = () => {
  const { questionNumber, secondNumber, operator } = generate();
  const correctAnswer = questionNumber[questionNumber.length - 1];
  const element = [
    <View key={1}>
      <TextTitle style={{ color: GrayColor, fontSize: 25 }}>
        {questionNumber[0]}, {questionNumber[1]}, {questionNumber[2]},{" "}
        {questionNumber[3]}, {questionNumber[4]}, ... ?
      </TextTitle>
    </View>,
  ];
  const solution = [
    <View key={0} style={{marginHorizontal: widthDimensions(5)}}>
      <TextTitle style={{ color: GrayColor, fontSize: 18 }}>
        {questionNumber[0]} {operator} {secondNumber}, {questionNumber[1]}{" "}
        {operator} {secondNumber}, {questionNumber[2]} {operator} {secondNumber}
        , {questionNumber[3]} {operator} {secondNumber}, {questionNumber[4]}{" "}
        {operator} {secondNumber}...
      </TextTitle>
      <TextTitle style={{ color: GrayColor, fontSize: 18 }}>
        correct answer : {questionNumber[4]} {operator} {secondNumber} =  {questionNumber[5]}
      </TextTitle>
    </View>,
  ];

  return { element, correctAnswer, solution };
};

export default LEVEL_4