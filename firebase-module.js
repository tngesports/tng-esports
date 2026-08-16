import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyD2vaxxFMTLNcP4CCELcLKOKNGE_OVN0dY",
  authDomain: "tng-esports-974f6.firebaseapp.com",
  projectId: "tng-esports-974f6",
  storageBucket: "tng-esports-974f6.firebasestorage.app",
  messagingSenderId: "240565450608",
  appId: "1:240565450608:web:99a656546c5658016501b5",
  measurementId: "G-WN1GWJQC33"
};

const ADMIN_EMAIL = "arunachalamb710@gmail.com";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth,db,onAuthStateChanged,signInWithEmailAndPassword,signOut,collection,addDoc,query,orderBy,onSnapshot,serverTimestamp,ADMIN_EMAIL};
