import React from "react";
import HomePage from "./home/HomePage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Students from "./students/Students";
import Profile from "./profile/Profile";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Certificates from "./certificate/Certificates";
import Fees from "./home/Fees";
import NewStudent from "./newstudent/NewStudent";

const Menu = () => {
  const Tab = createBottomTabNavigator();

  const screenOptions = {
    tabBarShowLabel: false,
    tabBarStyle: {
      position: "absolute",
      bottom: "2%",
      right: "2%",
      left: "2%",
      elivation: 10,
      height: 60,
      borderRadius: 15,
      backgroundColor: "#fff",
    },
  };

  const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
      onPress={onPress}
      style={{
        top: -20,
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        height: 70,
      }}
    >
      <View>{children}</View>
    </TouchableOpacity>
  );

  return (
    <Tab.Navigator initialRouteName="HomePage" screenOptions={screenOptions}>
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconView}>
              <Image
                source={require("../../assets/home_icon.png")}
                resizeMode="contain"
                style={{
                  width: focused ? 40 : 30,
                  height: focused ? 40 : 30,
                  tintColor: focused ? "#fa6432" : "black",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Students"
        component={Students}
        options={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconView}>
              <Image
                source={require("../../assets/students_icon.png")}
                resizeMode="contain"
                style={{
                  width: focused ? 40 : 30,
                  height: focused ? 40 : 30,
                  tintColor: focused ? "#2a35b5" : "black",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="NewStudent"
        component={NewStudent}
        options={{
          headerShown: false,
          tabBarStyle: { display: "none" },
          tabBarIcon: () => (
            <View style={styles.tabIconView}>
              <Image
                source={require("../../assets/add-student_icon.png")}
                resizeMode="contain"
                style={{
                  width: 70,
                  height: 70,
                }}
              />
            </View>
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Fees"
        component={Fees}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconView}>
              <Image
                source={require("../../assets/fees.png")}
                resizeMode="contain"
                style={{
                  width: focused ? 65 : 55,
                  height: focused ? 65 : 55,
                  tintColor: focused ? "#2ab546" : "black",
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Certificates"
        component={Certificates}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconView}>
              <Image
                source={require("../../assets/certificates_icon.png")}
                resizeMode="contain"
                style={{
                  width: focused ? 40 : 35,
                  height: focused ? 40 : 35,
                  tintColor: focused ? "#833cbd" : "black",
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Menu;

const styles = StyleSheet.create({
  tabIconView: {
    justifyContent: "center",
    alignItems: "center",
  },
});
