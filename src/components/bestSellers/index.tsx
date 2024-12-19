import Button from "../../ui/Button";
import { CartHover } from "../../ui/cart/Cart";
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
            <CartHover
              src={item.src}
              title={item.title}
              detail={item.detail}
              description={item.description}
              price={item.price}
              rating={item.rating}
              key={item.id}
            >
              <Button className="absolute w-3/4 transition-all duration-1000 transform -translate-x-1/2 translate-y-4 opacity-0 bottom-4 left-1/2 group-hover:opacity-100 group-hover:translate-y-0">
                Add to cart
              </Button>
            </CartHover>
          ))}
        </div>
      </MainContainer>
    </section>
  );
}
