import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NextUIProvider } from "@nextui-org/react";
import { Suspense, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Pages
import { Loading } from "./ui/Loading";
import AppLayout from "./ui/AppLayout";
import Landing from "./pages/landing";
import Product from "./pages/ProductPage";
import Shop from "./pages/Shop";
import Cart from "./components/cartPage";
import Account from "./components/account/Account";
import Dashboard from "./components/cartPage/CheckOutCart";
import Address from "./components/account/Address";
import Orders from "./components/account/Orders";
import WishList from "./components/account/WishList";
import PageNotFound from "./ui/PageNotFound";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log(
              "Service Worker registered with scope:",
              registration.scope
            );
          })
          .catch((error) => {
            console.log("Service Worker registration failed:", error);
          });
      });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen />

      <NextUIProvider>
        <Suspense fallback={<Loading />}>
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Navigate replace to="landing" />} />
                <Route path="landing" element={<Landing />} />
                <Route path="product" element={<Product />} />
                <Route path="shop" element={<Shop />} />
                <Route path="cart" element={<Cart />} />

                <Route path="account" element={<Account />}>
                  <Route index element={<Navigate replace to="dashboard" />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="address" element={<Address />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="wishlist" element={<WishList />} />
                </Route>
              </Route>

              <Route path="*" element={<PageNotFound />} />
              <Route path="login" element={<Login />} />
              <Route path="signUp" element={<SignUp />} />
            </Routes>
          </BrowserRouter>
        </Suspense>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--neutral-03)",
              color: "var(color-grey-800)",
            },
          }}
        />
      </NextUIProvider>
    </QueryClientProvider>
  );
}

export default App;
