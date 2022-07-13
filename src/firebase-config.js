// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfCp5RUrSmzbZkcMLHJ9TSecfC5KpGA1g",
  authDomain: "mental-healthcare-127a3.firebaseapp.com",
  databaseURL: "https://mental-healthcare-127a3-default-rtdb.firebaseio.com",
  projectId: "mental-healthcare-127a3",
  storageBucket: "mental-healthcare-127a3.appspot.com",
  messagingSenderId: "592766555770",
  appId: "1:592766555770:web:7ec983a5a68cb81a2c8dc3",
  measurementId: "G-8WFV5QP4WQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);