// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDblJN6lRDCLBljly21A_DMLWvL8BPZSSQ",
  authDomain: "recepti-alumni.firebaseapp.com",
  projectId: "recepti-alumni",
  storageBucket: "recepti-alumni.appspot.com",
  messagingSenderId: "701204088428",
  appId: "1:701204088428:web:bb4cf955f5edbf8cf23a49",
  measurementId: "G-LBBGSHHL6N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
