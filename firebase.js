import firebase from "firebase"



export const firebaseConfig = {
    apiKey: "AIzaSyA-iiTo6ijS52qyU5-18AGnx0Vh3QrUO0E",
    authDomain: "kalakriti-3efc6.firebaseapp.com",
    projectId: "kalakriti-3efc6",
    storageBucket: "kalakriti-3efc6.appspot.com",
    messagingSenderId: "995549011281",
    appId: "1:995549011281:web:baecdff25f27b3fcf10770"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }

  
  export const db = firebase.firestore();
  