// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-q7Fl6R4maMe5jAR-ibCBgLt86aawfMk",
  authDomain: "emazon-simple-project.firebaseapp.com",
  projectId: "emazon-simple-project",
  storageBucket: "emazon-simple-project.appspot.com",
  messagingSenderId: "737580921789",
  appId: "1:737580921789:web:b7bbc5caf6b3d87b8798d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
