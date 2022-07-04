import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYurXYgayNQe9kul_H0DiWllUyLb7Fz0Q",
  authDomain: "car-shop-94440.firebaseapp.com",
  projectId: "car-shop-94440",
  storageBucket: "car-shop-94440.appspot.com",
  messagingSenderId: "944860946661",
  appId: "1:944860946661:web:0576d3af1235ad865f740c"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };