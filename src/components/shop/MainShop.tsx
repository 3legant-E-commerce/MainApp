import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import RenderCartItems from "./RenderCartItems";
import { ShopFilter } from "./ShopFilter";
import { Loading } from "../../ui/Loading";
import useGetShop from "./useGetShop";
import { Spinner } from "@nextui-org/react";

export default function MainShop() {
  const [activeCart, setActiveCart] = useState(1);
  const [visibleCart, setVisibleCart] = useState(8);
  const [isFetching, setIsFetching] = useState(false);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const { shops, isLoading } = useGetShop();

  const handleShowCart = (cartNumber: number) => {
    setActiveCart(cartNumber);
    setVisibleCart(cartNumber === 1 ? 12 : 6);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetching) {
          setIsFetching(true);
          setTimeout(() => {
            setVisibleCart((prev) => prev + 4);
            setIsFetching(false);
          }, 1000);
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [visibleCart, isFetching]);

  /*  const showMoreProduct = () => {
    setVisibleCart((prev) => prev + 4);
  }; */

  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });

  if (isLoading) return <Loading />;

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
          {shops && (
            <RenderCartItems
              filteredShop={shops}
              visibleCart={visibleCart}
              isSmallScreen={isSmallScreen}
              activeCart={activeCart}
            />
          )}
        </div>

        {shops && visibleCart < shops.length && (
          <div
            ref={loaderRef}
            className="self-center flex justify-center items-center gap-6 ~px-2/4 ~py-1/2 my-10 border-2 border-gray-500 text-neutral-06 hover:font-semibold hover:border-gray-700 rounded-xl cursor-pointer"
          >
            {isFetching ? (
              <>
                <span>Loading more . . .</span>
                <Spinner />
              </>
            ) : (
              <>
                <span className="opacity-50">Loading more...</span>
                <Spinner />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
