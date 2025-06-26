import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "",
  authDomain: "tranquil-a28af.firebaseapp.com",
  projectId: "tranquil-a28af",
  storageBucket: "tranquil-a28af.appspot.com",
  messagingSenderId: "822396743477",
  appId: "",
};

// Initialize Firebase only if it's not already initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Get Auth instance (No need for persistence in Firebase 11)
const auth = getAuth(app);

export default auth;
