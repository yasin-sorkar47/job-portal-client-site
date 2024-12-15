// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNCksQS-eYt75LSXGg46tGjcjAWM_wDTM",
  authDomain: "job-portal-6bda0.firebaseapp.com",
  projectId: "job-portal-6bda0",
  storageBucket: "job-portal-6bda0.firebasestorage.app",
  messagingSenderId: "132106762646",
  appId: "1:132106762646:web:ad7148c0cbfb59cee145b7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
