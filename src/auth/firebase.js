import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const createUser = async (email, password, navigate, displayName) => {
    try {
        let userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, {
            displayName: displayName,
        });
        console.log(userCredential);
        navigate("/");
    }catch(err){
        alert(err.message);
    }
};

export const signIn = async(email, password, navigate) => {
   try  {
       let userCredential = await signInWithEmailAndPassword(auth, email, password);
       navigate("/");
    }catch(err){
        alert(err.message)
    }
}

export const logOut = () => {
    signOut(auth);
    alert("user signed out")
}

export const userObserver = (setCurrentUser) => {
    
}

export const signUpProvider = (navigate) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result);
        navigate("/");
    })
    .catch((error) => {
        console.log(error);
    });
}