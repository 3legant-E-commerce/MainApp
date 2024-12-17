import { useState } from "react";
import { FilterIcon } from "../../assets/icons";
import Filter from "./Filter";
import CategoriesFilter from "./CategoriesFilter";
import PriceFIlter from "./PriceFilter";
import { CartHover } from "../../ui/cart/Cart";
import Button from "../../ui/Button";

export default function MainShop() {
  const [catFilter, setCatFilter] = useState([
    { id: 1, text: "living room" },
    { id: 2, text: "bedroom" },
    { id: 3, text: "kitchen" },
    { id: 4, text: "bathroom" },
    { id: 5, text: "dinning" },
    { id: 6, text: "outdoor" },
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

  const cart = [
    {
      id: 1,
      src: "/images/headphone-01.png",
      title: "airpod",
      detail: "new",
      description: "JBL Reflect Flow Pro+ Bluetooth Truly Wireless Sports",
      price: 20000,
      discount: 20,
      rating: 4,
    },
    {
      id: 2,
      src: "/images/airpod-01.png",
      title: "airpod",
      detail: "new",
      description: "JBL Reflect Flow Pro+ Bluetooth Truly Wireless Sports",
      price: 300,
      discount: 50,
      rating: 4,
    },
    {
      id: 3,
      src: "/images/airpod-02.png",
      title: "airpod",
      detail: "hot",
      description: "JBL Reflect Flow Pro+ Bluetooth Truly Wireless Sports",
      price: 300,
      discount: 10,
      rating: 1,
    },
    {
      id: 4,
      src: "/images/headphone-03.png",
      title: "airpod",
      detail: "new",
      description: "Test",
      discount: 70,
      price: 600,
      rating: 3,
    },
    {
      id: 5,
      src: "/images/headphone-04.png",
      title: "airpod",
      detail: "new",
      description: "Test",
      discount: 70,
      price: 600,
      rating: 3,
    },
    {
      id: 6,
      src: "/images/headphone-05.png",
      title: "airpod",
      detail: "new",
      description: "Test",
      discount: 70,
      price: 600,
      rating: 3,
    },
    {
      id: 7,
      src: "/images/headphone-01.png",
      title: "airpod",
      detail: "new",
      description: "Test",
      discount: 70,
      price: 600,
      rating: 3,
    },
    {
      id: 8,
      src: "/images/headphone-04.png",
      title: "airpod",
      detail: "new",
      description: "Test",
      discount: 70,
      price: 600,
      rating: 3,
    },
    {
      id: 9,
      src: "/images/headphone-03.png",
      title: "airpod",
      detail: "new",
      description: "Test",
      discount: 70,
      price: 600,
      rating: 3,
    },
  ];

  const [selectCat, setSelectCat] = useState<string[]>([catFilter[0].text]);

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
          <h2 className="text-lg font-semibold">{selectCat}</h2>
          <div className="w-1/3 h-10"></div>
        </div>
        <div className="grid grid-cols-3 grid-rows-3 mt-6 gap-x-6 gap-y-8">
          {cart.map((item) => (
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

        <button className="self-center py-1 mt-10 border-2 border-gray-500 text-neutral-06 hover:font-semibold hover:border-gray-700 w-36 rounded-xl">
          Show more
        </button>
      </div>
    </div>
  );
}
