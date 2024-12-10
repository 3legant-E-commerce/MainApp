import Featured from "../../components/featured";
import Hero from "../../components/heroSection";
import ShopCollection from "../../components/shopCollection";
import BestSeller from "../../components/bestSellers";
import Promotion from "../../components/promotion";
import BenefitsCards from "../../components/benefitsCards";

function index() {
  return (
    <div>
      <Hero />
      <Featured />
      <ShopCollection />
      <BestSeller />
      <Promotion />
      <BenefitsCards />
    </div>
  );
}

export default index;
