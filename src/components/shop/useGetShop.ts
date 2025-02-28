import { useQuery } from "@tanstack/react-query";
import { getShops } from "../../services/apiShoping";
import { useSearchParams } from "react-router-dom";

function useGetShop() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";
  const price = searchParams.get("price") || "all";
  const searchTerm = searchParams.get("search") || "";
  const filterValue = searchParams.get("discount") || "all";

  const {
    isLoading,
    data: shops,
    error,
  } = useQuery({
    queryKey: ["shop", category, price, searchTerm, filterValue],
    queryFn: () => getShops({ category, price }),
  });

  let filteredShops = shops || [];
  if (searchTerm && shops) {
    filteredShops = shops.filter((shop) =>
      [shop.title, shop.description, shop.category].some((field) =>
        field.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }

  if (filterValue === "no-discount" && shops) {
    filteredShops = filteredShops.filter((shop) => shop.discount === null);
  }

  if (filterValue === "with-discount" && shops) {
    filteredShops = filteredShops.filter((shop) => shop.discount > 0);
  }

  return { isLoading, shops: filteredShops, error };
}

export default useGetShop;
