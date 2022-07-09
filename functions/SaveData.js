import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveLevel = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value + "");
  } catch (e) {
    console.log(e);
  }
};

export const saveScore = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value + "");
  } catch (e) {
    console.log(e);
  }
};

export const saveSound = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value + "");
  } catch (e) {
    console.log(e);
  }
};


export const saveLevelArray = async (level) => {
  try {
    await AsyncStorage.setItem("@levelArray", JSON.stringify(level));
  } catch (e) {
    console.log(e);
  }
};

