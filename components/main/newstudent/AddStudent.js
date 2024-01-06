import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AddStudent = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../../../assets/add_student.png")}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
      <TouchableOpacity
        style={[
          styles.newStudentButton,
          { backgroundColor: "#7408cc", marginTop: "80%" },
        ]}
        onPress={() => navigation.navigate("NewStudent")}
      >
        <Text style={styles.newStudentButtonText}>Add New Student</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.newStudentButton, { backgroundColor: "#279e03" }]}
        onPress={() => {
          navigation.navigate("Certificates");
        }}
      >
        <Text style={styles.newStudentButtonText}>Provide Certificate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddStudent;

const styles = StyleSheet.create({
  newStudentButton: {
    width: "90%",
    height: 60,
    backgroundColor: "gray",
    alignSelf: "center",
    marginTop: "10%",
    borderRadius: 15,
    elevation: 20,
  },
  newStudentButtonText: {
    textAlign: "center",
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    lineHeight: 50,
  },
});
