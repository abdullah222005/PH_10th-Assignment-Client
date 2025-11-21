import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcXzblXCBD6NcZeU4YK_0lIch6HIYNNeo",
  authDomain: "the-book-heaven-8aa6c.firebaseapp.com",
  projectId: "the-book-heaven-8aa6c",
  storageBucket: "the-book-heaven-8aa6c.firebasestorage.app",
  messagingSenderId: "694966237706",
  appId: "1:694966237706:web:3933665d2780962beafdf3",
};

const app = initializeApp(firebaseConfig);
export default app;