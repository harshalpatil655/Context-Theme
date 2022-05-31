import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export const Cart = () => {
  const { count, setCount } = useContext(CartContext);
  return (
    <div>
      Cart
      <button onClick={() => setCount(count + 1)}>Add to cart</button>
    </div>
  );
};
