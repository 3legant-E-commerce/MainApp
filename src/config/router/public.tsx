import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../../ui/AppLayout";
import PageNotFound from "../../ui/PageNotFound";
// import { Loading as menuLoader } from "../../ui/Loading";

// Pages:
// const Error = lazy(() => import("../../ui/Error"));
const LandingPage = lazy(() => import("../../pages/landing"));
const Product = lazy(() => import("../../pages/product"));
const Shop = lazy(() => import("../../pages/shop"));
const Order = lazy(() => import("../../pages/order"));
const Cart = lazy(() => import("../../pages/cart"));
const Blog = lazy(() => import("../../pages/blog"));
const Contact = lazy(() => import("../../pages/contact"));
const SignUp = lazy(() => import("../../pages/signUp"));
const SigIn = lazy(() => import("../../pages/signIn"));

export const PublicRouter = createBrowserRouter([
  {
    element: <AppLayout />,
    // errorElement: <Error />,
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
