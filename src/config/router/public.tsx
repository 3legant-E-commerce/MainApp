import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../../ui/AppLayout";
import PageNotFound from "../../ui/PageNotFound";

// Pages:
import Landing from "../../pages/landing.tsx";
import Product from "../../pages/product.tsx";
import Shop from "../../pages/shop.tsx";
import SignUp from "../../pages/signUp.tsx";
import SignIn from "../../pages/signIn.tsx";

export const PublicRouter = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
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
