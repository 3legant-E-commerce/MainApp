import { CartHover } from "../../ui/cart/Cart";
import CartHeader from "../../ui/cart/CartHeader";
import MainContainer from "../../ui/MainContainer";

export default function BestSeller() {
  return (
    <MainContainer>
      <CartHeader title="best seller" />

      <div className="grid border-2 border-black sm:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        <CartHover src="/images/headphone-01.png" title="airpod" detail="hot" />
      </div>
    </MainContainer>
  );
}
