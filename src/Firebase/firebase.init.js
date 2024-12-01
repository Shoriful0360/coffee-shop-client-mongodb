
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-VP9bH-sTlRcBtnII0azjb4CH4_ERpSA",
  authDomain: "coffee-shop-bdaa4.firebaseapp.com",
  projectId: "coffee-shop-bdaa4",
  storageBucket: "coffee-shop-bdaa4.firebasestorage.app",
  messagingSenderId: "690069752920",
  appId: "1:690069752920:web:3875313671c759eb5a4e2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)