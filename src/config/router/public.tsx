import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../../ui/AppLayout";
import PageNotFound from "../../ui/PageNotFound";

// Pages:
const LandingPage = lazy(() => import("../../pages/landing/index.tsx"));
const Product = lazy(() => import("../../pages/product/index.tsx"));
const Shop = lazy(() => import("../../pages/shop/index.tsx"));
const Order = lazy(() => import("../../pages/order/index.tsx"));
const Cart = lazy(() => import("../../pages/cart/index.tsx"));
const Blog = lazy(() => import("../../pages/blog/index.tsx"));
const Contact = lazy(() => import("../../pages/contact/index.tsx"));
const SignUp = lazy(() => import("../../pages/signUp/index.tsx"));
const SigIn = lazy(() => import("../../pages/signIn/index.tsx"));

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
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
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
    element: <SigIn />,
  },
]);
