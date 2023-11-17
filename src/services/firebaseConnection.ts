import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5uLDllusBE1rO7ZCIavjaANyFmM7xCpg",
  authDomain: "tarefasplus-27c0e.firebaseapp.com",
  databaseURL: "https://tarefasplus-27c0e-default-rtdb.firebaseio.com",
  projectId: "tarefasplus-27c0e",
  storageBucket: "tarefasplus-27c0e.appspot.com",
  messagingSenderId: "63263781248",
  appId: "1:63263781248:web:7dec1956fbdb26d7f09165",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
