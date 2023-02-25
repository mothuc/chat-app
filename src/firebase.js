// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr7o9ZhCDF-Ljr-7uFiOtBDX7xJfTPeGI",
  authDomain: "chat-d4c50.firebaseapp.com",
  databaseURL: "https://chat-d4c50-default-rtdb.firebaseio.com",
  projectId: "chat-d4c50",
  storageBucket: "chat-d4c50.appspot.com",
  messagingSenderId: "850764958110",
  appId: "1:850764958110:web:51d6f4e9ef9edb2fdb6e8f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
