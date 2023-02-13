import { createContext, useState } from "react";
import * as cartApi from "../apis/cart-api";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  // function getProductCart(items) {
  //   const newList = [...cart];
  //   newList.push(items);
  //   setCart(newList);
  // }

  const handleAddToCart = async productId => {
    await cartApi.addToCart(productId);
  };

  const handleClickInc = async cartId => {
    await cartApi.updateIncCart(cartId);
  };

  const handleClickDec = async cartId => {
    await cartApi.updateDecCart(cartId);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleAddToCart,
        handleClickInc,
        handleClickDec
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
