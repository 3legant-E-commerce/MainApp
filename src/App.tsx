import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";

// // PAGES
// import Landing from "./pages/landing";
// import Login from "./pages/Login";
// import SignUp from "./pages/signUp";
// import Product from "./pages/ProductPage";
// import Shop from "./pages/Shopping";

// Lazy-loaded pages
const Landing = lazy(() => import("./pages/landing"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/signUp"));
const Product = lazy(() => import("./pages/ProductPage"));
const Shop = lazy(() => import("./pages/Shopping"));

// COMPONENTS
import Account from "./components/account/Account";
import Address from "./components/account/Address";
import Orders from "./components/account/Orders";
import WishList from "./components/account/WishList";
import Cart from "./components/cartPage";
import Dashboard from "./components/cartPage/Dashboard";

import AppLayout from "./ui/AppLayout";
import { Loading } from "./ui/Loading";
import PageNotFound from "./ui/PageNotFound";
import ScrollOnTop from "./ui/ScrollOnTop";

// SERVICE WORKER
import ServiceWorker from "./ui/ServiceWorker";
import ProtectedRoute from "./ui/ProtectedRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <HeroUIProvider>
        <ServiceWorker />
        <BrowserRouter>
          <ScrollOnTop />
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route
                index
                element={
                  <Suspense fallback={<Loading />}>
                    <Landing />
                  </Suspense>
                }
              />
              <Route
                path="landing"
                element={
                  <Suspense fallback={<Loading />}>
                    <Landing />
                  </Suspense>
                }
              />
              <Route
                path="product/:shopId"
                element={
                  <Suspense fallback={<Loading />}>
                    <Product />
                  </Suspense>
                }
              />
              <Route
                path="shop"
                element={
                  <Suspense fallback={<Loading />}>
                    <Shop />
                  </Suspense>
                }
              />
              <Route
                path="cart"
                element={
                  <Suspense fallback={<Loading />}>
                    <Cart />
                  </Suspense>
                }
              />
              <Route
                path="cart/:shopId"
                element={
                  <Suspense fallback={<Loading />}>
                    <Cart />
                  </Suspense>
                }
              />

              <Route path="account" element={<Account />}>
                <Route index element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="address" element={<Address />} />
                <Route path="orders" element={<Orders />} />
                <Route path="wishlist" element={<WishList />} />
              </Route>
            </Route>

            <Route path="*" element={<PageNotFound />} />
            <Route
              path="login"
              element={
                <Suspense fallback={<Loading />}>
                  <Login />
                </Suspense>
              }
            />
            <Route
              path="signUp"
              element={
                <Suspense fallback={<Loading />}>
                  <SignUp />
                </Suspense>
              }
            />
          </Routes>
        </BrowserRouter>

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
              color: "var(--color-grey-800)",
            },
          }}
        />
      </HeroUIProvider>
    </QueryClientProvider>
  );
}

export default App;
