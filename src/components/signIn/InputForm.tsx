import { Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Error from "./Error";
import { toast } from "react-hot-toast";
import { EyeFilledIcon, EyeSlashFilledIcon } from "../../assets/icons";
import { useState } from "react";

type FormValues = {
  identifier: string;
  password: string;
  // terms: boolean;
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
            <strong>Identifier (Username/Email):</strong> {data.identifier}
          </li>
          <li>
            <strong>Password:</strong> {data.password}
          </li>
        </ul>
      </div>
    );

    reset();
  }

  return (
    <form
      className="flex flex-col flex-wrap w-full gap-3 md:flex-nowrap"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Input
          label="Your Username or Email address"
          type="text"
          id="identifier"
          variant="underlined"
          {...register("identifier", {
            required: "Username or Email address is required",
            validate: (value) =>
              value.includes("@") ||
              value.length >= 3 ||
              "Enter a valid email or at least 3 characters for username",
          })}
        />

        <Error>{errors?.identifier?.message}</Error>
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
