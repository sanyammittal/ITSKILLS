import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ErrorModal from "./ErrorModal";
import DatePicker from "react-native-modern-datepicker";
import CheckBox from "react-native-check-box";
import * as ImagePicker from "expo-image-picker";
import { db } from "../../../firebase-auth";
import { doc, setDoc } from "firebase/firestore";

const courses = [
  {
    label: "C Programming",
    value: "C Programming",
  },
  {
    label: "Java",
    value: "Java",
  },
  {
    label: "Advance Java",
    value: "Advance Java",
  },
  {
    label: "Python",
    value: "Python",
  },
  {
    label: "Advance Python",
    value: "Advance Python",
  },
  {
    label: "C++",
    value: "C++",
  },
  {
    label: "Web Designing",
    value: "Web Designing",
  },
  {
    label: "PHP",
    value: "PHP",
  },
  {
    label: "React JS",
    value: "React JS",
  },
  {
    label: "React Native",
    value: "React Native",
  },
  {
    label: "Node JS",
    value: "Node JS",
  },
  {
    label: "DSA",
    value: "DSA",
  },
  {
    label: "MySQL",
    value: "MySQL",
  },
  {
    label: "Basics",
    value: "Basics",
  },
  {
    label: "Tally",
    value: "Tally",
  },
  {
    label: "Excel",
    value: "Excel",
  },
  {
    label: "Advance Excel",
    value: "Advance Excel",
  },
];

const courseStatus = {
  Java: false,
  Python: false,
  "C++": false,
  "React JS": false,
  C: false,
  "Node JS": false,
  DSA: false,
};

