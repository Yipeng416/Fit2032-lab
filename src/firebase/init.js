// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // 如果需要 Firestore 功能

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1QXE67q6BaVgcSMH_bJwbSXlgD1XN7tw",
    authDomain: "fit5032-lab-c2033.firebaseapp.com",
    projectId: "fit5032-lab-c2033",
    storageBucket: "fit5032-lab-c2033.appspot.com",
    messagingSenderId: "907867742271",
    appId: "1:907867742271:web:9532c2599ba94cf3b0988a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp); // 如果需要使用 Firestore

export { firebaseApp, db };
