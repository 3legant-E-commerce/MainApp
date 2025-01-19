import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import ScrollToTop from "./ScrollToTop";

export default function AppLayout() {
  return (
    <div>
      <Header />

      <main className="mb-16">
        <Outlet />
      </main>

      <ScrollToTop />

      <Footer />
    </div>
  );
}
