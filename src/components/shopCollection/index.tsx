import { CartCal, CartRow } from "../../ui/cart/Cart";
import CartHeader from "../../ui/cart/CartHeader";
import MainContainer from "../../ui/MainContainer";

export default function ShopCollection() {
  return (
    <MainContainer className="~mt-8/20 border-2">
      <CartHeader title="shop collection" />
      <div className="flex flex-col grid-rows-2 sm:h-[650px] gap-8 mb-20 sm:grid sm:grid-cols-2">
        <CartCal src="/images/headphone-01.png" title="headphone" />
        <CartRow src="/images/headphone-03.png" title="headphone" />
        <CartRow src="/images/headphone-01.png" title="headphone" />
      </div>
    </MainContainer>
  );
}
