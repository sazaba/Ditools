// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8ucB-wHDaHOPlZp5ObY1Q8opwrokdm_8",
  authDomain: "ditools.firebaseapp.com",
  projectId: "ditools",
  storageBucket: "ditools.appspot.com",
  messagingSenderId: "515739757173",
  appId: "1:515739757173:web:5e2b81a5c4223f467a263c",
  measurementId: "G-ZF2TSD3N2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {auth}
