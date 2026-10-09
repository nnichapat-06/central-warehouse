import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyC3qbX0fQT2KuAwhAHref4th0DJMNJLPU0",
  authDomain: "central-warehouse-db.firebaseapp.com",
  projectId: "central-warehouse-db",
  storageBucket: "central-warehouse-db.appspot.com",
  messagingSenderId: "574082326589",
  appId: "1:574082326589:web:3658d532d768a5c45d8a54",
  measurementId: "G-33K2ZZ2TTW"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app); 