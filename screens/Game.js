import React, { useState, useEffect, useContext } from "react";
import Layout from "../global/Layout";
import TextTitle from "../components/TextStyle";
import ButtonStyle from "../components/ButtonStyle";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import ProgressStyle from "../components/ProgressStyle";
import { heightDimensions, widthDimensions } from "../global/Dimensions";
import { GrayColor, mainColor, Secondary } from "../global/Color";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ContextApi } from "../functions/Context";
import { saveLevel, saveLevelArray, saveScore } from "../functions/SaveData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { playSound } from "../functions/Sound";
import RewardedAd from "../AdMob/RewardAd";
import { FontAwesome } from "@expo/vector-icons";
import { ModalStyle, ModalButton } from "../components/ModalStyle";
import LEVEL_1 from "../components/GameLevel/Level_1";
import LEVEL_2 from "../components/GameLevel/Level_2";
import LEVEL_3 from "../components/GameLevel/Level_3";
import LEVEL_4 from "../components/GameLevel/Level_4";
import LEVEL_5 from "../components/GameLevel/Level_5";
import LEVEL_6 from "../components/GameLevel/LEVEL_6";
import LEVEL_7 from "../components/GameLevel/LEVEL_7";
import LEVEL_8 from "../components/GameLevel/LEVEL_8";
import LEVEL_9 from "../components/GameLevel/LEVEL_9";
import LEVEL_10 from "../components/GameLevel/LEVEL_10";
import NoInternetAnimation from "../components/NoInternetAnimation";
import WinAnimation from "../components/WinAnimation";
import WrongAnimation from "../components/WrongAnimation";
import ButtonNumberStyle from "../components/ButtonNumberStyle";
import Finish from "./Finish";
import NextLevelAnimation from "../components/NextLevelAnimation";
import { StatusBar } from "expo-status-bar";
import BannerAd from "../AdMob/BannerAd";

