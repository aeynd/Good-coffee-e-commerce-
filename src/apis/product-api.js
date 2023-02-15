import axios from "../config/axios";

export const getAllProduct = () => axios.get("/product/product");
export const productInfo = productId =>
  axios.get(`/product/shop/${productId} `);

export const productInCart = productId =>
  axios.post(`/shop/${productId}`);
