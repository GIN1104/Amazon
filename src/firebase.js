import firebase from "firebase";

export const firebaseConfig = {
    apiKey: "AIzaSyAkMXUOBV6W0EZFzzOdo4e-0Idf7qgs19s",
    authDomain: "fir-8b960.firebaseapp.com",
    projectId: "fir-8b960",
    storageBucket: "fir-8b960.appspot.com",
    messagingSenderId: "15777246248",
    appId: "1:15777246248:web:67edbafb8a88cf040a991d"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };