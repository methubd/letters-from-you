// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwQAI7KnvJCv1wb14urwiwUQSjYCPCg7M",
  authDomain: "letters-from-you.firebaseapp.com",
  projectId: "letters-from-you",
  storageBucket: "letters-from-you.appspot.com",
  messagingSenderId: "651871559344",
  appId: "1:651871559344:web:da54b403be27318a5ee575",
  measurementId: "G-4DHV6JWTQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;