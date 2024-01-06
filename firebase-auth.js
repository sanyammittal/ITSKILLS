import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4wAXuE3hOY0X6fM2hOdKs4J72cE0ChvY",
  authDomain: "it-skills-1552b.firebaseapp.com",
  projectId: "it-skills-1552b",
  storageBucket: "it-skills-1552b.appspot.com",
  messagingSenderId: "275701232033",
  appId: "1:275701232033:web:1b17ee354496c4ad1edbe0",
  measurementId: "G-17YTZQPN7W",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
