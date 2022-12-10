import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDn5S6QLhXmGgZIkGo7XavPnPjynBkdJwo",
  authDomain: "bwi-task.firebaseapp.com",
  projectId: "bwi-task",
  storageBucket: "bwi-task.appspot.com",
  messagingSenderId: "682823112553",
  appId: "1:682823112553:web:ff76683bfb82bb047a8ff8",
  measurementId: "G-VX933RKE04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth=getAuth();
export {auth,db};