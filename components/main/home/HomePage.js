import React, { useState, useEffect } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { db } from "../../../firebase-auth";
import { collection, getDocs } from "firebase/firestore";

const colors = [
  "#e9cdf7",
  "#c5fcfc",
  "#fae2b6",
  "#ddf2bf",
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

const HomePage = ({ navigation }) => {
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

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/home_bk.jpg")}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>IT SKILLS</Text>
          <Text style={styles.headerText2}>Every skill you acquire</Text>
          <Text style={styles.headerText2}>
            Doubles your odd of success ...
          </Text>
        </View>
        <View>
          <Image
            source={require("../../../assets/profile_icon.png")}
            style={styles.profileImage}
          />
        </View>
      </View>

      <View style={styles.courses}>
        <View style={styles.courseHeader}>
          <Text
            style={{
              fontSize: 23,
              fontWeight: "bold",
              marginLeft: 20,
              marginTop: 20,
            }}
          >
            ✏️ Courses
          </Text>
          <Pressable onPress={() => navigation.navigate("Courses")}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                marginRight: 30,
                marginTop: 27,
                color: "blue",
                fontFamily: "sans-serif",
                fontStyle: "italic",
              }}
            >
              See All !!
            </Text>
          </Pressable>
        </View>
        <View style={styles.courseBody}>
          <View style={styles.quickSearch}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={[styles.quickButton, { backgroundColor: "#b4dcfa" }]}
                onPress={() =>
                  navigation.navigate("CourseStudents", "C Programming")
                }
              >
                <Image
                  style={styles.quickButtonIcon}
                  source={require("../../../assets/c_icon.png")}
                />
              </TouchableOpacity>
              <Text style={styles.quickButtonText}>C</Text>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={[styles.quickButton, { backgroundColor: "#fab4b4" }]}
                onPress={() => navigation.navigate("CourseStudents", "Java")}
              >
                <Image
                  style={[styles.quickButtonIcon, { height: 70 }]}
                  source={require("../../../assets/java_icon.png")}
                />
              </TouchableOpacity>
              <Text style={styles.quickButtonText}>Java</Text>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={[styles.quickButton, { backgroundColor: "#b9c9fa" }]}
                onPress={() => navigation.navigate("CourseStudents", "C++")}
              >
                <Image
                  style={styles.quickButtonIcon}
                  source={require("../../../assets/cpp_icon.png")}
                />
              </TouchableOpacity>
              <Text style={styles.quickButtonText}>C++</Text>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={[styles.quickButton, { backgroundColor: "#fadca5" }]}
                onPress={() => navigation.navigate("CourseStudents", "Python")}
              >
                <Image
                  style={styles.quickButtonIcon}
                  source={require("../../../assets/python_icon.png")}
                />
              </TouchableOpacity>
              <Text style={styles.quickButtonText}>Python</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.pendingFees}>
        <View style={styles.courseHeader}>
          <Text
            style={{
              fontSize: 23,
              fontWeight: "bold",
              marginLeft: 20,
              marginTop: 20,
            }}
          >
            💵 Pending Fees
          </Text>
          <Pressable onPress={() => navigation.navigate("Fees")}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                marginRight: 30,
                marginTop: 27,
                color: "blue",
                fontFamily: "sans-serif",
                fontStyle: "italic",
              }}
            >
              See All !!
            </Text>
          </Pressable>
        </View>
        <View style={styles.feesBody}>
          {students.map((item) => {
            if (parseInt(item.course_fee) - parseInt(item.submited_fee) != 0) {
              return (
                <View
                  style={[
                    styles.feeStudent,
                    { backgroundColor: colors[Math.floor(Math.random() * 25)] },
                  ]}
                  key={item.enrollment_number}
                >
                  <Text style={styles.feeStudentData}>{item.first_name}</Text>
                  <Text style={styles.feeStudentData}>{item.courses[0]}</Text>
                  <Text style={styles.feeStudentData}>{`₹${
                    parseInt(item.course_fee) - parseInt(item.submited_fee)
                  }`}</Text>
                </View>
              );
            }
          })}
        </View>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    height: 165,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 70,
    marginLeft: 20,
  },
  headerText2: {
    fontSize: 10,
    fontWeight: "bold",
    marginLeft: 20,
    fontStyle: "italic",
    fontFamily: "sans-serif",
  },
  profileImage: {
    width: 80,
    height: 80,
    marginTop: 70,
    marginRight: 30,
  },
  courses: {
    width: "95%",
    height: "24%",
    marginTop: 20,
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 15,
    elevation: 10,
  },
  courseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  courseBody: {
    width: "100%",
    height: 190,
  },
  quickSearch: {
    width: "100%",
    height: 150,
    marginTop: 25,
    flexDirection: "row",
  },
  quickButton: {
    width: 75,
    height: 75,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  quickButtonIcon: {
    width: 50,
    height: 50,
  },
  quickButtonText: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  pendingFees: {
    width: "95%",
    height: "40%",
    backgroundColor: "white",
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 15,
    elevation: 10,
    overflow: "hidden",
  },
  feesBody: {
    flex: 1,
  },
  feeStudent: {
    width: "95%",
    height: 55,
    marginTop: 17,
    alignSelf: "center",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  feeStudentData: {
    fontSize: 20,
    lineHeight: 50,
    fontWeight: "500",
    color: "black",
  },
});
