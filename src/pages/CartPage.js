import React, { useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import useCart from "../hooks/useCart";
import * as cartApi from "../apis/cart-api";

export default function CartPage() {
  const [productInCart, setProductInCart] = useState([]);
  const { handleClickInc, handleClickDec } = useCart(CartContext);

  const fetchCart = async () => {
    try {
      const res = await cartApi.getAllItemInCart();
      setProductInCart(res.data.carts);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchCart();
  }, []);

  const handleClickIncProduct = cartId => {
    handleClickInc(cartId);
    fetchCart();
  };

  const handleClickDecProduct = cartId => {
    handleClickDec(cartId);
    fetchCart();
  };
  console.log(productInCart);

  return (
    <>
      <div className="px-2 sm:px-6 pt-6 ">
        <div className="flex justify-center font-Roboto font-light text-7xl">
          <p>CART</p>
        </div>
        <hr className="m-6 sm:mx-auto dark:border-gray-700 " />
        <div className="flex justify-center font-Roboto ">
          <div className="flex flex-col w-1/2 bg-gray-50">
            <div className=" font-medium m-5">
              <p>Your cart</p>
            </div>
            <hr />
            <div className="flex justify-between text-xs text-gray-400 m-5">
              <span>PRODUCT</span>
              <span>TOTAL</span>
            </div>
            <div>
              <hr className="sm:mx-auto dark:border-gray-700 " />
            </div>

            {productInCart.map(el => (
              <div className="flex justify-between mx-5" key={el.id}>
                <div className="flex">
                  <div>
                    <img className="w-52" src={el.Product?.image} />
                  </div>
                  <div className="flex flex-col w-full gap-5 justify-center">
                    <p>{el.Product.title}</p>
                    <p>{el.Product.price}$</p>
                    <div className=" ">
                      <button
                        className="w-10"
                        onClick={() => {
                          handleClickDecProduct(el.id);
                        }}
                      >
                        -
                      </button>
                      <span className="w-full">{el.amount}</span>
                      <button
                        className="w-10"
                        onClick={() => {
                          handleClickIncProduct(el.id);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex  ml-36 ">
                    <p className="flex items-center">{`${
                      el.Product.price * el.amount
                    }`}</p>
                  </div>
                </div>
              </div>
            ))}

            <div>
              <hr className="m-6 sm:mx-auto dark:border-gray-700 " />
            </div>
            <div>
              <div className=" flex justify-between text-sm text-gray-400 m-5">
                <span>Total</span>
                <span>Sum</span>
              </div>
              <div className="flex justify-center font-Roboto">
                <button className="text-white text-sm bg-black rounded-lg p-1">
                  Checkout
                </button>
              </div>
            </div>
            <hr className="m-6 sm:mx-auto dark:border-gray-700 " />
          </div>
        </div>
      </div>
    </>
  );
}
