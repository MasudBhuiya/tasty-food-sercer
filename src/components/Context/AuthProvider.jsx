import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app);
const provider = new GoogleAuthProvider;
const githubProvider = new GithubAuthProvider;

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    
    const registerUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleUser = ()=>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }
    const githubUser = ()=>{
        return signInWithPopup(auth, githubProvider);
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser=>{
            setUser(loggedUser)
            setLoading(false)
        })
        return ()=> unsubscribe;
    },[])

    const authInfo={
        user,loading , registerUser, loginUser, googleUser, githubUser, logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;