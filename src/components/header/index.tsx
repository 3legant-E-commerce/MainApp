import { useNavigate } from "react-router-dom";
import DarkModeToggle from "../../ui/DarkModeToggle";
import { HamburgerMenu } from "../../ui/HamburgerMenu";
import MainContainer from "../../ui/MainContainer";
import ScrollYMotion from "../../ui/ScrollYMotion";
import UserAvatar from "../authentication/UserAvatar";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 z-[999] w-full shadow-md bg-bg-color dark:bg-grey-900 dark:border-b dark:border-grey-800">
      <MainContainer className="flex items-center justify-between h-[70px]">
        <button onClick={() => navigate("/")}>
          {/* <Logo /> */}
          <h2
            className="~text-lg/3xl font-bold ~tracking-wide/widest text-grey-800 dark:text-grey-200 text-center"
            style={{ fontFamily: "Poppins" }}
          >
            R.A.M.O
          </h2>
        </button>

        {/* <ul className="flex items-center gap-4 font-semibold capitalize max-xl:hidden">
          <HeaderList>
            <Link to="/">home</Link>
          </HeaderList>

          <HeaderList>
            <Link to="/shop">shop</Link>
          </HeaderList>

          <HeaderList>
            <Link to="/cart">cart</Link>
          </HeaderList>
        </ul>
 */}
        <div className="flex items-center ~gap-1/2">
          <UserAvatar />
          <DarkModeToggle />
          <HamburgerMenu />
          {/* <HeaderMenu /> */}
        </div>

        <ScrollYMotion />
      </MainContainer>
    </header>
  );
}
