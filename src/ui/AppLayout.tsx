import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div>
      <Header />

      <main className="bg-red-300 h-[1200px]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
