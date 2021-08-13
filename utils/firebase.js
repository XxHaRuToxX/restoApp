import firebase from "firebase/app";
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFjlY5SdMlbr8eLqJVkCLMD1Eercha-AU",
    authDomain: "restaurants-603d0.firebaseapp.com",
    projectId: "restaurants-603d0",
    storageBucket: "restaurants-603d0.appspot.com",
    messagingSenderId: "393906939411",
    appId: "1:393906939411:web:a3879d46a2ad9c9a8001e6"
};
// Initialize Firebase
export const firebaseApp=firebase.initializeApp(firebaseConfig);
