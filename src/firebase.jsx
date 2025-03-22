// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, OAuthProvider } from 'firebase/auth';
import { getFirestore, setDoc, doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWORQAulpoot_eblxNzxWFxmB8KwSuHE0",
  authDomain: "e-learning-73bd1.firebaseapp.com",
  databaseURL: "https://e-learning-73bd1-default-rtdb.firebaseio.com",
  projectId: "e-learning-73bd1",
  storageBucket: "e-learning-73bd1.firebasestorage.app",
  messagingSenderId: "292765849289",
  appId: "1:292765849289:web:af488f1367cefa7f019f18",
  measurementId: "G-VBW1XW2FKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const appleProvider = new OAuthProvider('apple.com');

export { auth,signOut ,createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, googleProvider, facebookProvider, appleProvider };
