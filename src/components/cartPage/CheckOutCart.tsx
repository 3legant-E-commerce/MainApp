import { Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Error from "../../ui/Error";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
};

export default function CheckOutCart() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  function onSubmit(data: FormValues) {
    console.log("Form Data:", data);
    // setFormData(data);

    reset();
  }

  return (
    <form
      className="w-full ~gap-4/8 md:flex-nowrap flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="border rounded-md border-stone-300 px-6 py-10">
        <h2 className="font-semibold text-xl mb-4">Contact Information</h2>
        <div className="grid md:grid-cols-2 gap-x-8 ~gap-y-4/10">
          <Input
            label="FIRST NAME"
            type="text"
            id="firstName"
            variant="underlined"
            // {...register("name", { required: "Name is required" })}
            {...register("firstName")}
            size="sm"
            className="placeholder:text-sm"
          />

          <Input
            label="LAST NAME"
            type="text"
            id="lastName"
            variant="underlined"
            {...register("lastName")}
            size="sm"
            className="placeholder:text-sm"
          />

          <div>
            <Input
              label="PHONE NUMBER"
              type="text"
              id="phoneNumber"
              variant="underlined"
              {...register("phoneNumber", {
                required: "Phone number is required",
                validate: {
                  minLength: (value) =>
                    value.toString().length >= 10 ||
                    "Phone number must be at least 10 digits",
                  maxLength: (value) =>
                    value.toString().length <= 11 ||
                    "Phone number cannot be more than 11 digits",
                },
              })}
              size="sm"
              className="placeholder:text-sm"
            />
            <Error>{errors?.phoneNumber?.message}</Error>
          </div>

          <Input
            label="Email"
            type="email"
            id="email"
            variant="underlined"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
            size="sm"
            className="placeholder:text-sm"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="~text-sm/lg ~px-6/12 w-full md:w-1/2 mx-auto mt-8"
      >
        Place Order
      </Button>
    </form>
  );
}
