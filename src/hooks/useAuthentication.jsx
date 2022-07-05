import { db } from "../firebase/config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut
} from "firebase/auth"
import { useState, useEffect } from "react";


export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Cleanup, deal with memory leak.
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  const checkIfIsCancelled = () => {
    if(cancelled) {
      return;
    }
  }

  const createUser = async data => {
    checkIfIsCancelled();
    setError("");
    setLoading(true);

    try {

      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.inputEmail,
        data.inputPassword
      )

      await updateProfile(user, {
        displayName: data.inputName
      })
      setLoading(false);
      return user;

    } catch (err) {
      let systemError;

      if(err.message.includes("email-already")) {
        systemError = "E-mail já cadastrado!"
      } else if(err.message.includes("Password")) {
        systemError = "A senha precisa conter pelo menos 6 caracteres."
      } else {
        systemError = "Ocorreu um erro! Tente novamente mais tarde."
      }
      setError(systemError);
      setLoading(false);
    }
  }

  const logout = () => {
    checkIfIsCancelled();
    signOut(auth)
    console.log("Deslogado!")
  }
  
  const loginUser = async data => {
    checkIfIsCancelled();
    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(
        auth,
        data.inputEmail,
        data.inputPassword
      )
      setLoading(false);
    } catch(err) {
      let systemError;

      if(err.message.includes("user-not-found")) {
        systemError = "Usuário não encontrado!"
      } else if(err.message.includes("wrong-password")) {
        systemError = "Senha incorreta."
      } else {
        systemError = "Ocorreu um erro! Tente novamente mais tarde."
      }
      setError(systemError);
      setLoading(false);
    }
  }

  useEffect(() => {
    return () => setCancelled(true);
  }, [])


  return {
    error,
    loading,
    auth,
    createUser,
    logout,
    loginUser
  }
}