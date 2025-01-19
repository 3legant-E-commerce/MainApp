import { CartCol, CartRow } from "../../ui/cart/Carts";
import CartHeader from "../../ui/cart/CartHeader";
import MainContainer from "../../ui/MainContainer";

export default function ShopCollection() {
  return (
    <section>
      <MainContainer className="~mt-12/24">
        <CartHeader title="shop collection" />

        <div className="flex flex-col grid-rows-2 md:h-[600px] sm:h-[400px] gap-8 mb-20 sm:grid sm:grid-cols-2">
          <CartCol src="/images/headphone-01.png" title="headphone" />
          <CartRow src="/images/headphone-03.png" title="headphone" />
          <CartRow src="/images/airpod-02.png" title="headphone" />
        </div>
      </MainContainer>
    </section>
  );
}
