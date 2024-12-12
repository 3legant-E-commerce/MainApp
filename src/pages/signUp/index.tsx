import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row">
      <div className="h-[250px] md:h-screen md:w-1/2">
        <img
          src="../../../public/images/sofa-01.png"
          className="w-full md:h-screen"
          alt=""
        />
      </div>
      <div className="h-[350px] flex flex-col pl-20 pr-56 py-48 md:h-screen md:w-1/2">
        <h2 className="mb-6 text-4xl font-semibold">Sign up</h2>
        <p>
          Already have an account ?
          <span
            className="ml-2 overflow-hidden text-red-500 cursor-pointer"
            onClick={() => navigate("/SigIn")}
          >
            Sign in
          </span>
        </p>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
}
