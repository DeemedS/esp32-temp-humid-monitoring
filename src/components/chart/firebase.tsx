import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "Change to your API",
    authDomain: "Change to your authDomain",
    databaseURL: "Change to your databaseURL",
    projectId: "Change to your projectId",
    storageBucket: "Change to your storageBucket",
    messagingSenderId: "Change to your messagingSenderId",
    appId: "Change to your appId",
    measurementId: "Change to your measurementId",
    userId: "Change to your userId"
};

export const app = initializeApp(firebaseConfig);

