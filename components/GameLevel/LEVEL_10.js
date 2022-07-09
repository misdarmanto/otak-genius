import React from "react";
import { View } from "react-native";
import TextTitle from "../TextStyle";
import { GrayColor } from "../../global/Color";
import { heightDimensions } from "../../global/Dimensions";

function genereateQuestionLevel10() {
  const arraynumber = [];
  const basenumber = Math.floor(Math.random() * 5) + 1;
  const addingNumber = Math.floor(Math.random() * 5) + 1;
  const multiplyNumber = Math.floor(Math.random() * 5) + 2;
  const randomNumber = Math.floor(Math.random() * 2) + 1;

  arraynumber.push(basenumber);
  let result = basenumber;
  let typeQuestion = 0;
  if (randomNumber % 2 === 0) {
    while (arraynumber.length <= 5) {
      result = result * multiplyNumber + addingNumber;
      arraynumber.push(result);
    }
    typeQuestion = 1;
  } else {
    while (arraynumber.length <= 5) {
      result = multiplyNumber * (result + addingNumber);
      arraynumber.push(result);
    }
    typeQuestion = 2;
  }
  return { arraynumber, addingNumber, multiplyNumber, typeQuestion };
}

const LEVEL_10 = () => {
  const { arraynumber, typeQuestion, addingNumber, multiplyNumber } =
    genereateQuestionLevel10();
  const element = [];
  const solution = [];
  let correctAnswer = 0;

  if (typeQuestion === 1) {
    element.push(
      <View key={1}>
        <TextTitle style={{ color: GrayColor, fontSize: 25 }}>
          {arraynumber[0]}, {arraynumber[1]}, {arraynumber[2]}, {arraynumber[3]}
          , {arraynumber[4]}, ... ?
        </TextTitle>
      </View>
    );
    solution.push(
      <View key={1} style={{ marginBottom: heightDimensions(2) }}>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          ({arraynumber[0]} x {multiplyNumber}) + {addingNumber} ={" "}
          {arraynumber[1]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          ({arraynumber[1]} x {multiplyNumber}) + {addingNumber} ={" "}
          {arraynumber[2]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          ({arraynumber[2]} x {multiplyNumber}) + {addingNumber} ={" "}
          {arraynumber[3]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          ({arraynumber[3]} x {multiplyNumber}) + {addingNumber} ={" "}
          {arraynumber[4]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          ({arraynumber[4]} x {multiplyNumber}) + {addingNumber} ={" "}
          {arraynumber[5]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          correct answer: {arraynumber[arraynumber.length - 1]}
        </TextTitle>
      </View>
    );

    correctAnswer = arraynumber[arraynumber.length - 1];
  } else {
    element.push(
      <View key={1}>
        <TextTitle style={{ color: GrayColor, fontSize: 25 }}>
          {arraynumber[0]}, {arraynumber[1]}, {arraynumber[2]}, {arraynumber[3]}
          , {arraynumber[4]}, ... ?
        </TextTitle>
      </View>
    );
    solution.push(
      <View key={1} style={{ marginBottom: heightDimensions(2) }}>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          ({arraynumber[0]} + {addingNumber}) x {multiplyNumber} ={" "}
          {arraynumber[1]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          ({arraynumber[1]} + {addingNumber}) x {multiplyNumber} ={" "}
          {arraynumber[2]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          ({arraynumber[2]} + {addingNumber}) x {multiplyNumber} ={" "}
          {arraynumber[3]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          ({arraynumber[3]} + {addingNumber}) x {multiplyNumber} ={" "}
          {arraynumber[4]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          ({arraynumber[4]} + {addingNumber}) x {multiplyNumber} ={" "}
          {arraynumber[5]}
        </TextTitle>
        <TextTitle style={{ color: GrayColor, fontSize: 20 }}>
          correct answer: {arraynumber[arraynumber.length - 1]}
        </TextTitle>
      </View>
    );

    correctAnswer = arraynumber[arraynumber.length - 1];
  }

  return { element, correctAnswer, solution };
};

export default LEVEL_10;
