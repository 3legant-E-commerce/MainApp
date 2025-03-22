import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import Logout from "../components/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import DarkModeToggle from "../components/header/DarkModeToggle";

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <ul className="flex items-center ~gap-1/3">
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser className="~text-lg/2xl" />
        </ButtonIcon>
      </li>

      <li>
        <DarkModeToggle />
      </li>

      <li>
        <Logout />
      </li>

      {/* <li className="flex items-center gap-0.5">
        <CartIcon />
        <span className="flex items-center justify-center w-5 h-5 p-2 text-sm text-white bg-black rounded-full">
          2
        </span>

        <HamburgerMenu />
      </li> */}
    </ul>
  );
}

export default HeaderMenu;
