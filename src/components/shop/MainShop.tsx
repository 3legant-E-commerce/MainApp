import { useState } from "react";
// import data from "../../../data/cart.json";
import { useQuery } from "@tanstack/react-query";
import { useMediaQuery } from "react-responsive";
import { useSearchParams } from "react-router-dom";
import { getShops } from "../../services/apiShoping";
import RenderCartItems from "./RenderCartItems";
import { ShopFilter } from "./ShopFilter";
// import { Loading } from "../../ui/Loading";

interface Shop {
  id: number;
  detail: string;
  discount: number;
  image: string;
  title: string;
  rating: number;
  description: string;
  price: number;
}

export default function MainShop() {
  const [activeCart, setActiveCart] = useState(1);
  const [visibleCart, setVisibleCart] = useState(12);
  const [searchParams] = useSearchParams();

  // const cart = data.carts;

  const {
    // isLoading,
    data: shops,
    // error,
  } = useQuery({
    queryKey: ["shop"],
    queryFn: getShops,
  });

  const handleShowCart = (cartNumber: number) => {
    setActiveCart(cartNumber);
    setVisibleCart(cartNumber === 1 ? 12 : 6);
  };

  const showMoreProduct = () => {
    setVisibleCart((prev) => prev + 4);
  };

  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });

  const filterValue = searchParams.get("discount") || "all";
  console.log(filterValue);

  let filteredShop: Shop[] | undefined;
  if (filterValue === "all") filteredShop = shops;

  if (filterValue === "no-discount" && shops)
    filteredShop = shops.filter((shop) => shop.discount === null);

  if (filterValue === "with-discount" && shops)
    filteredShop = shops.filter((shop) => shop.discount > 0);

  // if (isLoading) return <Loading />;

  return (
    <div className="flex mt-16 gap-14">
      <div className="flex flex-col w-full">
        <ShopFilter handleClick={handleShowCart} activeCart={activeCart} />

        <div
          className={`grid gap-6 my-10 ${
            activeCart === 1
              ? `lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ${
                  activeCart === 1 ? "" : "grid-rows-3"
                } gap-y-8`
              : "lg:grid-cols-2 grid-cols-1"
          }`}
        >
          {/* {renderCartItems()} */}
          {filteredShop && (
            <RenderCartItems
              filteredShop={filteredShop}
              visibleCart={visibleCart}
              isSmallScreen={isSmallScreen}
              activeCart={activeCart}
            />
          )}
        </div>

        {filteredShop && visibleCart < filteredShop.length && (
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
