import { RouterProvider } from "react-router-dom";
import { PublicRouter } from "./config/router/public";
import { NextUIProvider } from "@nextui-org/react";
import { Suspense } from "react";
import { Loading } from "./ui/Loading";
import { Toaster } from "react-hot-toast";

function App() {
  return (
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
            backgroundColor: "var(--color-grey-0)",
            color: "var(color-grey-800)",
          },
        }}
      />
      <Suspense fallback={<Loading />}>
        <RouterProvider router={PublicRouter} />
      </Suspense>
    </NextUIProvider>
  );
}

export default App;
