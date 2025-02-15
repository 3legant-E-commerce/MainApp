import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { CreateEditShop } from "../../services/apiShoping";

export function useEditShops() {
  const queryClient = useQueryClient();
  const { mutate: editShop, status } = useMutation({
    mutationFn: (data: { newShopData: any; id: string }) =>
      CreateEditShop(data.newShopData, data.id),
    onSuccess: () => {
      toast.success("shop successfully edited");
      queryClient.invalidateQueries({ queryKey: ["shop"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editShop, isEditing: status === "pending" };
}
