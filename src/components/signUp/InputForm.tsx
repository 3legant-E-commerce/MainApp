import { Checkbox, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Error from "./Error";
import { toast } from "react-hot-toast";
import { EyeFilledIcon, EyeSlashFilledIcon } from "../../assets/icons";
import { useState } from "react";

type FormValues = {
  name: string;
  username: string;
  email: string;
  password: string;
  terms: boolean;
};

export default function InputForm() {
  // const [formData, setFormData] = useState<FormValues | undefined>(undefined);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  function onSubmit(data: FormValues) {
    console.log("Form Data:", data);
    // setFormData(data);

    toast.success(
      <div>
        <h3>Form Submitted Data:</h3>
        <ul>
          <li>
            <strong>Name:</strong> {data.name}
          </li>
          <li>
            <strong>Username:</strong> {data.username}
          </li>
          <li>
            <strong>Email:</strong> {data.email}
          </li>
          <li>
            <strong>Password:</strong> {data.password}
          </li>
          <li>
            <strong>Terms Accepted:</strong> {data.terms ? "Yes" : "No"}
          </li>
        </ul>
      </div>
    );

    reset();
  }

  return (
    <form
      className="flex flex-col flex-wrap w-full sm:gap-3 md:flex-nowrap"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Input
          label="Your name"
          type="text"
          id="name"
          variant="underlined"
          {...register("name", { required: "Name is required" })}
          size="sm"
          // placeholder="Enter your name"
          className="placeholder:text-sm"
        />

        <Error>{errors?.name?.message}</Error>
      </div>

      <div>
        <Input
          label="Username"
          type="text"
          id="username"
          variant="underlined"
          {...register("username", {
            required: "Username is required",
          })}
        />

        <Error>{errors?.username?.message}</Error>
      </div>

      <div>
        <Input
          label="Email address"
          // defaultValue="test@example.com"
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
        />

        <Error>{errors?.email?.message}</Error>
      </div>

      <div>
        <Input
          label="Password"
          type={isVisible ? "text" : "password"}
          id="password"
          variant="underlined"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
              message:
                "Password must include uppercase, lowercase, and a number",
            },
          })}
          autoComplete="new-password"
          endContent={
            <button
              aria-label="toggle password visibility"
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl pointer-events-none text-default-400" />
              ) : (
                <EyeFilledIcon className="text-2xl pointer-events-none text-default-400" />
              )}
            </button>
          }
        />

        <Error>{errors?.password?.message}</Error>
      </div>

      <div className="flex flex-col gap-3 mt-2">
        <Checkbox
          {...register("terms", { required: "You must agree to the terms" })}
          color="secondary"
          radius="sm"
          size="sm"
        >
          I agree with
          <a
            href="#"
            className="mx-2 text-blue-500 underline underline-offset-4"
          >
            Privacy Policy
          </a>
          and
          <a
            href="#"
            className="ml-2 text-blue-500 underline underline-offset-4"
          >
            Terms of Use
          </a>
        </Checkbox>

        <Error>{errors?.terms?.message}</Error>
      </div>

      <div className="flex justify-between ~gap-4/10 ~mt-2/8">
        <Button type="submit" className="~text-sm/lg ~px-6/12">
          Sign Up
        </Button>

        <Button
          type="reset"
          className="~px-6/12 text-black ~text-sm/lg bg-gray-400"
        >
          Reset
        </Button>
      </div>
    </form>
  );
}
