import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";

export default function AppLayout() {
  return (
    <div>
      <Header />

      <main className="mb-16">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
