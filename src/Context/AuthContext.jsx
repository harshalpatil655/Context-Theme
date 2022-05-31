import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthorised, setIsAuthorised] = useState(false);

  const login = (username, password) => {
    if (username && password) {
      setIsAuthorised(true);
    }
  };
  const logout = () => {
    setIsAuthorised(false);
  };
  return (
    <AuthContext.Provider value={{ isAuthorised, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
