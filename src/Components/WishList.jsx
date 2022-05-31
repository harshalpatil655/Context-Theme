import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const WishList = () => {
  const { count } = useContext(CartContext);
  return <div>WishList: {count}</div>;
};

export default WishList;
