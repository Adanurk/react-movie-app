import { createContext, useState } from "react";

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    // it checks always, if there is any change it works

    return (
        <AuthContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider