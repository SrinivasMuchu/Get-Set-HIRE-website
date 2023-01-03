// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsIjApAMcYLmugJ6MHQqkETV3ZHqr9ERI",
  authDomain: "get-set-hire.firebaseapp.com",
  projectId: "get-set-hire",
  storageBucket: "get-set-hire.appspot.com",
  messagingSenderId: "314820254275",
  appId: "1:314820254275:web:92b2a4e8c3f1d23dd512f6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);