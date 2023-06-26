import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwQ7rLj9nYDMj5qIEsrJqpq_gDhxs4pIs",
  authDomain: "comision-54965-coder-react.firebaseapp.com",
  projectId: "comision-54965-coder-react",
  storageBucket: "comision-54965-coder-react.appspot.com",
  messagingSenderId: "629727501279",
  appId: "1:629727501279:web:6498a01ddfe9d2b0edc26a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);