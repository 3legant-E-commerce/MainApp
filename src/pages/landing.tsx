import Featured from "../components/featured";
import Hero from "../components/heroSection";
import ShopCollection from "../components/shopCollection";
import BestSeller from "../components/bestSellers";
import Promotion from "../components/promotion";
import BenefitsCards from "../components/benefitsCards";
import Instagram from "../components/instagram";
import ScrollToTop from "../ui/ScrollToTop";

function Landing() {
  return (
    <>
      <Hero />
      <Featured />
      <ShopCollection />
      <BestSeller />
      <Promotion />
      <BenefitsCards />
      <Instagram />
      <ScrollToTop />
    </>
  );
}

export default Landing;
