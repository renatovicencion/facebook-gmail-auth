import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA10hspK1QiOUUN8Xlx4Pb46P5UIEp3zgk",
  authDomain: "facebook--auth-93bc9.firebaseapp.com",
  projectId: "facebook--auth-93bc9",
  storageBucket: "facebook--auth-93bc9.appspot.com",
  messagingSenderId: "608872670194",
  appId: "1:608872670194:web:cffdefa3e343d4b750816b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {firebase, db, auth, storage}