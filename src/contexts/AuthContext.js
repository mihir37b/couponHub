import React, { useContext, useState, useEffect } from 'react'
import {auth} from '../firebase'

const AuthContext = React.createContext();

export function useAuth(){
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function login(email, password){
    auth.signInWithEmailAndPassword(email, password)
  }

  function logout(){
    return auth.signOut()
  }
  function resetPassword(email){
    return auth.sendPasswordResetEmail(email)
  }

  function signup(email, password){
    auth.createUserWithEmailAndPassword(email, password)
  }
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(user=>{
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  },[])
 

  const value = {
    currentUser,
    login,
    logout,
    signup,
    resetPassword
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
