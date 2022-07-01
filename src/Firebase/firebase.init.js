// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB559-NWGJ1_suOmbSWrJXgajfd7jNhHq4",
  authDomain: "doctor-appointment-376ba.firebaseapp.com",
  projectId: "doctor-appointment-376ba",
  storageBucket: "doctor-appointment-376ba.appspot.com",
  messagingSenderId: "786852216873",
  appId: "1:786852216873:web:cb0f501652c94f4cbe1c38",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
