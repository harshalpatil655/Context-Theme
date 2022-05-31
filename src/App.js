import { useContext } from "react";
import "./App.css";
import { Cart } from "./Components/Cart";
import Navbar from "./Components/Navbar";
import { TheameContext } from "./Context/TheameContext";

function App() {
  const { isLight } = useContext(TheameContext);
  return (
    <div className={`App is ${isLight ? "light" : "dark"}`}>
      <Navbar />
      <Cart />
    </div>
  );
}

export default App;
