import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { KeyboardAvoidingView } from "react-native";
import { db } from "../../../firebase-auth";
import { collection, getDocs } from "firebase/firestore";

const colors = [
  "#ffb3b3",
  "#ffc6b3",
  "#ffd9b3",
  "#ffecb3",
  "#ffffb3",
  "#ecffb3",
  "#d9ffb3",
  "#c6ffb3",
  "#b3ffb3",
  "#b3ffc6",
  "#b3ffd9",
  "#b3ffec",
  "#b3ffff",
  "#b3ecff",
  "#b3d9ff",
  "#b3c6ff",
  "#b3b3ff",
  "#c6b3ff",
  "#d9b3ff",
  "#ecb3ff",
  "#ffb3ff",
  "#ffb3ec",
  "#ffb3d9",
  "#ffb3c6",
  "#ffb3b3",
];

const Fees = (props) => {
  const [textSearch, setTextSearch] = useState("");
  const [students, updateStudents] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "student")).then((docSnap) => {
      let stud = [];
      docSnap.forEach((doc) => {
        stud.push({ ...doc.data(), id: doc.id });
      });
      updateStudents(stud);
    });
  }, []);

  const searchUserHandler = (text) => setTextSearch(text);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/feesbk.jpg")}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
      <Text style={styles.title}>💵 Pending Fees</Text>
      <KeyboardAvoidingView>
        <ScrollView style={styles.scrollView}>
          <View style={styles.studentSearch}>
            <TextInput
              style={{ width: "75%", marginRight: 15, fontSize: 15 }}
              placeholder="Search student here ..."
              onChangeText={searchUserHandler}
              value={textSearch}
            />
            <TouchableOpacity>
              <SimpleLineIcons name="magnifier" size={20} color="#808080" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={students}
            renderItem={({ item }) => {
              if (textSearch === "") {
                if (
                  parseInt(item.course_fee) - parseInt(item.submited_fee) !=
                  0
                ) {
                  return (
                    <View
                      style={[
                        styles.students,
                        {
                          backgroundColor:
                            colors[Math.floor(Math.random() * 25)],
                        },
                      ]}
                      key={colors[Math.floor(Math.random() * 25)]}
                    >
                      <View style={styles.studentImage}>
                        <Image
                          source={{ uri: item.photo }}
                          style={styles.studentImageIcon}
                        />
                      </View>
                      <View style={styles.studentInfo}>
                        <Text style={styles.studentName}>
                          {`${item.first_name} ${item.last_name}`}
                        </Text>
                        <Text style={styles.studentCourse}>{`₹${
                          parseInt(item.course_fee) -
                          parseInt(item.submited_fee)
                        }`}</Text>
                      </View>
                      <TouchableOpacity
                        style={styles.studentViewMoreButton}
                        onPress={() => {
                          props.navigation.navigate("StudentInfo", item);
                        }}
                      >
                        <Text style={styles.studentViewMoreButtonText}>
                          View
                        </Text>
                        <Text style={styles.studentViewMoreButtonText}>
                          More
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                }
              }
              if (
                item.first_name.toLowerCase().includes(textSearch.toLowerCase())
              ) {
                if (
                  parseInt(item.course_fee) - parseInt(item.submited_fee) !=
                  0
                ) {
                  return (
                    <View
                      style={[
                        styles.students,
                        {
                          backgroundColor:
                            colors[Math.floor(Math.random() * 25)],
                        },
                      ]}
                      key={colors[Math.floor(Math.random() * 25)]}
                    >
                      <View style={styles.studentImage}>
                        <Image
                          source={{ uri: item.photo }}
                          style={styles.studentImageIcon}
                        />
                      </View>
                      <View style={styles.studentInfo}>
                        <Text style={styles.studentName}>
                          {`${item.first_name} ${item.last_name}`}
                        </Text>
                        <Text style={styles.studentCourse}>{`₹${
                          parseInt(item.course_fee) -
                          parseInt(item.submited_fee)
                        }`}</Text>
                      </View>
                      <TouchableOpacity
                        style={styles.studentViewMoreButton}
                        onPress={() => {
                          props.navigation.navigate("StudentInfo", item);
                        }}
                      >
                        <Text style={styles.studentViewMoreButtonText}>
                          View
                        </Text>
                        <Text style={styles.studentViewMoreButtonText}>
                          More
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                }
              }
            }}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Fees;

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
  studentCount: {
    marginLeft: 33,
    fontSize: 20,
  },
  studentSearch: {
    borderWidth: 1,
    width: "90%",
    height: 45,
    alignSelf: "center",
    borderRadius: 10,
    borderColor: "#bdbdbd",
    backgroundColor: "white",
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  scrollView: {
    width: "100%",
    alignSelf: "center",
    marginTop: 15,
    height: "75%",
  },
  students: {
    width: "90%",
    height: 70,
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 12,
    borderRadius: 10,
    alignSelf: "center",
  },
  studentImage: {
    width: 66,
    height: "90%",
    alignItems: "center",
    borderRadius: 50,
    marginLeft: 10,
  },
  studentImageIcon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 50,
  },
  studentInfo: {
    width: "48%",
    height: "100%",
  },
  studentName: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    lineHeight: 41,
  },
  studentCourse: {
    marginLeft: 15,
    fontSize: 15,
    lineHeight: 15,
  },
  studentViewMoreButton: {
    width: "25%",
    height: "80%",
    backgroundColor: "white",
    alignSelf: "center",
    marginLeft: 6,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    paddingTop: 5,
  },
  studentViewMoreButtonText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
});
