// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: "insta-v1-7054a",
  storageBucket: "insta-v1-7054a.appspot.com",
  messagingSenderId: "5719658762",
  appId: "1:5719658762:web:49b88d9e0abcf58ca3aaf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);