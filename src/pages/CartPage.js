import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import CartList from "../features/cart/CartList";
import * as authApi from "../apis/auth-api";
import useCart from "../hooks/useCart";
import { CartContext } from "../contexts/CartContext";
import * as cartApi from "../apis/cart-api";

export default function CartPage() {
  const [productInCart, setProductInCart] = useState([]);
  const { handleClickInc, handleClickDec, handleClickDel } =
    useCart(CartContext);
  const [file, setFile] = useState(null);
  const inputEl = useRef();

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

  const handleClickDelProduct = cartId => {
    handleClickDel(cartId);
    fetchCart();
  };

  const handleClickUpload = async () => {
    const formData = new FormData();
    formData.append("paymentImg", file);
    await authApi.paymentImg(formData);
    setFile(null);
    console.log(formData);
  };


  // const checkoutAlert = () => {
  //   alert("sdfher")
  // }

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
              <div className="flex justify-between w-full mx-5" key={el.id}>
                <div className="flex">
                  <div className="">
                    <img
                      className="p-2 w-[150px] h-[300]"
                      src={el.Product?.image}
                    />
                  </div>
                  <div className="flex flex-col ml-3 gap-5 justify-center w-[360px]">
                    <p className="flex justify-center">{el.Product.title}</p>
                    <p className="flex justify-center">{el.Product.price} $</p>
                    <div className=" flex items-center">
                      <button
                        className="w-10 flex justify-center bg-black text-white rounded-sm"
                        onClick={() => {
                          handleClickDecProduct(el.id);
                        }}
                      >
                        -
                      </button>
                      <span className="flex justify-center w-full">
                        {el.amount}
                      </span>
                      <button
                        className="w-10 flex justify-center bg-black text-white rounded-sm"
                        onClick={() => {
                          handleClickIncProduct(el.id);
                        }}
                      >
                        +
                      </button>
                    </div>
                    <div className="w-full flex justify-center">
                      <button
                        className="flex justify-center items-center w-24 rounded-md p-1  bg-red-900 text-white text-sm"
                        onClick={() => {
                          handleClickDelProduct(el.id);
                        }}
                      >
                        remove
                      </button>
                    </div>
                  </div>

                  <div className="flex ml-36 ">
                    <p className="flex items-center">
                      {`${el.Product.price * el.amount}`} $
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div>
              <hr className="m-6 sm:mx-auto dark:border-gray-700 " />
            </div>
            <div>
              <div className=" flex justify-between text-sm  m-5">
                <span>Total</span>
                <span>
                  {`${productInCart.reduce(
                    (acc, product) =>
                      acc + product.Product.price * product.amount,
                    0
                  )}`}
                  $
                </span>
              </div>
            </div>
            <div>
              <hr className="m-6 sm:mx-auto dark:border-gray-700 " />
            </div>
            <div className=" h-[500px] flex flex-col justify-center items-center">
              <div>
                <p className="mb-10">
                  Please upload your slip payment before checkout!
                </p>
              </div>
              <img
                className="w-[235px] h-[301px]"
                src="https://res.cloudinary.com/dxurpn0lb/image/upload/v1676383027/personal%20project/slip_vmsc6v.jpg"
              />
              <div className=" flex items-center p-2 ">
                <input
                  type="file"
                  ref={inputEl}
                  className="text-white text-sm m-1 bg-black rounded-lg p-1 "
                  onChange={e => {
                    setFile(e.target.files[0]);
                  }}
                />
                <button
                  type="button"
                  className="text-white h-12 text-sm m-1 bg-black rounded-lg p-1 "
                  onClick={handleClickUpload}
                >
                  Upload
                </button>
              </div>
            </div>

            <div className="flex justify-center flex-col font-Roboto">
              <Link to="/">
                <button
                  type="button"
                  className="text-white w-full text-sm mb-3 bg-black rounded-lg p-1"
                  // onClick={checkoutAlert}
                >
                  CHECKOUT
                </button>
              </Link>
            </div>

            <hr className="m-6 sm:mx-auto dark:border-gray-700 " />
          </div>
        </div>
      </div>
    </>
  );
}
