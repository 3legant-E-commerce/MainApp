import MainShop from "../../components/shop/MainShop";
import ShopHeader from "../../components/shop/ShopHeader";
import MainContainer from "../../ui/MainContainer";

export default function index() {
  return (
    <MainContainer className="mt-20">
      <ShopHeader />
      <MainShop />
    </MainContainer>
  );
}
