import { RouterProvider } from "react-router-dom";
import { PublicRouter } from "./config/router/public";
import { NextUIProvider } from "@nextui-org/react";
import { Suspense } from "react";

function App() {
  return (
    <NextUIProvider>
      <Suspense fallback={<h1>loading ...</h1>}>
        <RouterProvider router={PublicRouter} />
      </Suspense>
    </NextUIProvider>
  );
}

export default App;
