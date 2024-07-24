// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6Nics_XC9J-gMQ-cG2sVY3iyU-iB6JIg",
  authDomain: "chatapp-e0abd.firebaseapp.com",
  projectId: "chatapp-e0abd",
  storageBucket: "chatapp-e0abd.appspot.com",
  messagingSenderId: "16080006041",
  appId: "1:16080006041:web:1c69918e98c8757dc68108",
  measurementId: "G-4VL1M9Q8CH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
