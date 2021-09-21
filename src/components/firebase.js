import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyD4PuhPH5TkK7TzxyUhjFIKbYez7qgzJZQ",
    authDomain: "kimyechat.firebaseapp.com",
    projectId: "kimyechat",
    storageBucket: "kimyechat.appspot.com",
    messagingSenderId: "589655411072",
    appId: "1:589655411072:web:dd8982c501353546c55965",
    measurementId: "G-GR6BGP29RF"
  }).auth();