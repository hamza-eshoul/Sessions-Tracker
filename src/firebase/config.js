import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5pvWG93WKgJ_FKP4oGlCOz2m7G2VhEg0",
  authDomain: "sessions-tracker.firebaseapp.com",
  projectId: "sessions-tracker",
  storageBucket: "sessions-tracker.appspot.com",
  messagingSenderId: "817981078979",
  appId: "1:817981078979:web:bbc948ef178f5eb43d9176",
};

// init firebase
const app = initializeApp(firebaseConfig);

// init firestore
const db = getFirestore(app);

export { db };
