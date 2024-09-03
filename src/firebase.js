import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRdc7taD4Ec3gCXyUU-YgdPHxRf8c8BEU",
  authDomain: "library-management-app-96c2c.firebaseapp.com",
  projectId: "library-management-app-96c2c",
  storageBucket: "library-management-app-96c2c.appspot.com",
  messagingSenderId: "215642885142",
  appId: "1:215642885142:web:dea28810e24a9378c0b937",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
