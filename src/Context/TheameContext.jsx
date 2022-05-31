import { createContext, useState } from "react";

export const TheameContext = createContext();

export const TheameProvider = ({ children }) => {
  const [theame, setTheame] = useState("light");

  const toggleTheame = () => {
    if (theame === "light") {
      setTheame("dark");
    } else {
      setTheame("light");
    }
  };

  return (
    <TheameContext.Provider
      value={{
        theame,
        isLight: theame === "light",
        toggleTheame,
      }}
    >
      {children}
    </TheameContext.Provider>
  );
};
