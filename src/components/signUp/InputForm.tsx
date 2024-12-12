import { Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Error from "./Error";

type FormValues = {
  name: string;
  username: string;
  email: string;
  password: string;
  terms: boolean;
};

export default function InputForm() {
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<FormValues>();

  function onSubmit(data: FormValues) {
    console.log("Form Data:", data);
  }

  return (
    <form
      className="flex flex-col flex-wrap w-full gap-4 md:flex-nowrap"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Input
          label="Your name"
          type="text"
          id="name"
          variant="underlined"
          {...register("name", { required: "this field is required" })}
        />

        <Error>{errors?.name?.message}</Error>
      </div>

      <div>
        <Input
          label="Username"
          type="text"
          id="username"
          variant="underlined"
          {...register("username", { required: "this field is required" })}
        />

        <Error>{errors?.username?.message}</Error>
      </div>

      <div>
        <Input
          label="Email address"
          type="email"
          id="email"
          variant="underlined"
          {...register("email", { required: "this field is required" })}
        />

        <Error>{errors?.email?.message}</Error>
      </div>

      <div>
        <Input
          label="Password"
          type="password"
          id="password"
          variant="underlined"
          {...register("password", { required: "this field is required" })}
        />

        <Error>{errors?.name?.message}</Error>
      </div>

      <div className="flex justify-between gap-10 mt-8">
        <Button type="submit">Sign Up</Button>

        <Button type="reset" className="text-black bg-gray-400">
          Reset
        </Button>
      </div>
    </form>
  );
}
