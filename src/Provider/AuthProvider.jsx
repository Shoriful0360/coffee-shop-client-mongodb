import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../Firebase/firebase.init";

export const authContext=createContext(null)
const AuthProvider = ({children}) => {

    const [user,setUser]=useState()
    const [loading,setLoading]=useState(true)

const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
    
}

const userLogin=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}


    const info={
        createUser,user,setUser,userLogin
    }
    return (
        <div>
            <authContext.Provider value={info}>

             {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;