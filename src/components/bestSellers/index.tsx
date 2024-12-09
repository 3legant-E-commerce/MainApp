import { CartHover } from "../../ui/cart/Cart";
import CartHeader from "../../ui/cart/CartHeader";
import MainContainer from "../../ui/MainContainer";

export default function BestSeller() {
  return (
    <MainContainer>
      <CartHeader title="best seller" />

      <div className="grid sm:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        <CartHover
          src="/images/headphone-01.png"
          title="airpod"
          detail="new"
          description="JBL Reflect Flow Pro+ Bluetooth Truly Wireless Sports"
          price={200000}
          rating={4}
        />
        <CartHover
          src="/images/headphone-01.png"
          title="airpod"
          detail="new"
          description="JBL Reflect Flow Pro+ Bluetooth Truly Wireless Sports"
          price={200000}
          rating={4}
        />
        <CartHover
          src="/images/headphone-01.png"
          title="airpod"
          detail="new"
          description="JBL Reflect Flow Pro+ Bluetooth Truly Wireless Sports"
          price={200000}
          rating={4}
        />
        <CartHover
          src="/images/headphone-01.png"
          title="airpod"
          detail="new"
          description="JBL Reflect Flow Pro+ Bluetooth Truly Wireless Sports"
          price={200000}
          rating={4}
        />
        <CartHover
          src="/images/headphone-03.png"
          title="airpod"
          detail="new"
          description="JBL Reflect Flow Pro+ Bluetooth Truly Wireless Sports"
          price={200000}
          rating={4}
        />
        <CartHover
          src="/images/headphone-03.png"
          title="airpod"
          detail="new"
          description="JBL Reflect Flow Pro+ Bluetooth Truly Wireless Sports"
          price={200000}
          rating={4}
        />
        <CartHover
          src="/images/headphone-03.png"
          title="airpod"
          detail="new"
          description="JBL Reflect Flow Pro+ Bluetooth Truly Wireless Sports"
          price={200000}
          rating={4}
        />
        <CartHover
          src="/images/headphone-03.png"
          title="airpod"
          detail="new"
          description="JBL Reflect Flow Pro+ Bluetooth Truly Wireless Sports"
          price={200000}
          rating={4}
        />
      </div>
    </MainContainer>
  );
}
