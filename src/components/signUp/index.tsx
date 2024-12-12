import { useNavigate } from "react-router-dom";
import InputForm from "./InputForm";
// import Input from "../../ui/Input";

export default function SignUpForm() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:h-screen md:w-1/2">
        <img
          src="images/sofa-01.png"
          className="w-full md:h-screen"
          alt="sofa"
        />
      </div>
      <div className="flex flex-col ~pl-4/20 ~pr-10/72 py-28 md:h-screen md:w-1/2 ">
        <h2 className="mb-6 text-4xl font-semibold">Sign up</h2>
        <div className="mb-6 text-neutral-04 ">
          Already have an account ?
          <span
            className="ml-2 overflow-hidden font-semibold text-red-400 cursor-pointer hover:text-red-600"
            onClick={() => navigate("/SigIn")}
          >
            Sign in
          </span>
        </div>

        <InputForm />
      </div>
    </div>
  );
}
