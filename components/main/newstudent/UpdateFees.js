import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { db } from "../../../firebase-auth";
import { doc, updateDoc } from "firebase/firestore";

const UpdateFees = (props) => {
  const [amount, payAmount] = useState("");
  const amountHandler = (text) => payAmount(text);

  const submitHandler = () => {
    updateDoc(doc(db, "student", props.route.params.enrollment_number), {
      submited_fee: String(
        parseInt(props.route.params.submited_fee) + parseInt(amount)
      ),
    })
      .then(() => console.log("data updated"))
      .catch((error) => console.log("error occured : ", error));
    props.navigation.navigate("Fees");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/update_fees.jpg")}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
      <Text style={styles.title}>💵 Submit Fees</Text>
      <Image
        source={{ uri: props.route.params.photo }}
        style={styles.studentImage}
      />
      <KeyboardAvoidingView>
        <View style={{ width: "90%", height: "50%", alignSelf: "center" }}>
          <Text style={styles.inputLabel}>Enrollment Number</Text>
          <Text style={styles.input}>
            {props.route.params.enrollment_number}
          </Text>
          <Text style={styles.inputLabel}>Name</Text>
          <Text style={styles.input}>
            {`${props.route.params.first_name} ${props.route.params.last_name}`}
          </Text>
          <Text style={styles.inputLabel}>Pending Fees</Text>
          <Text style={styles.input}>
            {`₹${
              parseInt(props.route.params.course_fee) -
              parseInt(props.route.params.submited_fee)
            }`}
          </Text>
          <Text style={styles.inputLabel}>Amount</Text>
          <TextInput
            style={[styles.input, { paddingTop: 0 }]}
            placeholder="Enter amount to submit"
            keyboardType="numeric"
            value={amount}
            onChangeText={amountHandler}
          />
        </View>
      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.submitButton} onPress={submitHandler}>
        <Text style={styles.submitButtonText}>Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpdateFees;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  studentImage: {
    width: 200,
    height: 200,
    backgroundColor: "black",
    borderRadius: 100,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: "15%",
    marginLeft: 30,
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 15,
    paddingLeft: 15,
    backgroundColor: "white",
    elevation: 20,
    fontSize: 20,
    paddingTop: 10,
  },
  dateChooser: {
    maringTop: 20,
    opacity: 1,
    borderRadius: 15,
    elevation: 20,
  },
  formView: {
    height: "83%",
  },
  submitButton: {
    width: "90%",
    height: 50,
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: "#3d565a",
    marginTop: 20,
    marginBottom: 20,
  },
  submitButtonText: {
    textAlign: "center",
    lineHeight: 45,
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  modalContainer: {
    position: "absolute",
    width: "70%",
    height: 90,
    alignSelf: "center",
    backgroundColor: "white",
    marginTop: "80%",
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
  coursesView: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 15,
    elevation: 10,
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 20,
  },
});
