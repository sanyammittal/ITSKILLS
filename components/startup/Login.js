import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text1}>Welcome Back !! 👋🏻</Text>
        <Text style={styles.text2}>We glad to see you again ...</Text>
      </View>
      <View style={styles.input}>
        <Text>User ID</Text>
        <TextInput style={styles.textInput} placeholder="Enter your User ID " />
        <Text>Mobile Number</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          placeholder="Enter your mobile number"
        />
        <Text>Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your password"
          keyboardType="numbers-and-punctuation"
          secureTextEntry={true}
        />
      </View>
      <Pressable style={styles.btn} onPress={() => navigation.navigate("Menu")}>
        <Text style={styles.btnText}>Log In</Text>
      </Pressable>
      <View style={styles.otherOptions}>
        <View style={{ width: "30%", height: 1, backgroundColor: "black" }} />
        <Text style={{ width: "40%", textAlign: "center" }}>
          Or Log In With
        </Text>
        <View style={{ width: "30%", height: 1, backgroundColor: "black" }} />
      </View>
      <View style={styles.onlineLogin}>
        <TouchableOpacity
          style={{ marginTop: 10, borderColor: "black", borderWidth: 1 }}
        >
          <Image
            source={require("../../assets/google-login.png")}
            style={styles.loggedIn}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 15, borderColor: "black", borderWidth: 1 }}
        >
          <Image
            source={require("../../assets/facebook-login.png")}
            style={styles.loggedIn}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.already}>
        <Text style={styles.alreadyText}>Don't have an Account ?? </Text>
        <Pressable onPress={() => navigation.navigate("SignUp1")}>
          <Text style={[styles.alreadyText, { color: "blue" }]}>Sign Up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 40,
    marginLeft: 20,
    width: "100%",
  },
  text1: {
    fontSize: 28,
    fontWeight: "900",
  },

  text2: {
    fontSize: 15,
    fontWeight: "200",
    marginTop: 10,
  },
  input: {
    width: "90%",
    alignSelf: "center",
    marginTop: 50,
  },
  textInput: {
    width: "100%",
    height: 50,
    alignSelf: "center",
    borderColor: "black",
    // borderWidth: 1,
    borderRadius: 10,
    color: "black",
    paddingLeft: 20,
    marginTop: 10,
    marginBottom: 25,
    fontSize: 15,
    borderBottomWidth: 1,
  },
  btn: {
    width: "90%",
    height: 50,
    backgroundColor: "#0474ed",
    alignSelf: "center",
    borderRadius: 12,
    marginTop: 10,
  },
  btnText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "900",
    lineHeight: 40,
  },
  otherOptions: {
    width: "90%",
    alignSelf: "center",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  onlineLogin: {
    width: "70%",
    height: 150,
    marginTop: 15,
    alignSelf: "center",
  },
  loggedIn: {
    width: "100%",
    height: 40,
    alignSelf: "center",
  },
  already: {
    flexDirection: "row",
    width: "55%",
    alignSelf: "center",
  },
  alreadyText: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
