import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

import {
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1g6jsEH4Mob7EcwEeYZD-qlpPEaKGyOc",
  authDomain: "smartcampusai-f9860.firebaseapp.com",
  projectId: "smartcampusai-f9860",
  storageBucket: "smartcampusai-f9860.firebasestorage.app",
  messagingSenderId: "109290902134",
  appId: "1:109290902134:web:8b8ca92522b892e8f68557",
  measurementId: "G-8ZQ5NEHF2G"
};

const app =
  initializeApp(firebaseConfig);

// AUTH
export const auth =
  getAuth(app);

// GOOGLE
export const googleProvider =
  new GoogleAuthProvider();

// FIRESTORE DATABASE
export const db =
  getFirestore(app);