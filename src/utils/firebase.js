// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVa0SjYELxGGfxUpz29ifca6ZryNjdmts",
  authDomain: "netflixgpt-5b71b.firebaseapp.com",
  projectId: "netflixgpt-5b71b",
  storageBucket: "netflixgpt-5b71b.appspot.com",
  messagingSenderId: "119267738569",
  appId: "1:119267738569:web:74eb8d03a18f516f319e18",
  measurementId: "G-GF4CCN535G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);