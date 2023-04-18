// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsIlMlkWBFpZRnmpwhpOwkGhvw9PB3Ajs",
  authDomain: "test-11a86.firebaseapp.com",
  projectId: "test-11a86",
  storageBucket: "test-11a86.appspot.com",
  messagingSenderId: "233183459133",
  appId: "1:233183459133:web:ab8a813442d07f0728f754",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
