import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB873wriuSC7TJLrJ8OuckBEzoNuYOjbGE",
  authDomain: "my-app-a6703.firebaseapp.com",
  projectId: "my-app-a6703",
  storageBucket: "my-app-a6703.appspot.com",
  messagingSenderId: "1065138025882",
  appId: "1:1065138025882:web:8c7eaab641443aef633623",
  measurementId: "G-X0F2CWKRJG"
};


// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta el servicio de Firestore
export const firestore = getFirestore(app);

