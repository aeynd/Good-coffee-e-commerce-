import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as productApi from "../apis/product-api";
import { CartContext } from "../contexts/CartContext";
import useCart from "../hooks/useCart";

export default function ProductInfo() {
  const [products, setProducts] = useState({});
  const { handleClickInc, handleClickDec, handleAddToCart } =
    useCart(CartContext);

  const handleClickAddToCart = productId => {
    handleAddToCart(productId);
  };

  const handleClickIncProduct = cartId => {
    handleClickInc(cartId);
  };

  const handleClickDecProduct = cartId => {
    handleClickDec(cartId);
  };

  const params = useParams();

  useEffect(() => {
    const fetchProductInfo = async () => {
      const res = await productApi.productInfo(params.productId);
      setProducts(res.data.products);
    };
    fetchProductInfo();
  }, [params.productId]);

  console.log(products);

  return (
    <>
      <div className="px-2 sm:px-6 pt-6 ">
        <div className="flex justify-center font-Roboto font-light text-7xl">
          <p>BEANS</p>
        </div>
        <hr className="m-6 sm:mx-auto dark:border-gray-700 " />

        <div className="flex justify-center gap-8">
          <div className="flex flex-col">
            <div className="flex justify-center">
              <img className="w-52" src={products.image} />
            </div>
            <div className="">
              <p className="text-xs text-gray-400">Quantity</p>
            </div>
            <div className="flex justify-center mt-2">
              <button className="w-5" onClick={handleClickDecProduct()}>
                -
              </button>
              <button className="w-5" onClick={handleClickIncProduct()}>
                +
              </button>
            </div>
            <div className="mt-5 ">
              <button
                className="text-xs text-white p-1 w-full bg-lime-900 rounded-md"
                onClick={handleClickAddToCart()}
              >
                Add to cart
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-1/3">
            <p>{products.Roaster?.title}</p>
            <p>{products.title}</p>
            <span>{products.price}$</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              pellentesque mauris lectus, ac pulvinar quam rhoncus quis. Vivamus
              dapibus consectetur felis eget tincidunt. Vestibulum placerat
              purus eget enim eleifend iaculis. Duis fermentum justo id ornare
              lobortis. Duis ultrices, eros non tempus condimentum, mauris nibh
              pellentesque mi, sed sodales mauris arcu nec neque. Integer id
              dapibus neque. Nulla facilisi. Nullam tempor felis neque. Praesent
              non tincidunt tortor, sit amet pretium mauris.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              pellentesque mauris lectus, ac pulvinar quam rhoncus quis. Vivamus
              dapibus consectetur felis eget tincidunt. Vestibulum placerat
              purus eget enim eleifend iaculis. Duis fermentum justo id ornare
              lobortis. Duis ultrices, eros non tempus condimentum, mauris nibh
              pellentesque mi, sed sodales mauris arcu nec neque. Integer id
              dapibus neque. Nulla facilisi. Nullam tempor felis neque. Praesent
              non tincidunt tortor, sit amet pretium mauris.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
