// src/firebase/firebase-config.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCd2Qquy3ju4x09Q1dqdg4faEOE4Efuafg",
  authDomain: "waikiki-app.firebaseapp.com",
  projectId: "waikiki-app",
  storageBucket: "waikiki-app.appspot.com",
  messagingSenderId: "315281929656",
  appId: "1:315281929656:web:b1b731f9a68a2f7ac6cb4d",
  measurementId: "G-PK3VJF7VJQ"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa los servicios que deseas usar
export const db = getFirestore(app);
export const auth = getAuth(app);

// Inicializa Firebase Analytics
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
