import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

export default function AppLayout() {
  return (
    <div>
      <Header />

      <main className="h-[3000px]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
