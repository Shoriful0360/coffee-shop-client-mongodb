import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";

export const authContext=createContext(null)
const AuthProvider = ({children}) => {
const [coffees,setCoffees]=useState([])
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


useEffect(()=>{
    fetch('http://localhost:5000/coffees')
    .then(res=>res.json())
    .then(data=>setCoffees(data))
},[])

    const info={
        createUser,user,setUser,userLogin,coffees,setCoffees
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