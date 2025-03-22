import MainShop from "../components/shop/MainShop";
import ShopHeader from "../components/shop/ShopHeader";
import MainContainer from "../ui/MainContainer";
import AddShop from "./AddShop";

export default function Shop() {
  return (
    <MainContainer className="~pt-20/10 bg-bg-color dark:bg-grey-900">
      <ShopHeader />

      <AddShop />

      <MainShop />
    </MainContainer>
  );
}
