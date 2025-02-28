import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import RenderCartItems from "./RenderCartItems";
import { ShopFilter } from "./ShopFilter";
import { Loading } from "../../ui/Loading";
import useGetShop from "./useGetShop";

export default function MainShop() {
  const [activeCart, setActiveCart] = useState(1);
  const [visibleCart, setVisibleCart] = useState(8);
  const [isFetching, setIsFetching] = useState(false);
  const loaderRef = useRef<HTMLButtonElement | null>(null);

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
          }, 2000);
        }
      },
      { threshold: 1.0 }
    );

    const currentLoaderRef = loaderRef.current;
    if (currentLoaderRef) {
      observer.observe(currentLoaderRef);
    }

    return () => {
      if (currentLoaderRef) {
        observer.unobserve(currentLoaderRef);
      }
    };
  }, [isFetching]);

  const showMoreProduct = () => {
    setVisibleCart((prev) => prev + 4);
  };

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
          <button
            ref={loaderRef}
            className="self-center py-1 my-10 border-2 border-gray-500 text-neutral-06 hover:font-semibold hover:border-gray-700 w-36 h-16 rounded-xl"
            onClick={showMoreProduct}
          >
            {isFetching && <span>Show more...</span>}
          </button>
        )}
      </div>
    </div>
  );
}
