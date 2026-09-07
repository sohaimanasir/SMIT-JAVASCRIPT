// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAFipWowlFz9tzIje14lvBp1ehP2ZdF5E",
  authDomain: "smit-project-01-7c8e0.firebaseapp.com",
  projectId: "smit-project-01-7c8e0",
  storageBucket: "smit-project-01-7c8e0.firebasestorage.app",
  messagingSenderId: "430069682171",
  appId: "1:430069682171:web:88e37aa352fbe829d5455e",
  measurementId: "G-65RDRFV8PW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

