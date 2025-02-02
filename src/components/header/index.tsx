import { Logo } from "../../assets/Svg";
import Tools from "./Tools";
import HeaderList from "./HeaderList";
import { BottomArrow } from "../../assets/icons";
import { Link, useNavigate } from "react-router-dom";
import MainContainer from "../../ui/MainContainer";
import ScrollYMotion from "../../ui/ScrollYMotion";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 z-[999] w-full shadow-md bg-bg-color">
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
            <Link to="/product">product</Link>
          </HeaderList>

          {/* <HeaderList>
            <span>contact us</span>
          </HeaderList> */}

          <HeaderList>
            <Link to="/cart">cart</Link>
          </HeaderList>

          <HeaderList>
            <Link to="/account">account</Link>
          </HeaderList>
        </ul>

        <Tools />

        <ScrollYMotion />
      </MainContainer>
    </header>
  );
}
