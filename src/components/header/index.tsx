import { Link, useNavigate } from "react-router-dom";
import { BottomArrow } from "../../assets/icons";
import { Logo } from "../../assets/Svg";
import HeaderMenu from "../../ui/HeaderMenu";
import MainContainer from "../../ui/MainContainer";
import ScrollYMotion from "../../ui/ScrollYMotion";
import UserAvatar from "../authentication/UserAvatar";
import HeaderList from "./HeaderList";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 z-[999] w-full shadow-md bg-bg-color dark:bg-grey-900 dark:border-b dark:border-grey-800">
      <MainContainer className="flex items-center justify-between h-[70px]">
        <button onClick={() => navigate("/")}>
          <Logo />
        </button>

        <ul className="flex items-center gap-4 ~text-sm/lg font-semibold capitalize">
          <HeaderList>
            <Link to="/">home</Link>
          </HeaderList>

          <HeaderList>
            <Link to="/shop">shop</Link>
            <BottomArrow />
          </HeaderList>

          <HeaderList>
            <Link to="/cart">cart</Link>
          </HeaderList>
        </ul>

        <div className="flex items-center ~gap-1/8">
          <UserAvatar />
          <HeaderMenu />
        </div>

        <ScrollYMotion />
      </MainContainer>
    </header>
  );
}
