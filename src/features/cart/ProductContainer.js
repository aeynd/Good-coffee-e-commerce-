import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as productApi from "../../apis/product-api";
import { CartContext } from "../../contexts/CartContext";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";

export default function ProductContainer() {
  const [products, setProducts] = useState([]);
  const { authenticatedUser, setOpen } = useAuth();

  const { handleAddToCart } = useCart(CartContext);

  // const addToCart = async productId => {
  //   await productApi.productInCart(productId);
  //   console.log(addToCart);
  // };

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await productApi.getAllProduct();
      setProducts(res.data.products);
    };
    fetchProduct();
  }, []);

  const handleClickAddToCart = productId => {
    if (authenticatedUser) {
      handleAddToCart(productId);
    } else {
      setOpen(true);
    }
  };

  console.log(products);

  return (
    <>
      <div className="px-2 sm:px-6 pt-6 ">
        <div className="flex justify-center font-Roboto font-light text-7xl">
          <p>BEANS</p>
        </div>
        <hr className="m-6 sm:mx-auto dark:border-gray-700 " />

        <div className=" flex justify-end  border-gray-400 pr-12">
          {/* <input
            type="text"
            placeholder="Search here :)"
            className="rounded-xl"
          /> */}
        </div>
      </div>

      {products.map(el => (
        <div className=" ">
          <div
            className=" flex justify-center  mt-5 gap-5 mx-5 p-10 "
            key={el.id}
          >
            <div className=" flex flex-col  max-w-xs">
              <Link to={`/shop/${el.id}`}>
                <img className="flex items-center" src={el.image} />
              </Link>
              <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
                  {el.title}
                </h5>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900 ">
                    {el.price}$
                  </span>

                  <button
                    onClick={() => {
                      handleClickAddToCart(el.id);
                    }}
                    className="text-white bg-gray-400 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1 text-center"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      ))}
    </>
  );
}
