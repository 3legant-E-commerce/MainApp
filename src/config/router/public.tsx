import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../../ui/AppLayout";
import PageNotFound from "../../ui/PageNotFound";

// Pages:
import LandingPage from "../../pages/landing";
import Product from "../../pages/product";
import Shop from "../../pages/shop";
import SignUp from "../../pages/signUp";
import SignIn from "../../pages/signIn";

export const PublicRouter = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/SigIn",
    element: <SignIn />,
  },
]);
