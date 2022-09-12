import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
//! Firebase is Google’s mobile application development platform that helps you build, improve, and grow your app.

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

//! initialize firebase
const app = initializeApp(firebaseConfig);
//! initialize Firebase authentication and get a reference to the service
export const auth = getAuth();

export const createUser = async (email, password, navigate, displayName) => {
    try {
        //!a firebase method to create new user
        let userCredential = await createUserWithEmailAndPassword(auth, email, password);
        //! a firebase method to update user profile
        await updateProfile(auth.currentUser, {
            displayName: displayName,
        });
        navigate("/");
    }catch(err){
        alert(err.message);
    }
};

export const signIn = async(email, password, navigate) => {
   try  {
       //! a firebase method for sign in
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

// export const userObserver = (setCurrentUser) => {
    //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
//   onAuthStateChanged(auth, (currentUser) => {
//     if (currentUser) {
//       setCurrentUser(currentUser);
//     } else {
       // User is signed out
//       setCurrentUser(false);
//     }
//   });
// }

//! enabling log in with google
export const signUpProvider = (navigate) => {
    //! this is for google 
    const provider = new GoogleAuthProvider();
    //! this is for pop up window
    signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result);
        navigate("/");
    })
    .catch((error) => {
        console.log(error);
    });
}
