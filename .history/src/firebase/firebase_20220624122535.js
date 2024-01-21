import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoWT-XL2RDItsf-Tj7Au5J-j_0pxNZE1U",
  authDomain: "qr-student-565e2.firebaseapp.com",
  projectId: "qr-student-565e2",
  storageBucket: "qr-student-565e2.appspot.com",
  messagingSenderId: "663166627429",
  appId: "1:663166627429:web:8da403b3e3a623df1aa08c",
  measurementId: "G-Z4TQQCYBWH"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
expoconst db = getFirestore(app);