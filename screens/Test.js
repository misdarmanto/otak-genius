import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button, Text, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GrayColor, mainColor } from "../global/Color";
import { heightDimensions, widthDimensions } from "../global/Dimensions";
import Layout from "../global/Layout";
import Triangle from "../components/Triangle";
import NoInternetAnimation from "../components/NoInternetAnimation";
import ButtonNumberStyle from "../components/ButtonNumberStyle";
import TextTitle from "../components/TextStyle";
import ButtonStyle from "../components/ButtonStyle";
import Card from "../components/Card";
import Finish from "./Finish";

const TriangleGroup = () => {
  return (
    <Layout>
      <Triangle C1={12} C2={22} C3={22} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: heightDimensions(4),
          paddingHorizontal: widthDimensions(10),
        }}
      >
        <Triangle C1={12} C2={22} C3={"?"} />
        <Triangle C1={12} C2={22} C3={22} />
      </View>
    </Layout>
  );
};

export default function Test() {
  const gameLevelArray = [1, 2, 3, 4];

  const element = [];
  for (let i = 1; i <= 9; i++) {
    element.push(
      <View
        key={i}
        style={{
          flexDirection: "row",
          justifyContent: i % 2 === 0 ? "flex-end" : "flex-start",
        }}
      >
        <Card
          value={i}
          disable={!gameLevelArray.includes(i)}
          bgColor={gameLevelArray.includes(i) ? GrayColor : mainColor}
        />
      </View>
    );
  }

  return (<Finish />);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: widthDimensions(8),
    borderRightWidth: widthDimensions(8),
    borderBottomWidth: widthDimensions(12),
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: mainColor,
  },
});

// const [level, setlevel] = useState([1]);

// const saveLevel = async () => {
//   try {
//     await AsyncStorage.setItem("@levelArray", JSON.stringify(level));
//   } catch (e) {
//     console.log(e);
//   }
// };

// const getData = async () => {
//   try {
//     const data = await AsyncStorage.getItem("@levelArray");
//     if (data !== null) {
//       console.log(data)
//       setlevel(JSON.parse(data))
//     }
//   } catch (e) {
//     console.log(e);
//   }
// };

// const clear = () => {
//   AsyncStorage.clear();
// }

// const addLevel = () => {
//   setlevel([...level, level[level.length - 1] + 1])
//   saveLevel()
// }

// useEffect(() => {
//   getData()
// }, [])

// return (
//   <View style={styles.container}>
//     {level.map((value, key) => (
//       <Text key={key}>{value}</Text>
//     ))}
//     <Button
//       title="Add data"
//       onPress={addLevel}
//     />
//     <Button
//       title="clear"
//       onPress={clear}
//     />
//   </View>
// );

// const [sound, setSound] = useState();

// async function playSound() {
//   const { sound } = await Audio.Sound.createAsync(
//     require("../assets/sound/Win.wav")
//   );
//   setSound(sound);
//   await sound.playAsync();
// }

// useEffect(() => {
//   return sound
//     ? () => {
//         console.log("Unloading Sound");
//         sound.unloadAsync();
//       }
//     : undefined;
// }, [sound]);

// return (
//   <View style={styles.container}>
//     <Button title="Play Sound" onPress={playSound} />
//   </View>
// );

// level screen

// import { useNavigation } from "@react-navigation/native";
// import React, { useContext, useEffect } from "react";
// import { ContextApi } from "../functions/Context";
// import { GrayColor, mainColor } from "../global/Color";
// import Layout from "../global/Layout";
// import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
// import { heightDimensions, widthDimensions } from "../global/Dimensions";
// import { saveLevel, saveLevelArray } from "../functions/SaveData";

// const Level = () => {
//   const { setGameLevel, gameLevelArray, setGameLevelArray } =
//     useContext(ContextApi);
//   const KEY_LEVEL = "@level";
//   const navigation = useNavigation();

//   const changeLevel = (value) => {
//     if (!gameLevelArray.includes(value)) {
//       setGameLevelArray([...gameLevelArray, value]);
//       saveLevelArray([...gameLevelArray, value]);
//     }
//     setGameLevel(value);
//     saveLevel(KEY_LEVEL, value);
//     navigation.goBack();
//   };

//   console.log(gameLevelArray);

//   const element = [];
//   for (let i = 1; i <= 9; i++) {
//     element.push(
//       <TouchableOpacity
//         disabled={!gameLevelArray.includes(i)}
//         key={i}
//         style={[
//           styles.card,
//           {
//             backgroundColor: gameLevelArray.includes(i) ? GrayColor : mainColor,
//           },
//         ]}
//         onPress={() => changeLevel(i)}
//       >
//         <Text style={styles.title}>{i}</Text>
//         <Text style={styles.titleDesc}>Level</Text>
//       </TouchableOpacity>
//     );
//   }

//   return (
//     <Layout>
//       <View style={styles.wrap}>{element}</View>
//     </Layout>
//   );
// };

// const styles = StyleSheet.create({
//   wrap: {
//     flexDirection: "row",
//     justifyContent: "center",
//     flexWrap: "wrap",
//     marginVertical: heightDimensions(3),
//   },
//   card: {
//     backgroundColor: mainColor,
//     height: heightDimensions(12),
//     width: widthDimensions(25),
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 10,
//     marginHorizontal: widthDimensions(2),
//     marginVertical: heightDimensions(2),
//   },
//   title: {
//     fontSize: 35,
//     color: "#FFF",
//     fontWeight: "bold",
//   },
//   titleDesc: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#FFF",
//   },
// });
// export default Level;

// home screen

// import React, { useContext, useEffect, useState } from "react";
// import { View, StyleSheet, TouchableOpacity, Modal, Text } from "react-native";
// import TextTitle from "../components/TextStyle";
// import { mainColor } from "../global/Color";
// import { heightDimensions, widthDimensions } from "../global/Dimensions";
// import Layout from "../global/Layout";
// import { Ionicons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { ContextApi } from "../functions/Context";
// import { saveSound } from "../functions/SaveData";
// import { MaterialIcons } from "@expo/vector-icons";

// export default Home = () => {
//   const { setGameLevel, useSound, setUseSound, setGameLevelArray } =
//     useContext(ContextApi);
//   const [modalVisible, setModalVisible] = useState(false);
//   const navigation = useNavigation();

//   const navigate = (screen) => {
//     navigation.navigate(screen);
//   };

//   const clear = () => {
//     AsyncStorage.clear();
//     setModalVisible(!modalVisible);
//     setGameLevel(1);
//     setGameLevelArray([1]);
//   };

//   const btnSound = () => {
//       setUseSound(!useSound);
//       saveSound("@sound", !useSound);
//   };

//   const getData = async () => {
//     const data = await AsyncStorage.getItem("@levelArray");
//     if (data !== null) {
//       const convertToArray = JSON.parse(data);
//       setGameLevelArray(convertToArray);
//     }
//   };

//   useEffect(() => {
//     setGameLevelArray([1])
//     getData();
//     const soundCheck = async () => {
//       const soundStatus = await AsyncStorage.getItem("@sound");
//       if (soundStatus !== null) {
//         setUseSound(JSON.parse(soundStatus));
//       } else {
//         setUseSound(true)
//       }
//     };
//     soundCheck();
//   }, []);

//   return (
//     <Layout>
//       <View style={styles.container}>
//         <View style={styles.cardContainer}>
//           <TouchableOpacity
//             style={styles.card}
//             onPress={() => navigate("Game")}
//           >
//             <Ionicons
//               name="play"
//               size={55}
//               color="#FFF"
//               style={{ paddingHorizontal: widthDimensions(1) }}
//             />
//             <TextTitle style={{ fontSize: 30 }}>Play</TextTitle>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.card}
//             onPress={() => navigate("Level")}
//           >
//             <Ionicons
//               name="grid"
//               size={40}
//               color="#FFF"
//               style={{ paddingHorizontal: widthDimensions(1) }}
//             />
//             <TextTitle style={{ fontSize: 30 }}>Level</TextTitle>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.card}
//             onPress={() => setModalVisible(true)}
//           >
//             <Ionicons
//               name="settings"
//               size={45}
//               color="#FFF"
//               style={{ paddingHorizontal: widthDimensions(1) }}
//             />
//             <TextTitle style={{ fontSize: 28 }}>Setting</TextTitle>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.card} onPress={btnSound}>
//             {useSound ? (
//               <MaterialIcons
//                 name="volume-up"
//                 size={45}
//                 color="#FFF"
//                 style={{ paddingHorizontal: widthDimensions(1) }}
//               />
//             ) : (
//               <MaterialIcons
//                 name="volume-off"
//                 size={45}
//                 color="#FFF"
//                 style={{ paddingHorizontal: widthDimensions(1) }}
//               />
//             )}

//             <TextTitle style={{ fontSize: 30 }}>Sound</TextTitle>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <TouchableOpacity style={styles.btnHide} onPress={clear}>
//               <Text style={styles.textHide}>Reset Game</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </Layout>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   cardContainer: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     flexWrap: "wrap",
//   },
//   card: {
//     height: heightDimensions(9),
//     width: widthDimensions(40),
//     backgroundColor: mainColor,
//     borderRadius: 10,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: heightDimensions(2),
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   modalView: {
//     backgroundColor: "white",
//     borderRadius: 20,
//     height: heightDimensions(50),
//     width: widthDimensions(90),
//     alignItems: "center",
//     justifyContent: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   btnHide: {
//     height: heightDimensions(8),
//     width: widthDimensions(50),
//     backgroundColor: mainColor,
//     borderRadius: 10,
//     marginVertical: heightDimensions(5),
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   textHide: {
//     color: "#FFF",
//     fontSize: 25,
//     fontWeight: "bold",
//   },
// });
