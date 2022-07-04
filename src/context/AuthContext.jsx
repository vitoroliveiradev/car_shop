import { useContext, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children, value }) => {
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

// Hook para usar o contexto;
export const useAuthValue = () => {
  return useContext(AuthContext);
}