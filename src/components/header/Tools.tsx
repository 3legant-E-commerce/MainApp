import { useNavigate } from "react-router-dom";
import { CartIcon, ProfileIcon, SearchIcon } from "../../assets/icons";

import { HamburgerMenu } from "../../ui/HamburgerMenu";

export default function Tools() {
  const navigate = useNavigate();

  return (
    <ul className="flex items-center gap-4">
      <SearchIcon className="max-sm:hidden" />
      <button className="cursor-pointer" onClick={() => navigate("/SignUp")}>
        <ProfileIcon className="max-sm:hidden" />
      </button>
      <div className="flex items-center gap-0.5">
        <CartIcon />
        <span className="flex items-center justify-center w-5 h-5 p-2 text-sm text-white bg-black rounded-full">
          2
        </span>

        <HamburgerMenu />
      </div>
    </ul>
  );
}
