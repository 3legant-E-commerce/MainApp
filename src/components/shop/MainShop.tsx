import { useState } from "react";
import { BottomArrow, ShopViewIcon1, ShopViewIcon2 } from "../../assets/icons";
import { ShopCartView1, ShopCartView2 } from "../../ui/cart/Carts";
import data from "../../../data/cart.json";
import Button from "../../ui/Button";
import CategoriesOption from "./CategoriesOption";
import PriceFilter from "./PriceFilter";
import FilterSearch from "./FilterSearch";
import { useMediaQuery } from "react-responsive";

export default function MainShop() {
  const [activeCart, setActiveCart] = useState(1);
  const [visibleCart, setVisibleCart] = useState(12);

  const cart = data.carts;

  const handleShowCart = (cartNumber: number) => {
    setActiveCart(cartNumber);
    setVisibleCart(cartNumber === 1 ? 12 : 6);
  };

  const showMoreProduct = () => {
    setVisibleCart((prev) => prev + 4);
  };

  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });

  const renderCartItems = () =>
    cart.slice(0, visibleCart).map((item) =>
      isSmallScreen ? (
        <ShopCartView2
          key={item.id}
          detail={item.detail}
          discount={item.discount}
          src={item.src}
          title={item.title}
          rating={item.rating}
          description={item.description}
          price={item.price}
        />
      ) : activeCart === 1 ? (
        <ShopCartView1
          key={item.id}
          src={item.src}
          title={item.title}
          detail={item.detail}
          description={item.description}
          price={item.price}
          discount={item.discount}
          rating={item.rating}
        >
          <Button className="absolute w-3/4 transition-all duration-1000 transform -translate-x-1/2 translate-y-4 opacity-0 bottom-4 left-1/2 group-hover:opacity-100 group-hover:translate-y-0">
            Add to cart
          </Button>
        </ShopCartView1>
      ) : (
        <ShopCartView2
          key={item.id}
          detail={item.detail}
          discount={item.discount}
          src={item.src}
          title={item.title}
          rating={item.rating}
          description={item.description}
          price={item.price}
        />
      )
    );

  return (
    <div className="flex mt-16 gap-14">
      <div className="flex flex-col w-full">
        <div className="flex flex-col lg:flex-row justify-between ~gap-4/6 lg:gap-10">
          <div className="flex flex-col sm:flex-row w-full lg:w-2/5 ~gap-2/4">
            <CategoriesOption />
            <PriceFilter />
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full lg:w-3/5 ~gap-4/6 md:gap-8">
            <div className="w-full md:w-1/2">
              <FilterSearch />
            </div>
            <div className="flex max-lg:w-full max-lg:justify-between items-center gap-4 md:gap-6">
              <div className="flex items-center justify-center gap-1 font-semibold cursor-pointer">
                <span className="text-sm">Sort by</span>
                <BottomArrow className="relative top-0.5" />
              </div>
              <div className="hidden sm:flex items-center gap-2 border cursor-pointer h-fit">
                <div
                  className={`p-2 border ${
                    activeCart === 1 ? "bg-gray-200" : ""
                  }`}
                  onClick={() => handleShowCart(1)}
                >
                  <ShopViewIcon1 />
                </div>
                <div
                  className={`p-2 border ${
                    activeCart === 2 ? "bg-gray-200" : ""
                  }`}
                  onClick={() => handleShowCart(2)}
                >
                  <ShopViewIcon2 />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`grid gap-6 my-10 ${
            activeCart === 1
              ? "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-rows-3 gap-y-8"
              : "lg:grid-cols-2 grid-cols-1"
          }`}
        >
          {renderCartItems()}
        </div>

        {visibleCart < cart.length && (
          <button
            className="self-center py-1 my-10 border-2 border-gray-500 text-neutral-06 hover:font-semibold hover:border-gray-700 w-36 rounded-xl"
            onClick={showMoreProduct}
          >
            Show more
          </button>
        )}
      </div>
    </div>
  );
}
