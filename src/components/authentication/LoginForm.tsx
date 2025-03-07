import { useNavigate } from "react-router-dom";

import MainContainer from "../../ui/MainContainer";
import LoginInput from "./LoginInput";

export default function LoginForm() {
  const navigate = useNavigate();

  return (
    <MainContainer className="mx-20 mt-10">
      <div className="flex flex-col w-full p-20 border-2 border-black">
        <h2 className="~mb-1/6 ~text-2xl/4xl font-semibold">Login</h2>
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
    </MainContainer>
  );
}

{
  /* <div className="md:w-1/2">
        <img
          src="images/sofa-01.png"
          className="object-cover w-full max-md:h-[300px] md:h-screen"
          alt="sofa"
        />
      </div> */
}
