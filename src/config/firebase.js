// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcHXO31kV3cFdPM4qEnOvyHaMcwnQoIS0",
  authDomain: "pokemon-firebase-46a04.firebaseapp.com",
  projectId: "pokemon-firebase-46a04",
  storageBucket: "pokemon-firebase-46a04.firebasestorage.app",
  messagingSenderId: "739883730343",
  appId: "1:739883730343:web:93ca73187d7bd892c72282"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// 2026.03.31 add
export const auth = getAuth(app)
// 2026.04.06 fireBase Storage 추가
export const storage = getStorage();