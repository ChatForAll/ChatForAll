import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0szKaFT1THw5HaR3--uE4o3Il8TlxTlo",
  authDomain: "chatforall-86963.firebaseapp.com",
  projectId: "chatforall-86963",
  storageBucket: "chatforall-86963.appspot.com",
  messagingSenderId: "968673332926",
  appId: "1:968673332926:web:6789623a796a769924d8ef",
  measurementId: "G-WX4SKF94PX"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const messages_db = "messages";

export { db, messages_db };
