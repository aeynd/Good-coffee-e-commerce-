import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
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
        path: "/roaster",
        element: <RoasterPage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
