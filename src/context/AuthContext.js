import { createContext, useEffect, useState } from "react";
import { userObserver } from "../auth/firebase";

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();
    // currentUser will come from userObserver method of firebase
    // it checks always, if there is any change it works

    useEffect(()=> {
        userObserver(setCurrentUser)
    }, [])
    // we use it in useEffect so it works in first time we run the app


    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider