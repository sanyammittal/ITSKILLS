import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { db } from "../../../firebase-auth";
import { doc, deleteDoc } from "firebase/firestore";

const ProvideCertificate = (props) => {
  const deleteHandler = () => {
    deleteDoc(doc(db, "student", props.route.params.enrollment_number));
    props.navigation.navigate("Certificates");
  };

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../../../assets/student_info.png")}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
      <Text style={styles.title}>Student Information</Text>
      <View>
        <ScrollView style={styles.studentData}>
          <View>
            <Image
              source={{ uri: props.route.params.photo }}
              style={styles.studentImage}
            />
            <Text style={styles.inputLabel}>Enrollment Number</Text>
            <Text style={styles.input}>
              {props.route.params.enrollment_number}
            </Text>
            <Text style={styles.inputLabel}>Certificate Number</Text>
            <Text style={styles.input}>
              {props.route.params.certificate_number}
            </Text>
            <Text style={styles.inputLabel}>Name</Text>
            <Text style={styles.input}>
              {`${props.route.params.first_name} ${props.route.params.last_name}`}
            </Text>
            <Text style={styles.inputLabel}>Branch</Text>
            <Text style={styles.input}>{props.route.params.branch}</Text>
            <Text style={styles.inputLabel}>Courses</Text>
            <Text style={styles.input}>{`${props.route.params.courses}`}</Text>
            <Text style={styles.inputLabel}>Date Of Joining</Text>
            <Text style={styles.input}>
              {props.route.params.date_of_joining}
            </Text>
            <Text style={styles.inputLabel}>Contact Number - 1</Text>
            <Text style={styles.input}>
              {props.route.params.contact_number_1}
            </Text>
            <Text style={styles.inputLabel}>Contact Number - 2</Text>
            <Text style={styles.input}>
              {props.route.params.contact_number_2}
            </Text>
            <Text style={styles.inputLabel}>Address</Text>
            <Text style={styles.input}>{props.route.params.address}</Text>
            <Text style={styles.inputLabel}>Course Fees</Text>
            <Text
              style={styles.input}
            >{`₹${props.route.params.course_fee}`}</Text>
            <Text style={styles.inputLabel}>Fees Submited</Text>
            <Text
              style={styles.input}
            >{`₹${props.route.params.submited_fee}`}</Text>

            <Text style={styles.inputLabel}>Pending Fees</Text>
            <Text style={styles.input}>
              {`₹${
                parseInt(props.route.params.course_fee) -
                parseInt(props.route.params.submited_fee)
              }`}
            </Text>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.feeSubmitButton}
          onPress={deleteHandler}
        >
          <Text style={styles.feeSubmitButtonText}>Get Certified</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProvideCertificate;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: "15%",
    marginLeft: 30,
    marginBottom: 15,
  },
  studentImage: {
    width: 200,
    height: 200,
    backgroundColor: "red",
    borderRadius: 100,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 10,
  },
  studentData: {
    width: "100%",
    alignSelf: "center",
    marginTop: 20,
    height: "73%",
    paddingLeft: "5%",
    paddingRight: "5%",
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
    elevation: 10,
    fontSize: 20,
    paddingTop: 10,
  },
  feeSubmitButton: {
    width: "80%",
    height: 50,
    backgroundColor: "#039e5b",
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 15,
    elevation: 7,
  },
  feeSubmitButtonText: {
    textAlign: "center",
    fontSize: 21,
    fontWeight: "bold",
    lineHeight: 40,
    color: "white",
  },
});
