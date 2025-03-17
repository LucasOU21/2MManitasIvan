import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


//web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxbC3de9Qap1Pf0nAZ076NAbCTvC36hZI",
  authDomain: "manitasmadrid-7ccc6.firebaseapp.com",
  projectId: "manitasmadrid-7ccc6",
  storageBucket: "manitasmadrid-7ccc6.firebasestorage.app",
  messagingSenderId: "667084472467",
  appId: "1:667084472467:web:624da1872f022b97950d66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };