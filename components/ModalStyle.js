import React from "react";
import { View, TouchableOpacity, Text, Modal, StyleSheet } from "react-native";
import { heightDimensions, widthDimensions } from "../global/Dimensions";
import { mainColor } from "../global/Color";

const ModalStyle = ({ children, callBackValue, callBackFunction }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={callBackValue}
      onRequestClose={() => {
        callBackFunction(!callBackValue);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>{children}</View>
      </View>
    </Modal>
  );
};

const ModalButton = ({ children, callBackFunction, disabled }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={styles.btnHide}
      onPress={callBackFunction}
    >
      <Text style={styles.textHide}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    paddingVertical: heightDimensions(3),
    borderRadius: 20,
    height: heightDimensions(60),
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

export { ModalStyle, ModalButton };
