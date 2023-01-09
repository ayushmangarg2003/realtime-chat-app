import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBzxVR97wWUU3OxJ5h0t8TOpDZ82IZDWwQ",
    authDomain: "chat-7afac.firebaseapp.com",
    projectId: "chat-7afac",
    storageBucket: "chat-7afac.appspot.com",
    messagingSenderId: "43240501833",
    appId: "1:43240501833:web:34c277a3cbb4dbba36c598"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()