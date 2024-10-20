import { RouterProvider } from "react-router-dom";
// Routers:
import { PublicRouter } from "./config/router/public";

function App() {
  return <RouterProvider router={PublicRouter} />;
}

export default App;
