
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore , collection } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyCyPzCb_Q0ToLjpo5CQ6XpBowakMZcyI64",
  authDomain: "react-js-spinozzi.firebaseapp.com",
  projectId: "react-js-spinozzi",
  storageBucket: "react-js-spinozzi.appspot.com",
  messagingSenderId: "780829546274",
  appId: "1:780829546274:web:e33c32ef2ac9624186b77b",
  measurementId: "G-ZJLCZC8VZN"
};


const app = initializeApp(firebaseConfig) 
const db = getFirestore(app)
const analytics = getAnalytics(app);
export const productsCollection = collection(db,"productos") 
export const ventasCollection = collection(db,"ventas") 