import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartUp from "./components/startup/StartUp";
import Login from "./components/startup/Login";
import SignUp1 from "./components/startup/SignUp1";
import { CardStyleInterpolators } from "@react-navigation/stack";
import { Easing } from "react-native";
import Menu from "./components/main/Menu";
import Courses from "./components/main/courses/Courses";
import NewStudent from "./components/main/newstudent/NewStudent";
import UpdateFees from "./components/main/newstudent/UpdateFees";
import StudentInfo from "./components/main/studentinfo/StudentInfo";
import Certificates from "./components/main/certificate/Certificates";
import CourseStudents from "./components/main/courses/CourseStudents";
import ProvideCertificate from "./components/main/certificate/ProvideCertificate";

export default function App() {
  const Stack = createNativeStackNavigator();
  const config = {
    animation: "spring",
    config: {
      stiffness: 1000,
      damping: 50,
      mass: 3,
      overshootingClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  const closeConfig = {
    animation: "timing",
    config: {
      duration: 200,
      easing: Easing.linear,
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StartUp"
        screenOptions={{
          gestureEnabled: true,
          transitionSpec: {
            open: config,
            close: closeConfig,
          },
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen
          name="StartUp"
          component={StartUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp1"
          component={SignUp1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Courses"
          component={Courses}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewStudent"
          component={NewStudent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UpdateFees"
          component={UpdateFees}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Certificates"
          component={Certificates}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StudentInfo"
          component={StudentInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CourseStudents"
          component={CourseStudents}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProvideCertificate"
          component={ProvideCertificate}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
