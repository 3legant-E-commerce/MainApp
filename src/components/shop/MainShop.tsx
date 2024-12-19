import { useState } from "react";
import { FilterIcon } from "../../assets/icons";
import Filter from "./Filter";
import CategoriesFilter from "./CategoriesFilter";
import PriceFIlter from "./PriceFilter";
import { CartHover } from "../../ui/cart/Cart";

// import Test from "./Test";
import data from "../../../data/cart.json";

export default function MainShop() {
  const [catFilter] = useState([
    { id: 1, text: "headphone" },
    { id: 2, text: "headset" },
    { id: 3, text: "airpod" },
    { id: 4, text: "mobile" },
    { id: 5, text: "test" },
    { id: 6, text: "test" },
    { id: 7, text: "test" },
    { id: 8, text: "test" },
    { id: 9, text: "test" },
  ]);
  const [prFilter] = useState([
    { id: 1, text: "$0.00 - $99.99" },
    { id: 2, text: "$100.00 - $199.99" },
    { id: 3, text: "$200.00 - $299.99" },
    { id: 4, text: "$400.00+" },
  ]);
  const [selectCat, setSelectCat] = useState<string[]>([catFilter[0].text]);

  // Carts
  const cart = data.carts;
  const [visibleCart, setVisibleCart] = useState(9);
  function showMoreProduct() {
    setVisibleCart((prev) => prev + 6);
  }

  return (
    <div className="flex mt-16 gap-14">
      <div className="flex flex-col w-1/4 gap-8">
        <div className="flex items-center gap-1">
          <FilterIcon />
          <h3 className="text-lg font-semibold">Filter</h3>
        </div>

        <Filter title="categories" className="overflow-scroll">
          {catFilter.map((item) => (
            <CategoriesFilter
              text={item.text}
              key={item.id}
              onClick={() => setSelectCat(() => [item.text])}
            />
          ))}
        </Filter>

        <Filter title="price">
          {prFilter.map((item) => (
            <PriceFIlter text={item.text} key={item.id} />
          ))}
        </Filter>
      </div>
      <div className="flex flex-col w-3/4">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold uppercase">{selectCat}</h2>
          <div className="w-1/3 h-10"></div>
        </div>
        <div className="grid grid-cols-3 grid-rows-3 mt-6 gap-x-6 gap-y-8">
          {cart.slice(0, visibleCart).map((item) => (
            <CartHover
              src={item.src}
              title={item.title}
              detail={item.detail}
              description={item.description}
              price={item.price}
              discount={item.discount}
              rating={item.rating}
              key={item.id}
            />
          ))}
        </div>

        {visibleCart < cart.length && (
          <button
            className="self-center py-1 mt-10 border-2 border-gray-500 text-neutral-06 hover:font-semibold hover:border-gray-700 w-36 rounded-xl"
            onClick={showMoreProduct}
          >
            Show more
          </button>
        )}
      </div>
    </div>
  );
}
