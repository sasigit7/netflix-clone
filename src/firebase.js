import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-bR8NGi05K5p42meILr0D7FmpDxyvcLA",
    authDomain: "netflix-clone-216f1.firebaseapp.com",
    databaseURL: "https://netflix-clone-216f1.firebaseio.com",
    projectId: "netflix-clone-216f1",
    storageBucket: "netflix-clone-216f1.appspot.com",
    messagingSenderId: "409164851524",
    appId: "1:409164851524:web:038ad423164f5775630f11",
    measurementId: "G-DWBFYG1YK9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};