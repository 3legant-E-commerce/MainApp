import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// Pages:
const LandingPage = lazy(() => import("../../pages/Landing"));

export const PublicRouter = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
]);
