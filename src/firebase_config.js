import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyC-9po2_L6JctVUkLUxx03ECrjEpDHBSJc",
    authDomain: "kasbai-a1f2e.firebaseapp.com",
    projectId: "kasbai-a1f2e",
    storageBucket: "kasbai-a1f2e.appspot.com",
    messagingSenderId: "340640569536",
    appId: "1:340640569536:web:c44ea76c5cac6fe44eb525",
    measurementId: "G-YKKW0XT6YK"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };
