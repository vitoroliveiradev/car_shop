import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth"
import { useAuthentication } from "./hooks/useAuthentication";

export const App = () => {
  const [user, setUser] = useState(undefined);

  const { auth } = useAuthentication();
  
  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      console.log(user);
      setUser(user)
    })
  }, [auth])


  if(loadingUser) {
    return <p>Carregando...</p>
  }

  console.log(auth)

  return (
    <div>
      <AuthProvider value={{user}}>
        <BrowserRouter>
          <Navbar />
          <Router />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}