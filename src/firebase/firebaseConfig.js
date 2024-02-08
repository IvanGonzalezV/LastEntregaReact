import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2s4_wNqpV2JO_cF3beY2AUIxLxjKl2W0",
  authDomain: "react-ecommerce-5e8e2.firebaseapp.com",
  projectId: "react-ecommerce-5e8e2",
  storageBucket: "react-ecommerce-5e8e2.appspot.com",
  messagingSenderId: "886252990574",
  appId: "1:886252990574:web:23e724ef7593d9b577f67f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);