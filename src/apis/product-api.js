import axios from "../config/axios";

export const getAllProduct = () => axios.get("/product/product");
export const productInfo = productId => axios.get(`/product/shop/${productId} `);

export const productInCart = productId => axios.post(`/shop/${productId}`);
export const updateProduct = (productId,input )=> axios.patch(`/product/${productId}`,input)
export const deleteProduct = productId => axios.delete(`/product/${productId}`);
