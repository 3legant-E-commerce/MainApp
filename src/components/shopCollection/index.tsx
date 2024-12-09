import { CartCol, CartRow } from "../../ui/cart/Cart";
import CartHeader from "../../ui/cart/CartHeader";
import MainContainer from "../../ui/MainContainer";

export default function ShopCollection() {
  return (
    <MainContainer className="~mt-8/20">
      <CartHeader title="shop collection" />

      <div className="flex flex-col grid-rows-2 md:h-[600px] sm:h-[400px] gap-8 mb-20 sm:grid sm:grid-cols-2">
        <CartCol src="/images/headphone-01.png" title="headphone" />
        <CartRow src="/images/headphone-03.png" title="headphone" />
        <CartRow src="/images/headphone-01.png" title="headphone" />
      </div>
    </MainContainer>
  );
}
