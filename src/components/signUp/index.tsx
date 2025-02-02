import { useNavigate } from "react-router-dom";
import SignupForm from "./SignupForm";

export default function SignUpForm() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <img
          src="images/sofa-01.png"
          className="object-cover w-full max-md:h-[250px] md:h-screen"
          alt="sofa"
        />
      </div>
      <div className="flex flex-col ~pl-6/20 ~pr-10/64 ~py-2/20 md:h-screen md:w-1/2">
        <h2 className="~mb-1/6 ~text-2xl/4xl font-semibold">Sign Up</h2>
        <div className="~mb-1/6 ~text-sm/lg text-neutral-04">
          Already have an account ?
          <span
            className="~ml-1/2 overflow-hidden font-semibold text-red-400 cursor-pointer hover:text-red-600"
            onClick={() => navigate("/SigIn")}
          >
            Sign In
          </span>
        </div>

        <SignupForm />
      </div>
    </div>
  );
}
