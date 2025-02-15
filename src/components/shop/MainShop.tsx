import { useState } from "react";
import { ShopViewIcon1, ShopViewIcon2 } from "../../assets/icons";
import { ShopCartView1, ShopCartView2 } from "../../ui/cart/Carts";
// import data from "../../../data/cart.json";
import Button from "../../ui/Button";
import CategoriesOption from "./CategoriesOption";
import PriceFilter from "./PriceFilter";
import FilterSearch from "./FilterSearch";
import { useMediaQuery } from "react-responsive";
import { useQuery } from "@tanstack/react-query";
import { getShops } from "../../services/apiShoping";
import { useSearchParams } from "react-router-dom";
import Filter from "../../ui/Filter";
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

  const renderCartItems = () =>
    filteredShop?.slice(0, visibleCart).map((item) =>
      isSmallScreen ? (
        <ShopCartView2
          key={item.id}
          detail={item.detail}
          discount={item.discount}
          src={item.image}
          title={item.title}
          rating={item.rating}
          description={item.description}
          price={item.price}
        />
      ) : activeCart === 1 ? (
        <ShopCartView1
          key={item.id}
          src={item.image}
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
          src={item.image}
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
            <div className="flex w-1/2 max-lg:w-full justify-between max-lg:justify-between items-center gap-4 md:gap-6">
              <div className="w-full font-semibold cursor-pointer">
                <Filter
                  filterField="discount"
                  options={[
                    { value: "all", label: "All" },
                    { value: "no-discount", label: "No discount" },
                    { value: "with-discount", label: "With discount" },
                  ]}
                />
              </div>
              <div className="hidden sm:flex items-center gap-2 border cursor-pointer h-fit self-end">
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
              ? `lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ${
                  activeCart === 1 ? "" : "grid-rows-3"
                } gap-y-8`
              : "lg:grid-cols-2 grid-cols-1"
          }`}
        >
          {renderCartItems()}
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
