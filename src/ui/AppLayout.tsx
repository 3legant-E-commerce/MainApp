import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div>
      <Header />

      <main className="bg-slate-300 h-[1800px]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
