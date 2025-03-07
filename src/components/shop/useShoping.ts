import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getShop } from "../../services/apiShoping";

export function useShoping() {
  const { shopId } = useParams();

  const {
    isLoading,
    data: shoping,
    error,
  } = useQuery({
    queryKey: ["shop", shopId],
    queryFn: () => getShop(shopId),
    retry: false,
  });

  return { isLoading, shoping, error };
}
