// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBChZla65Q1CPVtfznouNIP32imzdxkn_8",
  authDomain: "my-keiziban.firebaseapp.com",
  projectId: "my-keiziban",
  storageBucket: "my-keiziban.firebasestorage.app",
  messagingSenderId: "79713611966",
  appId: "1:79713611966:web:edc8860afb955805db6eef",
  measurementId: "G-68FE7ELKW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);