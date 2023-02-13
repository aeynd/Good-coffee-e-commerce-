import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import CartPage from "../pages/CartPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import ProductInfo from "../pages/ProductInfo";
import ProfilePage from "../pages/ProfilePage";
import RoasterPage from "../pages/RoasterPage";   
import ShopPage from "../pages/ShopPage";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/shop",
        element: <ShopPage />
      },
      {
        path: '/shop/:productId',
        element: <ProductInfo/>
      }
      ,
      {
        path: "/roaster",
        element: <RoasterPage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: "/profile",
        element: <ProfilePage />
      },
      {
        path: "/cart",
        element: <CartPage />
      }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
