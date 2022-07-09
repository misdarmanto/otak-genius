import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Text,
  ScrollView,
} from "react-native";
import TextTitle from "../components/TextStyle";
import { mainColor, GrayColor } from "../global/Color";
import { heightDimensions, widthDimensions } from "../global/Dimensions";
import Layout from "../global/Layout";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ContextApi } from "../functions/Context";
import { saveSound } from "../functions/SaveData";
import Card from "../components/Card";
import ButtonStyle from "../components/ButtonStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default Home = () => {
  const {
    setGameLevel,
    useSound,
    setUseSound,
    setGameLevelArray,
    gameLevelArray,
    setShowModal,
    showModal,
  } = useContext(ContextApi);
  const navigation = useNavigation();

  const navigateToGame = (value) => {
    setGameLevel(value);
    navigation.navigate("Game");
  };

  const clear = () => {
    AsyncStorage.clear();
    setGameLevel(1);
    setGameLevelArray([1]);
  };

  const btnSound = () => {
    setUseSound(!useSound);
    saveSound("@sound", !useSound);
  };

  const getData = async () => {
    const data = await AsyncStorage.getItem("@levelArray");
    if (data !== null) {
      const convertToArray = JSON.parse(data);
      setGameLevelArray(convertToArray);
    }
  };

  useEffect(() => {
    setGameLevelArray([1]);
    getData();
    const soundCheck = async () => {
      const soundStatus = await AsyncStorage.getItem("@sound");
      if (soundStatus !== null) {
        setUseSound(JSON.parse(soundStatus));
      } else {
        setUseSound(true);
      }
    };
    soundCheck();
  }, []);

  return (
    <Layout>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(!showModal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ButtonStyle onPress={clear} width={widthDimensions(55)}>
              <MaterialCommunityIcons name="restart" size={40} color="#FFF" />
              <Text style={styles.textHide}>Reset</Text>
            </ButtonStyle>
            <ButtonStyle onPress={btnSound} width={widthDimensions(55)}>
              {useSound ? (
                <MaterialIcons
                  name="volume-up"
                  size={45}
                  color="#FFF"
                  style={{ paddingHorizontal: widthDimensions(1) }}
                />
              ) : (
                <MaterialIcons
                  name="volume-off"
                  size={45}
                  color="#FFF"
                  style={{ paddingHorizontal: widthDimensions(1) }}
                />
              )}
              <TextTitle style={{ fontSize: 30 }}>Sound</TextTitle>
            </ButtonStyle>
            <ButtonStyle
              onPress={() => setShowModal(!showModal)}
              width={widthDimensions(55)}
            >
              <Ionicons name="save-outline" size={35} color="#FFF" />
              <Text style={styles.textHide}>Save</Text>
            </ButtonStyle>
          </View>
        </View>
      </Modal>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginTop: heightDimensions(10),
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value, index) => (
            <Card
              key={index}
              onPress={() => navigateToGame(value)}
              value={value}
              disable={!gameLevelArray.includes(value)}
              bgColor={gameLevelArray.includes(value) ? "#A172FF" : "#C6C6C6"}
              textColor={gameLevelArray.includes(value) ? mainColor : "#FFF"}
            />
          ))}
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  card: {
    height: heightDimensions(9),
    width: widthDimensions(40),
    backgroundColor: mainColor,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: heightDimensions(2),
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    height: heightDimensions(50),
    width: widthDimensions(90),
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  btnHide: {
    height: heightDimensions(8),
    width: widthDimensions(50),
    backgroundColor: mainColor,
    borderRadius: 10,
    marginVertical: heightDimensions(5),
    justifyContent: "center",
    alignItems: "center",
  },
  textHide: {
    color: "#FFF",
    fontSize: 25,
    fontWeight: "bold",
  },
});
