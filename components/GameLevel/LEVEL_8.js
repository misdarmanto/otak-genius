import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { GrayColor } from "../../global/Color";

const generateQuestion = () => {
  const generateValueForArray = new Set();
  while (generateValueForArray.size < 3) {
    const index = Math.floor(Math.random() * 10);
    generateValueForArray.add(index);
  }

  const generateArray = Array.from(generateValueForArray);

  const result = [];
  const randomValue = Math.floor(Math.random() * 2);
  while (result.length < 6) {
    if (randomValue === 0) {
      generateArray.push(generateArray.shift());
      result.push(generateArray.join(""));
    } else {
      generateArray.unshift(generateArray.pop());
      result.push(generateArray.join(""));
    }
  }

  return result;
};

const LEVEL_8 = () => {
  const question = generateQuestion();
  const element = [];
  const solution = [];
  let correctAnswer = 0;
  const randomValue = Math.floor(Math.random() * 3);
  if (randomValue === 0) {
    element.push(
      <View key={1}>
        <Text style={styles.text}>
          {question[0]}, {question[1]}, {question[2]}, {question[3]}, ?
        </Text>
      </View>
    );
    solution.push(
      <View key={1}>
        <Text style={styles.text}>
          {question[0]}, {question[1]}, {question[2]}, {question[3]}, ?
        </Text>
        <Text style={styles.text}> next nummber is {question[4]}</Text>
      </View>
    );
    correctAnswer = parseInt(question[4]);
  } else if (randomValue === 1) {
    element.push(
      <View key={1}>
        <Text style={styles.text}>
          {question[0]}, {question[1]}, ?, {question[3]}, {question[4]}
        </Text>
      </View>
    );
    solution.push(
      <View key={1}>
        <Text style={styles.text}>
          {question[0]}, {question[1]}, ?, {question[3]}, {question[4]}
        </Text>
        <Text style={styles.text}>correct answer : {question[2]}</Text>
      </View>
    );
    correctAnswer = parseInt(question[2]);
  } else {
    element.push(
      <View key={1}>
        <Text style={styles.text}>
          {question[0]}, {question[1]}, {question[2]}, ?, {question[4]}
        </Text>
      </View>
    );
    solution.push(
      <View key={1}>
        <Text style={styles.text}>
          {question[0]}, {question[1]}, {question[2]}, ?, {question[4]}
        </Text>
        <Text style={styles.text}>correct answer : {question[3]}</Text>
      </View>
    );
    correctAnswer = parseInt(question[3]);
  }

  return { element, correctAnswer, solution };
};

const styles = StyleSheet.create({
  text: { fontSize: 25, fontWeight: "bold", color: GrayColor },
});

export default LEVEL_8;
