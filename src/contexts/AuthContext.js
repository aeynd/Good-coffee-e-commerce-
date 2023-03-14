import { createContext, useEffect, useState } from "react";
import jwtDecode from 'jwt-decode'
import * as authApi from "../apis/auth-api";
import * as productApi from "../apis/product-api";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken
} from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] = useState(
    getAccessToken() ? true : null
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const res = await authApi.getMe();
        setAuthenticatedUser(res.data.user);
      } catch (err) {
        removeAccessToken();
      }
    };
    if (getAccessToken()) {
      fetchAuthUser();
    }
  }, []);

  const login = async (email, password) => {
    const res = await authApi.login({ email, password });
    setAccessToken(res.data.accessToken);
    setAuthenticatedUser(jwtDecode(res.data.accessToken));
  };

  const logout = () => {
    removeAccessToken();
    setAuthenticatedUser(null);
  };

  // const handleClickDelByAdmin = async productId => {
  //   await productApi.deleteProduct(productId);
  // };

  return (
    <AuthContext.Provider value={{
      login, logout, authenticatedUser, open, setOpen,
      // handleClickDelByAdmin
    }}>
      {children}
    </AuthContext.Provider>
  );
}