function Game() {
  const [questionElement, setQuestionElement] = useState([]);
  const [displayText, setDisplayText] = useState("");
  const [btnActive, setBtnActive] = useState(false);
  const [riview, setRiview] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [answerKey, setAnswerKey] = useState(false);
  const [showSolution, setShowSolution] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [displayModalNextLevel, setDisplayModalNextLevel] = useState(false);
  const [score, setScore] = useState(0);
  const [progresValue, setProgressValue] = useState(0);
  const navigation = useNavigation();
  const {
    gameLevel,
    setGameLevel,
    useSound,
    gameLevelArray,
    setGameLevelArray,
  } = useContext(ContextApi);
  const [isEarnRewardedAd, setIsEarnRewardedAd] = useState(false);
  const [errorAds, setErrorAds] = useState(false);
  const [loadingAds, setLoadingAds] = useState(false);
  const [finis, setFinish] = useState(false);

  const KEY_SCORE = "@score" + gameLevel;
  const KEY_LEVEL = "@level";

  const getQuestion = () => {
    if (gameLevel === 1) {
      const { element, correctAnswer, solution } = LEVEL_1();
      setAnswerKey(correctAnswer);
      setQuestionElement(element);
      setShowSolution(solution);
    } else if (gameLevel === 2) {
      const { element, correctAnswer, solution } = LEVEL_2();
      setAnswerKey(correctAnswer);
      setQuestionElement(element);
      setShowSolution(solution);
    } else if (gameLevel === 3) {
      const { element, correctAnswer, solution } = LEVEL_3();
      setAnswerKey(correctAnswer);
      setQuestionElement(element);
      setShowSolution(solution);
    } else if (gameLevel === 4) {
      const { element, correctAnswer, solution } = LEVEL_4();
      setAnswerKey(correctAnswer);
      setQuestionElement(element);
      setShowSolution(solution);
    } else if (gameLevel === 5) {
      const { element, correctAnswer, solution } = LEVEL_5();
      setAnswerKey(correctAnswer);
      setQuestionElement(element);
      setShowSolution(solution);
    } else if (gameLevel === 6) {
      const { element, correctAnswer, solution } = LEVEL_6();
      setAnswerKey(correctAnswer);
      setQuestionElement(element);
      setShowSolution(solution);
    } else if (gameLevel === 7) {
      const { element, correctAnswer, solution } = LEVEL_7();
      setAnswerKey(correctAnswer);
      setQuestionElement(element);
      setShowSolution(solution);
    } else if (gameLevel === 8) {
      const { element, correctAnswer, solution } = LEVEL_8();
      setAnswerKey(correctAnswer);
      setQuestionElement(element);
      setShowSolution(solution);
    } else if (gameLevel === 9) {
      const { element, correctAnswer, solution } = LEVEL_9();
      setAnswerKey(correctAnswer);
      setQuestionElement(element);
      setShowSolution(solution);
    } else if (gameLevel === 10) {
      const { element, correctAnswer, solution } = LEVEL_10();
      setAnswerKey(correctAnswer);
      setQuestionElement(element);
      setShowSolution(solution);
    }
  };

  const getData = async () => {
    try {
      const scoreValue = await AsyncStorage.getItem(KEY_SCORE);
      if (scoreValue !== null) {
        setScore(parseInt(scoreValue));
        setProgressValue(scoreValue / 10 / 10);
      } else {
        setProgressValue(0);
        setScore(0);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const deletCharacter = () => {
    setDisplayText(displayText.slice(0, displayText.length - 1));
    if (displayText === "") setBtnActive(false);
  };

  const addCharacter = (value) => {
    if (displayText.length === 10) return;
    setDisplayText(displayText + value);
    setBtnActive(true);
  };

  // handle buttons
  const btnEnter = () => {
    if (displayText === "") return;
    if (answerKey === parseInt(displayText)) {
      if (useSound) playSound("correct");
      setIsCorrect(true);
      getQuestion();
      setScore(score + 10);
      setProgressValue(progresValue + 1 / 10);
    } else {
      if (useSound) playSound("wrong");
      setIsCorrect(false);
      if (score !== 0) {
        setScore(score - 10);
        setProgressValue(progresValue - 1 / 10);
      }
      if (score === 0) setProgressValue(0);
    }

    setBtnActive(false);
    setDisplayText("");
    setRiview(true);
    saveScore(KEY_SCORE, score);

    setTimeout(() => {
      setIsCorrect(false);
      setRiview(false);
    }, 2500);
  };

  const showAnswearKey = () => {
    setModalVisible(true);
  };

  // handle ads
  const displayAds = () => {
    setErrorAds(false);
    setIsEarnRewardedAd(false);
    RewardedAd(setIsEarnRewardedAd, setLoadingAds, setErrorAds);
  };

  // handle next level

  const nextLevel = () => {
    setDisplayModalNextLevel(false);
    setProgressValue(0);
    saveScore(KEY_SCORE, 0);
    setGameLevel(gameLevel + 1);
    saveLevel(KEY_LEVEL, gameLevel + 1);

    if (!gameLevelArray.includes(gameLevel + 1)) {
      setGameLevelArray([...gameLevelArray, gameLevel + 1]);
      saveLevelArray([...gameLevelArray, gameLevel + 1]);
    }
    // setCurrentLevel(gameLevel + 1);
    // RewardedAd();
  };

  useEffect(() => {
    if (score >= 100) {
      if (gameLevel >= 10) {
        setTimeout(() => {
          setProgressValue(0);
          setScore(0);
          saveScore(KEY_SCORE, 0);
          setFinish(true);
          if (useSound) playSound("finish");
        }, 2600);
      } else {
        setTimeout(() => {
          setDisplayModalNextLevel(true);
          if (useSound) playSound("nextLevel");
        }, 2600);
        setTimeout(() => {
          nextLevel();
        }, 5500);
      }
    }
  }, [score]);

  useEffect(() => {
    getData();
    getQuestion();
  }, [gameLevel]);

  return (
    <Layout>
      {finis ? (
        <Finish />
      ) : (
        <View style={styles.container}>
          {/* score */}
          <View>
            <View style={[styles.progressContainer, styles.scoreContainer]}>
              <TouchableOpacity style={{ marginRight: widthDimensions(3) }}>
                <Entypo
                  name="cross"
                  size={50}
                  color={GrayColor}
                  onPress={() => navigation.goBack()}
                />
              </TouchableOpacity>
              <ProgressStyle progressValue={progresValue} />
              <Ionicons name="flash" size={35} color={mainColor} />
              <TextTitle style={{ color: GrayColor, fontSize: 16 }}>
                {gameLevel}
              </TextTitle>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: widthDimensions(2),
                }}
              >
                <FontAwesome
                  name="diamond"
                  size={24}
                  color={mainColor}
                  style={{ marginHorizontal: widthDimensions(1) }}
                />
                <TextTitle
                  style={{
                    color: riview
                      ? isCorrect
                        ? mainColor
                        : "#FF9899"
                      : GrayColor,
                    fontSize: 16,
                  }}
                >
                  {score}
                </TextTitle>
              </View>
            </View>
            {/* <BannerAd /> */}
          </View>

          {/* content */}

          {riview ? (
            isCorrect ? (
              <WinAnimation />
            ) : (
              <WrongAnimation />
            )
          ) : (
            questionElement
          )}

          <View style={{ marginBottom: heightDimensions(1) }}>
            <View style={styles.btnSecondaryContainer}>
              <View
                style={[
                  styles.btnSecondary,
                  { backgroundColor: btnActive ? "#D3D3D3" : Secondary },
                ]}
              >
                <TextTitle>{displayText}</TextTitle>
              </View>
              <ButtonNumberStyle onPress={deletCharacter}>
                <Entypo name="cross" size={50} color="#FFF" />
              </ButtonNumberStyle>
            </View>

            {/* buttons */}
            <View style={styles.btnContainer}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value, index) => (
                <ButtonNumberStyle
                  key={index}
                  onPress={() => addCharacter(value)}
                >
                  <TextTitle>{value}</TextTitle>
                </ButtonNumberStyle>
              ))}
            </View>

            {/* modal display solution */}
            <ModalStyle
              callBackValue={modalVisible}
              callBackFunction={setModalVisible}
            >
              {!isEarnRewardedAd ? (
                <>
                  {errorAds && <NoInternetAnimation />}

                  <ButtonStyle
                    onPress={displayAds}
                    disabled={loadingAds}
                    width={widthDimensions(50)}
                  >
                    <TextTitle>
                      {loadingAds ? "Loading..." : "Watch Ads"}{" "}
                    </TextTitle>
                  </ButtonStyle>
                </>
              ) : (
                <>
                  {showSolution}
                  <ButtonStyle
                    style={{ justifyContent: "center" }}
                    width={widthDimensions(50)}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                      setIsEarnRewardedAd(false);
                    }}
                  >
                    <TextTitle>Back</TextTitle>
                  </ButtonStyle>
                </>
              )}
            </ModalStyle>

            {/* modal next level */}

            <ModalStyle
              callBackValue={displayModalNextLevel}
              callBackFunction={setDisplayModalNextLevel}
            >
              <NextLevelAnimation />
              <ButtonStyle
                width={widthDimensions(50)}
                style={{ justifyContent: "center" }}
              >
                <TextTitle>Level {gameLevel + 1}</TextTitle>
              </ButtonStyle>
            </ModalStyle>

            {/* btnEnter and solution */}
            <View style={styles.btnSecondaryContainer}>
              <ButtonStyle onPress={showAnswearKey} width={widthDimensions(50)}>
                <MaterialCommunityIcons
                  name="lightbulb-on-outline"
                  size={40}
                  color="#FFF"
                />
                <TextTitle>Sulution</TextTitle>
              </ButtonStyle>
              <ButtonStyle
                onPress={btnEnter}
                width={widthDimensions(33)}
                style={{
                  backgroundColor: btnActive ? "#D3D3D3" : Secondary,
                  justifyContent: "center",
                }}
              >
                <AntDesign name="enter" size={50} color="#FFF" />
              </ButtonStyle>
            </View>
          </View>
        </View>
      )}
      <BannerAd />
      <StatusBar style="light" />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginVertical: heightDimensions(1.5),
  },
  btnSecondaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: heightDimensions(8),
    marginBottom: heightDimensions(1),
  },
  btnSecondary: {
    backgroundColor: Secondary,
    padding: 2,
    width: widthDimensions(70),
    marginHorizontal: widthDimensions(1),
    height: heightDimensions(8),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: heightDimensions(4),
    marginBottom: heightDimensions(2),
  },
  btnSolution: {
    width: widthDimensions(51),
    backgroundColor: mainColor,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: widthDimensions(4),
  },
  text: {
    color: "#FFF",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default Game;
