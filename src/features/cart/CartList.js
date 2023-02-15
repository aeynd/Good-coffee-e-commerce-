import { CartContext } from "../../contexts/CartContext";
import useCart from "../../hooks/useCart";
import * as cartApi from "../../apis/cart-api";
import { useEffect, useState } from "react";

export default function CartList() {
  const [productInCart, setProductInCart] = useState([]);
  const { handleClickInc, handleClickDec, handleClickDel } =
    useCart(CartContext);

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

  console.log(productInCart);

  return (
    <>
      {productInCart.map(el => (
        <div className="flex justify-between mx-5" key={el.id}>
          <div className="flex">
            <div className="">
              <img className="w-[100px] h-[200]" src={el.Product?.image} />
            </div>
            <div className="flex flex-col gap-5 justify-center">
              <p>{el.Product.title}</p>
              <p>{el.Product.price}$</p>
              <div className=" flex items-center">
                <button
                  className="flex w-10"
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
              <div>
                <button
                  className="flex items-center"
                  onClick={() => {
                    handleClickDelProduct(el.id);
                  }}
                >
                  remove
                </button>
              </div>
            </div>

            <div className="flex justify-end ml-36 ">
              <p className="flex items-center">
                {`${el.Product.price * el.amount}`}$
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
              (acc, product) => acc + product.Product.price * product.amount,
              0
            )}`}
            $
          </span>
        </div>
        
       
      </div>
    </>
  );
}
