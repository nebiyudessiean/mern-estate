// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,

  // apiKey: "AIzaSyDOshLMntf1TrV7K7nwyQJmdwGihaoMdSs",


  authDomain: "mern-estate-f992e.firebaseapp.com",

  projectId: "mern-estate-f992e",

  storageBucket: "mern-estate-f992e.appspot.com",

  messagingSenderId: "36164875393",

  appId: "1:36164875393:web:280e1325be79292fcd0980",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
