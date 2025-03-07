import { useMutation } from "@tanstack/react-query";
import { login as loaginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface User {
  email: string;
  password: string;
}

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }: User) => loaginApi({ email, password }),

    onSuccess: () => {
      navigate("/account/dashboard");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isPending };
}
