import { onAuthStateChanged } from "firebase/auth";
import { createContext, useLayoutEffect, useState } from "react";
import { auth } from "../auth/firebase";

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    // currentUser will come from userObserver method of firebase
    // it checks always, if there is any change it works

    

    return (
        <AuthContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider