import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as productApi from "../apis/product-api";

import { CartContext } from "../contexts/CartContext";
import useCart from "../hooks/useCart";
import useAuth from "../hooks/useAuth";

const initialInput = {
  title: "",
  price: ""
};

export default function ProductInfo() {
  const [products, setProducts] = useState({});
  const [isEditProduct, setIsEditProduct] = useState(initialInput);
  const { handleAddToCart } = useCart(CartContext);
  const navigate = useNavigate();

  const { authenticatedUser } = useAuth();
  console.log(typeof authenticatedUser.role);
  const params = useParams();
  const { productId } = useParams();

  const handleChangeInput = e => {
    setIsEditProduct({ ...isEditProduct, [e.target.name]: e.target.value });
  };

  const handleEditProduct = async e => {
    e.preventDefault();
    try {
      await productApi.updateProduct(productId, isEditProduct);
      navigate("/shop");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchProductInfo = async () => {
      console.log(products);
      const res = await productApi.productInfo(params.productId);
      setProducts(res.data.products);
    };
    fetchProductInfo();
  }, [productId]);

  const handleClickAddToCart = productId => {
    handleAddToCart(productId);
  };

  const handleClickDelByAdmin = async (e, productId) => {
    await productApi.deleteProduct(`${productId}`);
    navigate("/shop");
  };



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
            <div className="mt-5">
              <button
                className="text-sm text-white p-1 w-full bg-lime-900 rounded-md"
                onClick={handleClickAddToCart(params.productId)}
              >
                Add to cart
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-1/3 pl-5">
            <p className="font-semibold">{products.Roaster?.roasterTitle}</p>
            <p>{products.title}</p>
            <p>{products.Category?.catagoryTitle}</p>
            <span>{products.price}$</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque mauris
              lectus, ac pulvinar quam rhoncus quis. Vivamus dapibus consectetur felis eget
              tincidunt. Vestibulum placerat purus eget enim eleifend iaculis. Duis fermentum justo
              id ornare lobortis. Duis ultrices, eros non tempus condimentum, mauris nibh
              pellentesque mi, sed sodales mauris arcu nec neque. Integer id dapibus neque. Nulla
              facilisi. Nullam tempor felis neque. Praesent non tincidunt tortor, sit amet pretium
              mauris.
            </p>
          </div>
          
          {authenticatedUser?.role === "ADMIN" && <div className="flex flex-col">
            <form className="flex flex-col" onSubmit={handleEditProduct}>
              <input
                placeholder="Coffee name"
                name="title"
                value={isEditProduct.title}
                onChange={handleChangeInput}
              />
              <input
                placeholder="price"
                name="price"
                value={isEditProduct.price}
                onChange={handleChangeInput}
              />
              <button
                type="submit"
                className="text-white bg-green-800 font-medium rounded-lg text-sm p-1 text-center mt-1"
              >
                Update !
              </button>
            </form>
            <button
              onClick={e => {
                handleClickDelByAdmin(e, products.id);
              }}
              className="text-white bg-red-800 font-medium rounded-lg text-sm p-1 text-center mt-1 w-52"
            >
              Delete product
            </button>
          </div>}
        </div>
      </div>
    </>
  );
}
