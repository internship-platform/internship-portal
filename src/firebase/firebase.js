// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// TODO: Add SDKs for Firebase  products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
firebase.initializeApp({
  apiKey: "AIzaSyBsIlMlkWBFpZRnmpwhpOwkGhvw9PB3Ajs",
  authDomain: "test-11a86.firebaseapp.com",
  projectId: "test-11a86",
  storageBucket: "test-11a86.appspot.com",
  messagingSenderId: "233183459133",
  appId: "1:233183459133:web:ab8a813442d07f0728f754",
});

// Initialize Firebase
export const app = firebase.app();
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
