import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { CreateEditShop } from "../../services/apiShoping";

function useCreateShop() {
  const queryClient = useQueryClient();
  const someId = "yourIdValue"; // Define someId with an appropriate value
  const { mutate: createShop, status } = useMutation({
    mutationFn: (newShop) => CreateEditShop(newShop, someId),
    onSuccess: () => {
      toast.success("New shop successfully created");
      queryClient.invalidateQueries({ queryKey: ["shop"] });
      //   reset();
    },
    onError: (err) => toast.error(err.message),
  });

  return { createShop, isShoping: status === "pending" };
}

export default useCreateShop;
