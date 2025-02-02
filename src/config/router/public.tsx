import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../../ui/AppLayout";
import PageNotFound from "../../ui/PageNotFound";

// Pages:
import Landing from "../../pages/landing.tsx";
import Product from "../../pages/ProductPage.tsx";
import Shop from "../../pages/shop.tsx";
import SignUp from "../../pages/signUp.tsx";
import SignIn from "../../pages/signIn.tsx";
import Cart from "../../pages/CartPage.tsx";
import Account from "../../pages/AccountPage.tsx";
import Dashboard from "../../components/account/Dashboard.tsx";
import Address from "../../components/account/Address.tsx";
import Orders from "../../components/account/Orders.tsx";
import WishList from "../../components/account/WishList.tsx";

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
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/account",
        element: <Account />,
        children: [
          {
            index: true,
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "address",
            element: <Address />,
          },
          {
            path: "orders",
            element: <Orders />,
          },
          {
            path: "wishlist",
            element: <WishList />,
          },
        ],
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
    path: "/SignIn",
    element: <SignIn />,
  },
]);

// Supabase Pass DJgXtcQS2cTJ1lJs
