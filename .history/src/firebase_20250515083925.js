import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBChZla65Q1CPVtfznouNIP32imzdxkn_8",
  authDomain: "my-keiziban.firebaseapp.com",
  projectId: "my-keiziban",
  storageBucket: "my-keiziban.firebasestorage.app",
  messagingSenderId: "79713611966",
  appId: "1:79713611966:web:edc8860afb955805db6eef",
  measurementId: "G-68FE7ELKW5"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getAuth(app);
