  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAcZvKNllpd296SrY_nDA3UyVDqdeZX01I",
    authDomain: "smit-blog-webpage.firebaseapp.com",
    projectId: "smit-blog-webpage",
    storageBucket: "smit-blog-webpage.firebasestorage.app",
    messagingSenderId: "561779909171",
    appId: "1:561779909171:web:e612e886e3d54b79753946",
    measurementId: "G-693TXSXFWF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export {app}