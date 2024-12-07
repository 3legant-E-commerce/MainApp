import Featured from "../../components/featured/Featured";
import Hero from "../../components/heroSection/Hero";
import NewArrivals from "../../components/newArrivals/NewArrivals";

function index() {
  return (
    <div>
      <Hero />
      <Featured />
      <NewArrivals />
    </div>
  );
}

export default index;
