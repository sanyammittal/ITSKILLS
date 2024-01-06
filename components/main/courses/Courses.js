import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import cIcon from "../../../assets/c_icon.png";
import javaIcon from "../../../assets/java_icon.png";
import pyhtonIcon from "../../../assets/python_icon.png";
import cppIcon from "../../../assets/cpp_icon.png";
import webIcon from "../../../assets/web_designing_icon.png";
import phpIcon from "../../../assets/php_icon.png";
import reactIcon from "../../../assets/react_icon.png";
import nodeIcon from "../../../assets/node_js_icon.png";
import sqlIcon from "../../../assets/my_sql_icon.png";
import tallyIcon from "../../../assets/tally_icon.png";
import excelIcon from "../../../assets/excel_icon.png";
import dsaIcon from "../../../assets/dsa_icon.png";
import basicIcon from "../../../assets/basic_icon.png";

const courses = [
  {
    name: "C Programming",
    icon: cIcon,
    bkcolor: "#87a6fa",
  },
  {
    name: "Java",
    icon: javaIcon,
    bkcolor: "#f2aa77",
  },
  {
    name: "Advance Java",
    icon: javaIcon,
    bkcolor: "#f7908d",
  },
  {
    name: "Python",
    icon: pyhtonIcon,
    bkcolor: "#f1f7a8",
  },
  {
    name: "Advance Python",
    icon: pyhtonIcon,
    bkcolor: "#fc9fda",
  },
  {
    name: "C++",
    icon: cppIcon,
    bkcolor: "#97d1fc",
  },
  {
    name: "Web Designing",
    icon: webIcon,
    bkcolor: "#bbfcc6",
  },
  {
    name: "PHP",
    icon: phpIcon,
    bkcolor: "#e1bbfc",
  },
  {
    name: "React JS",
    icon: reactIcon,
    bkcolor: "#9ba1fa",
  },
  {
    name: "React Native",
    icon: reactIcon,
    bkcolor: "#f2b38f",
  },
  {
    name: "Node JS",
    icon: nodeIcon,
    bkcolor: "#7ef782",
  },
  {
    name: "DSA",
    icon: dsaIcon,
    bkcolor: "#86bdfc",
  },
  {
    name: "MySQL",
    icon: sqlIcon,
    bkcolor: "#c68bfc",
  },
  {
    name: "Basics",
    icon: basicIcon,
    bkcolor: "#93f5c4",
  },
  {
    name: "Tally",
    icon: tallyIcon,
    bkcolor: "#f7b6b0",
  },
  {
    name: "Excel",
    icon: excelIcon,
    bkcolor: "#fade9d",
  },
  {
    name: "Advance Excel",
    icon: excelIcon,
    bkcolor: "#8df2f1",
  },
];

const Courses = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/courses.jpg")}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
      <Text style={styles.title}>✏️ Courses</Text>
      <ScrollView style={{ flex: 1 }}>
        <View>
          {courses.map((course) => {
            return (
              <View
                style={[styles.courseBox, { backgroundColor: course.bkcolor }]}
                key={course.name}
              >
                <View style={styles.courseIcon}>
                  <Image source={course.icon} style={styles.courseLogo} />
                </View>

                <View style={styles.courseContent}>
                  <Text
                    style={{ fontSize: 19, fontWeight: "700", marginTop: 0 }}
                  >
                    {course.name}
                  </Text>
                  <TouchableOpacity
                    style={styles.moreButton}
                    onPress={() =>
                      navigation.navigate("CourseStudents", course.name)
                    }
                  >
                    <Text style={styles.moreButtonText}>View Students</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Courses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: "15%",
    marginLeft: 30,
    marginBottom: 15,
  },
  courseBox: {
    width: "90%",
    height: 110,
    marginTop: 10,
    marginBottom: 15,
    backgroundColor: "#c3d8f7",
    alignSelf: "center",
    borderRadius: 20,
    elevation: 10,
    flexDirection: "row",
  },
  courseIcon: {
    width: "40%",
    height: "100%",
    alignItems: "center",
  },
  courseLogo: {
    width: "80%",
    height: "70%",
    resizeMode: "contain",
    justifyContent: "center",
    marginTop: "10%",
  },
  courseContent: {
    width: "60%",
    height: "100%",
    paddingTop: 15,
  },
  moreButton: {
    width: "80%",
    height: 40,
    backgroundColor: "white",
    marginTop: 12,
    borderRadius: 8,
    elevation: 10,
  },
  moreButtonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 35,
  },
});
