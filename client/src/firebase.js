// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dawdle-13b4f.firebaseapp.com",
  projectId: "dawdle-13b4f",
  storageBucket: "dawdle-13b4f.appspot.com",
  messagingSenderId: "114940100488",
  appId: "1:114940100488:web:c5df63b07d4da4d1fb443d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);