import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div className="bg-bg-color">
      <Header />

      <main className="h-[3000px]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
