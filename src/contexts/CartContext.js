import { createContext, useState, useEffect } from "react";
import * as cartApi from "../apis/cart-api";


export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  // const fetchCart = async () => {
  //   try {
  //     const res = await cartApi.getAllItemInCart();
  //     setCart(res.data.carts);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   fetchCart();
  // }, []);

  const handleAddToCart = async productId => {
    await cartApi.addToCart(productId);
  };

  const handleClickInc = async cartId => {
    await cartApi.updateIncCart(cartId);
  };

  const handleClickDec = async cartId => {
    await cartApi.updateDecCart(cartId);
  };

  const handleClickDel = async cartId => {
    console.log(cartId);
    await cartApi.deleteProductInCart(cartId);
  };



  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleAddToCart,
        handleClickInc,
        handleClickDec,
        handleClickDel,
      
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
