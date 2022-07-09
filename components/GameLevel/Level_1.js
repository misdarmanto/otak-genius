import React from "react";
import { View } from "react-native";
import TextTitle from "../TextStyle";
import { GrayColor } from "../../global/Color";

const generateValue = () => {
  const a = Math.floor(Math.random() * 10 + 1) + 1;
  const b = Math.floor(Math.random() * 10 + 1) + 1;
  const c = Math.floor(Math.random() * 10 + 1) + 1;
  const d = Math.floor(Math.random() * 10 + 1) + 1;
  return [a, b, c, d];
};

const LEVEL_1 = () => {
  const question = generateValue();
  const element = [];
  const solution = [];
  let correctAnswer = 0;
  const randomValue = Math.floor(Math.random() * 3) + 1;

  if (randomValue === 1) {
    element.push(
      <View key={1}>
        <TextTitle style={{ color: GrayColor }}>
          {question[0]} + {question[1]} x {question[2]} : {question[1]} -{" "}
          {question[0]} = ?
        </TextTitle>
      </View>
    );
    solution.push(
      <View key={1}>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {question[1]} x {question[2]} = {question[1] * question[2]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {question[1] * question[2]} : {question[1]} ={" "}
          {(question[1] * question[2]) / question[1]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {(question[1] * question[2]) / question[1]} + {question[0]} ={" "}
          {(question[1] * question[2]) / question[1] + question[0]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {(question[1] * question[2]) / question[1] + question[0]} -{" "}
          {question[0]} ={" "}
          {(question[1] * question[2]) / question[1] +
            question[0] -
            question[0]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          correct answer ={" "}
          {(question[1] * question[2]) / question[1] +
            question[0] -
            question[0]}
        </TextTitle>
      </View>
    );
    correctAnswer =
      question[0] + (question[1] * question[2]) / question[1] - question[0];
  } else if (randomValue === 2) {
    element.push(
      <View key={1}>
        <TextTitle style={{ color: GrayColor }}>
          {question[0]} x {question[1]} + {question[3] + question[0]} -{" "}
          {question[0]} = ?
        </TextTitle>
      </View>
    );
    solution.push(
      <View key={1}>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {question[0]} x {question[1]} = {question[0] * question[1]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {question[0] * question[1]} + {question[3]} ={" "}
          {question[0] * question[1] + question[3]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {question[0] * question[1] + question[3]} + {question[0]} ={" "}
          {question[0] * question[1] + question[3] + question[0]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {question[0] * question[1] + question[3] + question[0]} -{" "}
          {question[0]} ={" "}
          {question[0] * question[1] + question[3] + question[0] - question[0]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          correct answer ={" "}
          {question[0] * question[1] + question[3] + question[0] - question[0]}
        </TextTitle>
      </View>
    );
    correctAnswer =
      question[0] * question[1] + question[3] + question[0] - question[0];
  } else {
    element.push(
      <View key={1}>
        <TextTitle style={{ color: GrayColor }}>
          {question[0]} + {question[1]} x {question[3]} - {question[0]} = ?
        </TextTitle>
      </View>
    );
    solution.push(
      <View key={1}>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {question[1]} x {question[3]} = {question[1] * question[3]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {question[1] * question[3]} + {question[0]} ={" "}
          {question[1] * question[3] + question[0]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          {question[1] * question[3] + question[0]} - {question[0]} ={" "}
          {question[1] * question[3] + question[0] - question[0]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          correct answer =  {question[1] * question[3] + question[0] - question[0]}
        </TextTitle>
      </View>
    );
    correctAnswer = question[0] + question[1] * question[3] - question[0];
  }

  return { element, solution, correctAnswer };
};

export default LEVEL_1;
