import Featured from "../../components/featured";
import Hero from "../../components/heroSection";
import ShopCollection from "../../components/shopCollection";
import BestSeller from "../../components/bestSellers/";

function index() {
  return (
    <div>
      <Hero />
      <Featured />
      <ShopCollection />
      <BestSeller />
    </div>
  );
}

export default index;
