import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app)

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    
    const registerUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser=>{
            setUser(loggedUser)
        })
        return ()=> unsubscribe;
    },[])

    const authInfo={
        user, registerUser, loginUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;