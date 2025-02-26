import { useForm } from "react-hook-form";
import InputForm from "../../ui/InputForm";
import { Input } from "@nextui-org/react";
import Error from "../../ui/Error";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

export default function Dashboard() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  function onSubmit(data: FormValues) {
    console.log("Form Data:", data);
    reset();
  }

  return (
    <InputForm
      onSubmit={handleSubmit(onSubmit)}
      button="Save Changes"
      className="rounded-md py-10"
    >
      <h2 className="text-xl font-semibold">Contact Information</h2>
      {/* <div className="grid md:grid-cols-2 gap-x-8 ~gap-y-4/10"> */}
      <div className="flex flex-col gap-10">
        <div>
          <Input
            label="First Name *"
            type="text"
            id="firstName"
            variant="underlined"
            {...register("firstName", { required: "First Name is required" })}
            size="sm"
            className="placeholder:text-sm font-semibold uppercase"
          />
          <Error>{errors?.firstName?.message}</Error>
        </div>

        <div>
          <Input
            label="last name *"
            type="text"
            id="lastName"
            variant="underlined"
            {...register("lastName", { required: "Last Name is required" })}
            size="sm"
            className="placeholder:text-sm font-semibold uppercase"
          />
          <Error>{errors?.lastName?.message}</Error>
        </div>

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
            className="placeholder:text-sm font-semibold uppercase"
          />
          <Error>{errors?.phoneNumber?.message}</Error>
        </div>

        <div>
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
            className="placeholder:text-sm font-semibold uppercase"
          />
        </div>
      </div>
    </InputForm>
  );
}
