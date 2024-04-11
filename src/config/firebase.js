import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAov-ccHxnRuJHdA72Njwx_4Zo0Z1fIUM",
  authDomain: "applogin-bfb79.firebaseapp.com",
  projectId: "applogin-bfb79",
  storageBucket: "applogin-bfb79.appspot.com",
  messagingSenderId: "199700132404",
  appId: "1:199700132404:web:446fb3e99e703672929061",
  measurementId: "G-BCKZDZ6D18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);