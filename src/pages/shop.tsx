import MainShop from "../components/shop/MainShop";
import ShopHeader from "../components/shop/ShopHeader";
import MainContainer from "../ui/MainContainer";
import AddShop from "./AddShop";

export default function Shop() {
  return (
    <MainContainer className="mt-20">
      <ShopHeader />

      <AddShop />

      <MainShop />
    </MainContainer>
  );
}
