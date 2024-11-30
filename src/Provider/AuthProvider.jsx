import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, {createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email,password)
    }
    const signOutUser = () => {
        return signOut(auth)
    }
    const signInGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }
    const signInGithub = () => {
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider)
    }
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, newUser => {
            setUser(newUser)
            setLoading(false)
            if(newUser)
            {
                axios.post('http://localhost:3000/jwt',loggedUser, { withCredentials: true })
                .then(res => console.log(res.data))
            } 
            else{
                axios.post('http://localhost:3000/logOut', loggedUser, {withCredentials: true})
                .then(res => console.log(res.data))
            }
        })
        return () => {unSubscribe}
    },[])
    const authInfo = {
        user,
        setUser,
        loading,
        signUpUser,
        signInUser,
        signOutUser,
        signInGoogle,
        signInGithub,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;