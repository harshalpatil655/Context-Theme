import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { TheameContext } from "../Context/TheameContext";
import WishList from "./WishList";

const Navbar = () => {
  const { isAuthorised, login, logout } = useContext(AuthContext);
  const { isLight, toggleTheame } = useContext(TheameContext);
  return (
    <div>
      Navbar
      <button
        onClick={() => {
          if (isAuthorised) {
            logout();
          } else {
            login("R", "z");
          }
        }}
      >
        {isAuthorised ? "Logout" : "Login"}
      </button>
      <button onClick={toggleTheame}>{`Make ${
        isLight ? "Dark" : "Light"
      }`}</button>
      <WishList />
    </div>
  );
};

export default Navbar;
