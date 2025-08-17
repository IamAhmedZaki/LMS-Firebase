// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFtK_j424P0C_NuFnVLSqU3sZkE22hSWs",
  authDomain: "react-auth-bf23e.firebaseapp.com",
  projectId: "react-auth-bf23e",
  storageBucket: "react-auth-bf23e.firebasestorage.app",
  messagingSenderId: "643549850365",
  appId: "1:643549850365:web:c843623525e53fe5faac94",
  measurementId: "G-WWCJP3LQ2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };