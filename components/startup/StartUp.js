import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const StartUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.bkImage}
        source={require("../../assets/background.png")}
      />
      <Text style={styles.startText}>Let's Get</Text>
      <Text style={[styles.startText, { marginTop: 0 }]}>Started ...</Text>
      <Text style={[styles.startText, { marginTop: 0, fontSize: 15 }]}>
        Welcome to the place of
      </Text>
      <Text style={[styles.startText, { marginTop: 0, fontSize: 15 }]}>
        Knowledge and Skills ...
      </Text>
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate("Menu")}
      >
        <Text style={styles.startButtonText}>LET'S Go...</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bkImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  startup_logo: {
    width: "50%",
    height: "60%",
    alignSelf: "center",
  },
  startText: {
    fontSize: 50,
    fontWeight: "bold",
    paddingLeft: "15%",
    marginTop: "110%",
    color: "white",
  },
  startButton: {
    width: "75%",
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    alignSelf: "center",
    marginTop: "12%",
    borderRadius: 20,
    elevation: 10,
    shadowColor: "black",
    shadowOpacity: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
  },
  startButtonText: {
    fontSize: 30,
    lineHeight: 45,
    fontWeight: "900",
    color: "#3d565a",
  },
});
