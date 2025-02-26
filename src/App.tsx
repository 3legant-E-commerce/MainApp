import { RouterProvider } from "react-router-dom";
import { PublicRouter } from "./config/router/public";
import { NextUIProvider } from "@nextui-org/react";
import { Suspense, useEffect } from "react";
import { Loading } from "./ui/Loading";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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

        <Suspense fallback={<Loading />}>
          <RouterProvider router={PublicRouter} />
        </Suspense>
      </NextUIProvider>
    </QueryClientProvider>
  );
}

export default App;
