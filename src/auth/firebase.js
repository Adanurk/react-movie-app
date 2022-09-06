import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBAXUFc8t5Yl5rMmJiVkolo7VOo9A0PiGM",
    authDomain: "movie-app-93dd8.firebaseapp.com",
    projectId: "movie-app-93dd8",
    storageBucket: "movie-app-93dd8.appspot.com",
    messagingSenderId: "337729760577",
    appId: "1:337729760577:web:eed2456671e4a6e69a85c0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const createUser = async (email, password) => {
    try {
        let userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
    }catch(err){
        alert(err.message);
    }
};