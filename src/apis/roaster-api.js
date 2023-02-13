import axios from "../config/axios";

export const getAllRoaster = () => axios.get('/roaster/roasters')