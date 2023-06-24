// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

import {getAuth, GoogleAuthProvider} from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_NppcsbAUgZXqZhiDb1ffyDF4GoI60rU",
  authDomain: "blog-3e2bc.firebaseapp.com",
  projectId: "blog-3e2bc",
  storageBucket: "blog-3e2bc.appspot.com",
  messagingSenderId: "672725073027",
  appId: "1:672725073027:web:3ae550d97e9d84647e6fb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();