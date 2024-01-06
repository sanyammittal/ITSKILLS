import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const ErrorModal = (props) => {
  const [valid, setValid] = useState(false);

  const okHandler = () => {
    setValid(!valid);
    props.onOkClick(valid);
  };

  return (
    <View style={styles.modalContainer}>
      <View style={styles.container}>
        <Text style={styles.modalText}>Please Fill All The Entries ...</Text>
        <TouchableOpacity style={styles.okButton} onPress={okHandler}>
          <Text style={styles.okButtonText}>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ErrorModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    position: "absolute",
    backgroundColor: "rgba(12, 11, 11, 0.50)",
    height: "100%",
  },
  container: {
    width: "70%",
    height: 190,
    marginTop: "80%",
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 20,
    elevation: 10,
  },
  modalText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 20,
    width: "80%",
    paddingLeft: "10%",
  },
  okButton: {
    width: "75%",
    height: 40,
    backgroundColor: "#0acafa",
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 5,
  },
  okButtonText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 35,
    color: "white",
  },
});
