import firebase from "firebase/app";


import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDq2dBiitml_0cOocSKNhLnqJsSUeHLE3o",
    authDomain: "awtech-form.firebaseapp.com",
    databaseURL: "https://awtech-form-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "awtech-form",
    storageBucket: "awtech-form.appspot.com",
    messagingSenderId: "1002518918371",
    appId: "1:1002518918371:web:efefb3493a0d981fe281d6",
    measurementId: "G-41B1RE5CVN"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  firebase.initializeApp(firebaseConfig);
  fire.analytics();
  
