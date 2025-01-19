import Button from "../../ui/Button";
import { ShopCartView1, ShopCartView2 } from "../../ui/cart/Carts";
import CartHeader from "../../ui/cart/CartHeader";
import MainContainer from "../../ui/MainContainer";

import data from "../../../data/cart.json";
import { useState } from "react";

export default function BestSeller() {
  const cart = data.carts;
  const [cartView] = useState(4);

  return (
    <section>
      <MainContainer className="~mt-12/24">
        <CartHeader title="best seller" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {cart.slice(0, cartView).map((item) => (
            <ShopCartView1
              key={item.id}
              detail={item.detail}
              discount={item.discount}
              src={item.src}
              title={item.title}
              rating={item.rating}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </MainContainer>
    </section>
  );
}
