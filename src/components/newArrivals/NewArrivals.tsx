import Cart from "../../ui/cart/Cart";
import CartHeader from "../../ui/cart/CartHeader";
import CartPlan from "../../ui/cart/CartPlan";
import CartTitle from "../../ui/cart/CartTitle";
import MainContainer from "../../ui/MainContainer";

export default function NewArrivals() {
  return (
    <MainContainer className="~mt-8/20 border-2 border-black">
      <CartHeader title="new arrivals" />

      <Cart className="flex-col px-8">
        <CartPlan text="hot" />

        <img
          src="../../../public/images/headphone-01.png"
          className="self-center h-2/3"
          alt="headband"
        />

        <CartTitle title="headphone" />
      </Cart>
    </MainContainer>
  );
}
