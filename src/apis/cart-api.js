import axios from "../config/axios";

export const getAllItemInCart = () => axios.get("/cart/itemincart");

export const addToCart = productId => axios.post("cart/addtocart", { productId });

export const updateIncCart = cartId => axios.patch("/cart/updateinccart", { cartId });

export const updateDecCart = cartId => axios.patch("/cart/updatedeccart", { cartId });

export const deleteProductInCart = cartId => axios.delete(`/cart/${cartId}`);

export const getSlipImg = () => axios.get("/cart/payment");
