import { Logo } from "../../assets/Svg";
import Tools from "./Tools";
import HeaderList from "./HeaderList";
import { BottomArrow } from "../../assets/icons";
import { Link } from "react-router-dom";
import MainContainer from "../MainContainer";

export default function Header() {
  return (
    <MainContainer>
      <header className="sticky top-0 h-[60px] flex justify-between items-center bg-white">
        <Logo />

        <ul className="flex items-center gap-4 ~text-sm/lg font-semibold capitalize">
          <HeaderList>
            <Link to="/">home</Link>
          </HeaderList>

          <HeaderList>
            <Link to="/shop">shop</Link>
            <BottomArrow />
          </HeaderList>

          <HeaderList>
            <span>product</span>
          </HeaderList>

          <HeaderList>
            <span>contact us</span>
          </HeaderList>
        </ul>

        <Tools />
      </header>
    </MainContainer>
  );
}