const NewStudent = (props) => {
  const [enrollmentNumber, setEnrollmentNumber] = useState("");
  const [certificateNUmber, setCertificateNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [branch, setBranch] = useState("");
  const [duration, setDuration] = useState("");
  const [dateOfJoining, setDateOfJoining] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber1, setContactNumber1] = useState("");
  const [contactNumber2, setContactNumber2] = useState("");
  const [courseFee, setCourseFee] = useState("");
  const [submitedFee, setSubmitedFee] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isChecked, setIsChecked] = useState(courseStatus);

  const enrollmentNumberHandler = (text) => setEnrollmentNumber(text);
  const certificateNumberHandler = (text) => setCertificateNumber(text);
  const firstNameHandler = (text) => setFirstName(text);
  const lastNameHandler = (text) => setLastName(text);
  const branchHandler = (text) => setBranch(text);
  const durationHandler = (text) => setDuration(text);
  const addressHandler = (text) => setAddress(text);
  const contactNumber1Handler = (text) => setContactNumber1(text);
  const contactNumber2Handler = (text) => setContactNumber2(text);
  const courseFeeHandler = (text) => setCourseFee(text);
  const dateHandler = (text) => setDateOfJoining(text);
  const submitedFeeHandler = (text) => setSubmitedFee(text);

  const submitHandler = () => {
    let properties = Object.keys(courseStatus);
    let course = [];
    for (let prop of properties) {
      if (isChecked[prop] == true) {
        course.push(prop);
      }
    }
    if (
      enrollmentNumber.trim().length > 0 &&
      certificateNUmber.trim().length > 0 &&
      firstName.trim().length > 0 &&
      lastName.trim().length > 0 &&
      dateOfJoining.trim().length > 0 &&
      duration.trim().length > 0 &&
      address.trim().length > 0 &&
      courseFee.trim().length > 0 &&
      contactNumber1.trim().length > 0 &&
      contactNumber2.trim().length > 0 &&
      submitedFee.trim().length > 0 &&
      image != null &&
      branch.trim().length > 0
    ) {
      setDoc(doc(db, "student", enrollmentNumber), {
        enrollment_number: enrollmentNumber,
        certificate_number: certificateNUmber,
        first_name: firstName,
        last_name: lastName,
        branch: branch,
        date_of_joining: dateOfJoining,
        duration: duration,
        address: address,
        course_fee: courseFee,
        submited_fee: submitedFee,
        contact_number_1: contactNumber1,
        contact_number_2: contactNumber2,
        photo: image,
        courses: course,
      })
        .then(() => {
          console.log("data submited");
        })
        .catch((error) => {
          console.log("This error occured : ", error);
        });

      props.navigation.navigate("Students");
    } else setIsValid(!isValid);
  };
  const okClicked = (okValidity) => {
    setIsValid(!okValidity);
  };

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/new_student_2.png")}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
      <Text style={styles.title}>👨🏻‍🎓 New Student</Text>
      <ScrollView style={styles.formView}>
        <KeyboardAvoidingView>
          <View style={{ width: "90%", alignSelf: "center" }}>
            <Text style={styles.inputLabel}>Enrollment Number</Text>
            <TextInput
              style={[styles.input]}
              returnKeyType="next"
              placeholder="Enter Student's Enrollment Number"
              value={enrollmentNumber}
              onChangeText={enrollmentNumberHandler}
            />
            <Text style={styles.inputLabel}>Ceritificate Number</Text>
            <TextInput
              style={styles.input}
              returnKeyType={"next"}
              placeholder="Enter Student's Certificate Number"
              value={certificateNUmber}
              onChangeText={certificateNumberHandler}
            />
            <Text style={styles.inputLabel}>First Name</Text>
            <TextInput
              style={styles.input}
              returnKeyType={"next"}
              placeholder="Enter Student's First Name"
              value={firstName}
              onChangeText={firstNameHandler}
            />
            <Text style={styles.inputLabel}>Last Name</Text>
            <TextInput
              style={styles.input}
              returnKeyType={"next"}
              placeholder="Enter Student's Last Name"
              value={lastName}
              onChangeText={lastNameHandler}
            />
            <Text style={styles.inputLabel}>Branch</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Student's Branch"
              value={branch}
              onChangeText={branchHandler}
            />
            <Text style={styles.inputLabel}>Courses</Text>
            <View style={styles.coursesView}>
              {courses.map((course) => (
                <CheckBox
                  isChecked={isChecked[course.label]}
                  onClick={() =>
                    setIsChecked({
                      ...isChecked,
                      [course.label]: !isChecked[course.label],
                    })
                  }
                  rightText={course.label}
                  rightTextStyle={{ fontSize: 20 }}
                  checkedCheckBoxColor="#0acafa"
                  uncheckedCheckBoxColor="black"
                  key={course.value}
                />
              ))}
            </View>
            <Text style={styles.inputLabel}>Date of joining</Text>
            <DatePicker
              mode="calendar"
              style={styles.dateChooser}
              onDateChange={dateHandler}
            />
            <Text style={styles.inputLabel}>Course Duration</Text>
            <TextInput
              style={styles.input}
              returnKeyType={"next"}
              keyboardType="number-pad"
              placeholder="Enter Course Duration in Weeks"
              value={duration}
              onChangeText={durationHandler}
            />
            <Text style={styles.inputLabel}>Address</Text>
            <TextInput
              multiline
              returnKeyType={"next"}
              style={[styles.input, { height: 100 }]}
              placeholder="Enter complete address"
              value={address}
              onChangeText={addressHandler}
            />
            <Text style={styles.inputLabel}>Contact Number - 1</Text>
            <TextInput
              style={styles.input}
              returnKeyType={"next"}
              keyboardType="number-pad"
              placeholder="Enter Student's Contact Number"
              value={contactNumber1}
              onChangeText={contactNumber1Handler}
            />
            <Text style={styles.inputLabel}>Contact Number - 2</Text>
            <TextInput
              style={styles.input}
              returnKeyType={"next"}
              keyboardType="number-pad"
              placeholder="Enter Guardian Contact Number"
              value={contactNumber2}
              onChangeText={contactNumber2Handler}
            />
            <Text style={styles.inputLabel}>Course Fees</Text>
            <TextInput
              style={styles.input}
              returnKeyType={"next"}
              keyboardType="number-pad"
              placeholder="Enter Course Fees"
              value={courseFee}
              required
              onChangeText={courseFeeHandler}
            />
            <Text style={[styles.inputLabel, { marginLeft: "0%" }]}>
              Fees Submited
            </Text>
            <TextInput
              style={styles.input}
              returnKeyType={"next"}
              keyboardType="number-pad"
              placeholder="Enter Submited Fees"
              value={submitedFee}
              onChangeText={submitedFeeHandler}
            />
          </View>
          <Text style={[styles.inputLabel, { marginLeft: "5%", fontSize: 21 }]}>
            Student Photo
          </Text>
          <TouchableOpacity
            style={[styles.submitButton, { backgroundColor: "#0acafa" }]}
            onPress={pickImage}
          >
            <Text style={styles.submitButtonText}>Choose Image</Text>
          </TouchableOpacity>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200, alignSelf: "center" }}
            />
          )}
        </KeyboardAvoidingView>
      </ScrollView>
      {!isValid ? <ErrorModal onOkClick={okClicked} /> : null}
      <TouchableOpacity style={styles.submitButton} onPress={submitHandler}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewStudent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 10,
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
