import { useState } from "react";
import Button from "../../ui/Button";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/Spinner";

export default function LoginInput() {
  const [email, setEmail] = useState<string>("ramtin@example.com");
  const [password, setPassWord] = useState<string>("RAMTIN1234");

  const { login, isPending } = useLogin();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email || !password) return;
    login({ email, password });
  }

  return (
    <form
      className="flex flex-col flex-wrap w-full gap-3 md:flex-nowrap"
      onSubmit={handleSubmit}
    >
      <FormRowVertical label="Email address">
        <input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isPending}
          className="border border-gray-300 bg-white rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassWord(e.target.value)}
          disabled={isPending}
          className="border border-gray-300 bg-white rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </FormRowVertical>

      <div className="flex justify-between ~gap-4/10 ~mt-2/8">
        <Button type="submit" className="~text-sm/lg ~px-6/12">
          {!isPending ? "Log in" : <SpinnerMini />}
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

/* deactive confirm email :in supabase/authenication/sign up/email/confirm email , read documentations */
/* SUPABASE : go to API docs we need Authentication and user management */
