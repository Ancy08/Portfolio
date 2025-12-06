import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDSALQsuXL_gwOe72auxsrxfDfsUH_zVMc",
  authDomain: "blog-app-93c6d.firebaseapp.com",
  projectId: "blog-app-93c6d",
  storageBucket: "blog-app-93c6d.firebasestorage.app",
  messagingSenderId: "776812261956",
  appId: "1:776812261956:web:17e0ad452abd2966d3c211",
  measurementId: "G-DN69YYC9F0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth