import { useNavigate } from "react-router-dom";
import LoginInput from "./LoginInput";

export default function LoginForm() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <img
          src="images/sofa-01.png"
          className="object-cover w-full max-md:h-[300px] md:h-screen"
          alt="sofa"
        />
      </div>
      <div className="flex items-center ~pl-6/20 pr-12 sm:pr-20 md:pr-28 lg:pr-36 xl:pr-52 justify-center md:w-1/2">
        <div className="flex flex-col w-full ~py-2/20">
          <h2 className="~mb-1/6 ~text-2xl/4xl font-semibold">Sign In</h2>
          <div className="~mb-1/6 ~text-sm/lg text-neutral-04">
            Don't have an account yet ?
            <span
              className="~ml-1/2 overflow-hidden font-semibold text-red-400 cursor-pointer hover:text-red-600"
              onClick={() => navigate("/SignUp")}
            >
              Sign Up
            </span>
          </div>

          <LoginInput />
        </div>
      </div>
    </div>
  );
}
