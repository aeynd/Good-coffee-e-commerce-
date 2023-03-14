import axios from "../config/axios";

export const register = input => axios.post("/auth/register", input);
export const login = input => axios.post("/auth/login", input);
export const getMe = () => axios.get("/auth/me");
export const paymentImg = input => axios.post("/auth/payment", input);
export const createProduct = input => axios.post("/product/postproduct", input);

export const statusChange = input => axios.patch("/auth/statusUpdate", input);
