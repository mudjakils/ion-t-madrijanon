// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCzd1XqWDe2hDzUpqjGLBL60Dn2XXE_6WY",
    authDomain: "it35-madrijanon.firebaseapp.com",
    projectId: "it35-madrijanon",
    storageBucket: "it35-madrijanon.appspot.com",
    messagingSenderId: "845451602448",
    appId: "1:845451602448:web:f42af59e813e827392b895",
    measurementId: "G-5F59DBWWGT"
  };


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db}