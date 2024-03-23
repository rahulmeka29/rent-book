import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBoXWnqF7CoWmEKg6uj0McZDGaW9Qdq04M",
  authDomain: "rent-a-book-414816.firebaseapp.com",
  projectId: "rent-a-book-414816",
  storageBucket: "rent-a-book-414816.appspot.com",
  messagingSenderId: "445531808878",
  appId: "1:445531808878:web:5bd03874fb81b4d558327f",
  databaseUrL:
    "https://console.firebase.google.com/u/0/project/rent-a-book-414816/database/rent-a-book-414816-default-rtdb/data/~2F",
};
export const app = initializeApp(firebaseConfig);
