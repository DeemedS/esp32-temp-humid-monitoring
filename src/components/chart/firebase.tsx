import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDKDx2bB7_7KfXyOJ2qj1kxQYi-fVpTdvQ",
    authDomain: "humidtytemperaturemonitoring.firebaseapp.com",
    databaseURL: "https://humidtytemperaturemonitoring-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "humidtytemperaturemonitoring",
    storageBucket: "humidtytemperaturemonitoring.appspot.com",
    messagingSenderId: "400924063627",
    appId: "1:400924063627:web:044db69712362b221b618e",
    measurementId: "G-WM09L81C4S",
    userId: "18Dli3WGbKa79i1bhQPjMw3irSl2"
};

export const app = initializeApp(firebaseConfig);

